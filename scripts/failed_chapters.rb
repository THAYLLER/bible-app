require 'byebug'

FAILURE_STRING = "Unable to pull chapter"

def file_failures_by_version
  failures = Hash.new { |h,k| h[k] = [] }

  version_dirs = Dir['bibles/*']
  version_dirs.each do |version|
    truncated_version = version.gsub("bibles/", "")

    failed_files = 0

    files = Dir["#{version}/*"]

    files.each do |file|
      begin
        File.open(file) do |f|
          line = f.readline

          if line.include?(FAILURE_STRING)
            # byebug
            failures[truncated_version] << File.basename(file)
            failed_files += 1
          end
        end
      rescue StandardError => e
        puts "Error reading file #{file}! #{e.message}"
        failures[truncated_version] << File.basename(file)
        failed_files += 1
      end
    end

    puts "In version #{truncated_version} #{failed_files} out of #{files.count} failed to download"
    puts "#{((failed_files / files.count.to_f) * 100).round(2)}% failed."
  end

  failures
end

file_failures_by_version

puts "Fin..."