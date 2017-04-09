require 'biblesearch-api'
require 'nokogiri'
require 'byebug'
require 'fileutils'
require 'dotenv/load'
require 'json'
require 'pp'

bible = BibleSearch.new(ENV['API_KEY'])

verses = bible.verses("eng-KJVA:1Pet.3")

puts 'Fin...'