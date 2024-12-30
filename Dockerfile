FROM jekyll/jekyll:4.2.2

# install dependencies
WORKDIR /srv/jekyll
COPY Gemfile Gemfile.lock ./
RUN bundle install

# copy rest of the files
COPY . .

# generate tags and categories
RUN ruby bin/generate_tags.rb && ruby bin/generate_categories.rb

CMD ["jekyll", "serve", "--livereload", "--force_polling"]
