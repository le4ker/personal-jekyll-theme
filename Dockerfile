FROM jekyll/jekyll:4.2.2

WORKDIR /srv/jekyll
COPY Gemfile* ./
RUN bundle install
COPY . .
RUN ruby bin/generate_tags.rb
RUN ruby bin/generate_categories.rb

CMD ["jekyll", "serve", "--livereload", "--force_polling"]
