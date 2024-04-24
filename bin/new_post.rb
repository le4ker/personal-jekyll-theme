# frozen_string_literal: true

# !/usr/bin/env ruby

require 'date'

POSTS_DIR = '_posts'

post = ARGV[0]

File.open("#{POSTS_DIR}/#{Date.today.strftime('%Y-%m-%d-')}#{post}.md", 'w') do |f|
  f.write(
    "---\nlayout: post\nsection-type: post\nhas-comments: true\ntitle: Title\ncategory: Category\ntags: [ \"tag1\", \"tag2\" ]\n---"
  )
end

puts("[+] Created #{post} post")
