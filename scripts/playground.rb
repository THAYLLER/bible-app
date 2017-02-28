require 'bible_gateway'
require 'byebug'

b = BibleGateway.new(:english_standard_version)
response = b.lookup("Acts 3")

doc = Nokogiri::HTML(response[:content])
# Select all paragraphs
paragraphs = doc.xpath("//p")

chapter_string = ""

(0...paragraphs.children.count).each do |index|
  if index % 2 == 0
    verse_number = (index / 2) + 1

    chapter_string += "#{verse_number.to_s}. "
  else
    chapter_string += "#{paragraphs.children[index].content}\n"
  end
end

byebug

text = paragraphs.map do |paragraph|
  paragraph.content
end.compact