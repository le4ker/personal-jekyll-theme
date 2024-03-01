FROM jekyll/jekyll:4.2.2

WORKDIR /srv/jekyll
COPY Gemfile* ./
RUN bundle install
COPY . .
RUN ruby bin/generate_tags.rb
RUN ruby bin/generate_categories.rb

CMD ["jekyll", "serve", "--watch", "--host", "0.0.0.0", "--config", "_config.yml,_config.dev.yml"]
