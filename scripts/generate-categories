#!/usr/bin/env ruby

require 'yaml'

POSTS_DIR = '_posts/'
CATEGORIES_DIR = 'categories/'

Dir.foreach(POSTS_DIR) do |post|

  next if post == '.' or post == '..' or post == '.DS_Store'
  postYaml = YAML.load_file(POSTS_DIR + post)
  unless (postYaml['category'] == nil)
    category = postYaml['category']

    unless File.exist?(CATEGORIES_DIR + category.downcase + '.html')

      puts('[+] Generating #' + category + ' page')

      File.open(CATEGORIES_DIR + category.downcase + '.html', 'w') {|f| f.write(
      "---\nlayout: category\nsection-type: category\ntitle: " + category + "\n---\n## Category")}

    end

  end

end
