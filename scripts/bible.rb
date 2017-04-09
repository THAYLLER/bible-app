require 'biblesearch-api'
require 'nokogiri'
require 'byebug'
require 'fileutils'
require 'dotenv/load'
require 'json'
require 'pp'

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
  byebug
  begin
    verses = bible.verses(chapter.id)
    while verses == [] # because that's how you detect a response failure
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
    puts "Debug info: #{verses}"
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

def rip_bible
  version_info = Thread.current[:bible_info]

  # Lets get a list of those books
  bible = BibleSearch.new(ENV['API_KEY'])
  books = bible.books(version_info.id)

  threads = books.collection.map do |book|
    Thread.new do # :awwyeah:
      Thread.current[:bible_info] = version_info
      bible = BibleSearch.new(ENV['API_KEY'])

      chapters = bible.chapters(version_id: version_info.id, book_id: book.abbr)

      if !chapters.is_a? Array
        chapters.collection.each do |chapter|
          chapter_name = "#{book.name} #{chapter.chapter}"
          file_name = chapter_name.gsub(" ", "_")
          if !File.exists?("bibles/#{version_info.id}/#{file_name}")
            verses = lookup_chapter(chapter)
            write_chapter(version_info, book, chapter, verses)
            puts "Wrote Chapter #{chapter_name} for translation #{version_info.id}"
          end
        end
      else
        puts "rip_bible missed for book #{book.id}"
        puts "Debug info #{chapters}"
      end
    end
  end

  # Waiting until exit
  threads.each(&:join)
end

biblesearch = BibleSearch.new(ENV['API_KEY'])
versions = biblesearch.versions(language: 'eng-US') # get all english versions

puts "Found #{versions.collection.count} english versions..."
# versions = [versions.collection.first] # hack for only one process
sleep 3

processes = versions.collection.map do |version|
  if version.id == "eng-GNTD" || version.id == "eng-KJVA"
    next # Skip this version, it breaks

  Process.fork do
    Thread.current[:bible_info] = version
    rip_bible # Past Mark: too much? maybe... Future Mark: Not at all :D
  end
end

Process.waitall
# need to figure out how many things failed when being pulled down
puts "Fin..."