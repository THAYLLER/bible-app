require 'biblesearch-api'
require 'nokogiri'
require 'byebug'
require 'fileutils'
require 'dotenv/load'
require 'json'
require 'pp'

bible = BibleSearch.new(ENV['API_KEY'])

chapters = bible.chapters("eng-CEVD:Song")

def lookup_chapter(chapter)
  bible = BibleSearch.new(ENV['API_KEY'])

  begin
    verses = bible.verses(chapter.id)
    # while verses == [] do # because that's how you detect a response failure
    #   sleep 5 # Give time for the web server to cool down
    #   verses = bible.verses(chapter.id)
    # end
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

byebug

verses = lookup_chapter(chapters.collection.first)

byebug

puts 'Fin...'