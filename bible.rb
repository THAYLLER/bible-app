require 'bible_gateway'
require 'byebug'
require 'fileutils'

VERSIONS = BibleGateway::VERSIONS

def parse_map
  map = File.open("data/bible_map.txt")

  books = map.readlines

  books.inject({}) do |acc, book|
    chapters = book.split(' ') - [""] # get the chapters and eliminate the space

    # hack for books with numbers in them
    book_name = chapters[0]
    chapter_count = chapters.count - 1
    unless book[0].to_i == 0
      book_name = "#{chapters[0]} #{chapters[1]}"
      chapter_count -= 1
    end

    acc[book_name] = chapter_count 
    acc
  end
end


def lookup_chapter(chapter)
  b = BibleGateway.new(Thread.current[:bible_version]) # defaults to :king_james_version, but can be initialized to different version
  begin
    response = b.lookup(chapter) # sometimes biblegateway fails
  rescue StandardError => e
    puts "Unable to pull chapter #{chapter}"
    return ["Unable to pull chapter #{chapter}"]
  end

  doc = Nokogiri::HTML(response[:content])
  # Select all paragraphs
  paragraphs = doc.xpath("//p")

  text = paragraphs.map do |paragraph|
    paragraph.content
  end.compact
end

def write_chapter(chapter, verses)
  chapter = chapter.gsub(" ", "_")

  FileUtils.mkdir_p "output/#{Thread.current[:bible_abbrev]}"

  File.open("output/#{Thread.current[:bible_abbrev]}/#{chapter}", "w") do |f|
    verses.each do|t|
      f.write("#{t}\n")
    end
  end
end

def rip_bible
  bible_map = parse_map

  version = Thread.current[:bible_version]
  abbrev = Thread.current[:bible_abbrev]

  threads = bible_map.map do |book, chapter_count|
    Thread.new do # :awwyeah:
      Thread.current[:bible_version] = version
      Thread.current[:bible_abbrev] = abbrev

      (1..chapter_count).each do |index|
        chapter = "#{book} #{index}"

        verses = lookup_chapter(chapter)
        write_chapter(chapter, verses)
        puts "Wrote Chapter #{chapter} for translation #{Thread.current[:bible_version]}"
      end
    end
  end

  # Waiting until exit
  threads.each(&:join)
end

processes = VERSIONS.map do |version, abbrev|
  Process.fork do
    Thread.current[:bible_version] = version
    Thread.current[:bible_abbrev] = abbrev
    rip_bible # too much? maybe...
  end
end

Process.waitall
# need to figure out how many things failed when being pulled down
puts "Fin..."