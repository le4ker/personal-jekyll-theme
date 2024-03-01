# !/usr/bin/env ruby

# frozen_string_literal: true

require 'yaml'

POSTS_DIR = '_posts'
CATEGORIES_DIR = 'categories'

Dir.foreach(POSTS_DIR) do |post|
  next if ['.', '..', '.DS_Store'].include?(post)

  post_yaml = YAML.load_file("#{POSTS_DIR}/#{post}")
  unless post_yaml['category'].nil?
    category = post_yaml['category']

    unless File.exist?("#{CATEGORIES_DIR}/#{category.downcase}.html")

      puts("[+] Generating \##{category} page")

      File.open("#{CATEGORIES_DIR}/#{category.downcase}.html", 'w') do |f|
        f.write(
          "---\nlayout: category\nsection-type: category\nhas-comments: true\ntitle: #{category}\n---\n## Category"
        )
      end
    end
  end
end
