# frozen_string_literal: true

# !/usr/bin/env ruby

require 'yaml'

POSTS_DIR = '_posts'
TAGS_DIR = 'tags'

Dir.foreach(POSTS_DIR) do |post|
  next if ['.', '..', '.DS_Store'].include?(post)

  post_yaml = YAML.load_file("#{POSTS_DIR}/#{post}")
  unless post_yaml['tags']&.nil?
    post_yaml['tags'].each do |tag|
      tag.downcase!

      next if File.exist?("#{TAGS_DIR}/#{tag}.html")

      puts("[+] Generating \##{tag} page")

      File.open("#{TAGS_DIR}/#{tag}.html", 'w') do |f|
        f.write(
          "---\nlayout: tag\nsection-type: tag\nhas-comments: true\ntitle: #{tag}\n---\n## Tag"
        )
      end
    end
  end
end

# Generate the tags.html page
puts("[+] Generating tags page")

File.open("#{TAGS_DIR}/index.html", 'w') do |f|
  f.write("---\nlayout: tags\nsection-type: tags\nhas-comments: true\ntitle: Tags\nsitemap:\n  priority: 1.0\n---\n## Tags")
end