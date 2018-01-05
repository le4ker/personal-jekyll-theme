---
layout: post
section-type: post
title: Using Chef attributes in Inspec
category: Category
tags: [ 'chef', 'inspec' ]
---

Example with chef-solo which generate the node file in `nodes` folder :

```ruby
# # encoding: utf-8

# Inspec test for recipe workstation::default

require 'json'

# The Inspec reference, with examples and extensive documentation, can be
# found at http://inspec.io/docs/reference/resources/

node = json("/home/levasju1/repos/bitbucket/chef-solo_playground/nodes/localhost.json").params

#packages.each do |pkg|
node['default']['workstation']['packages'].each do |pkg|
  describe package(pkg.strip) do
    it { should be_installed }
  end
end

node['default']['workstation']['gems'].each do |g|
  describe gem(g) do
    it { should be_installed }
  end
end

node['default']['workstation']['pip'].each do |name, version|
  describe pip(name) do
    it { should be_installed }
    its('version') { should eq version }
  end
end
```