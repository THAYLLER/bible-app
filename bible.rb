require 'bible_gateway'
require 'byebug'

puts "Type in a Bible verse to get..."

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

bible_map = parse_map

byebug

exit

verse = gets.chomp

b = BibleGateway.new # defaults to :king_james_version, but can be initialized to different version
response = b.lookup(verse)

doc = Nokogiri::HTML(response[:content])
# Select all paragraphs
paragraphs = doc.xpath("//p")

text = paragraphs.map do |paragraph|
  paragraph.content
end.compact

# byebug

File.open(verse, "w") do |f|
  text.each do|t|
    f.write("#{t}\n")
  end
end

puts "Fin..."