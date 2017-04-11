require 'biblesearch-api'
require 'nokogiri'
require 'byebug'
require 'fileutils'
require 'dotenv/load'
require 'json'
require 'pp'
require 'erb'

def parse_map
  map = File.open("data/bible_map.txt")

  books = map.readlines

  books.inject({}) do |acc, book|
    chapters = book.split(' ') - [""] # get the chapters and eliminate the space

    # hack for books with numbers in them
    book_name = chapters[0]
    chapter_count = chapters.count - 1
    # unless book[0].to_i == 0
    #   book_name = "#{chapters[0]} #{chapters[1]}"
    #   chapter_count -= 1
    # end

    acc[book_name] = chapter_count
    acc
  end
end


def lookup_chapter(chapter)
  bible = BibleSearch.new(ENV['API_KEY'])

  begin
    verses = bible.verses(chapter.id)
    while verses == [] do # because that's how you detect a response failure
      sleep 5 # Give time for the web server to cool down
      verses = bible.verses(chapter.id)
    end
  rescue StandardError => e
    puts "Unable to pull chapter #{chapter.id}"
    return e.message
  end

  if !verses.is_a? Array
    verses.collection.inject({}) do |acc, verse|
      doc = Nokogiri::HTML(verse.text)
      acc[verse.verse] = doc.xpath("//text()").to_s
      acc
    end
  else
    puts "lookup_chapter missed for chapter #{chapter.id}"
  end
end

def write_chapter(version, book, chapter, verses)
  chapter_name = chapter.chapter.gsub(" ", "_")

  FileUtils.mkdir_p "bibles/#{version.id}/#{book.name}"

  File.open("bibles/#{version.id}/#{book.name}/#{chapter.chapter}", "w") do |f|
    if !verses
      puts "Something is trying to write #{chapter.id}"
      return
    end

    f.write(verses.to_json)
  end
end

def rip_bible(map_only = false)
  version_info = Thread.current[:bible_info]

  @version = version_info.id
  @contents = {}

  bible_map = ERB.new(File.read('bible_map.js.erb'))

  # Lets get a list of those books
  bible = BibleSearch.new(ENV['API_KEY'])
  books = bible.books(version_info.id)

  threads = books.collection.map do |book|
    Thread.new do # :awwyeah:
      Thread.current[:bible_info] = version_info
      bible = BibleSearch.new(ENV['API_KEY'])

      chapters = bible.chapters(version_id: version_info.id, book_id: book.abbr)

      if !chapters.is_a? Array
        @contents[book.name] = chapters.collection.count

        unless map_only
          chapters.collection.each do |chapter|
            chapter_name = "#{book.name} #{chapter.chapter}"
            file_name = chapter_name.gsub(" ", "_")
            if !File.exists?("bibles/#{version_info.id}/#{file_name}")
              verses = lookup_chapter(chapter)
              write_chapter(version_info, book, chapter, verses)
              puts "Wrote Chapter #{chapter_name} for translation #{version_info.id}"
            end
          end
        end
      else
        puts "rip_bible missed for book #{book.id}"
      end
    end
  end

  # Waiting until exit
  threads.each(&:join)

  # Write out the map
  renderer = bible_map.result(binding())

  File.open("bibles/#{version_info.id}/bible_map_#{version_info.id}.js", "w+") do |f|
    f.write(renderer)
  end
end

biblesearch = BibleSearch.new(ENV['API_KEY'])
versions = biblesearch.versions(language: 'eng-US') # get all english versions

puts "Found #{versions.collection.count} english versions..."
# versions = [versions.collection.first] # hack for only one process
sleep 3

map_only = ARGV[0]

processes = versions.collection.map do |version|
  if version.id == "eng-GNTD" || version.id == "eng-KJVA"
    next # Skip this version, it breaks
  end

  Process.fork do
    Thread.current[:bible_info] = version
    rip_bible(!!map_only) # Past Mark: too much? maybe... Future Mark: Not at all :D
  end
end

Process.waitall
# need to figure out how many things failed when being pulled down
puts "Fin..."