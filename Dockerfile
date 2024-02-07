FROM jekyll/jekyll:4.2.2

WORKDIR /srv/jekyll
COPY . .
RUN gem install webrick
RUN ./scripts/generate-tags
RUN ./scripts/generate-categories
CMD ["jekyll", "serve", "--watch", "--host", "0.0.0.0", "--config", "_config.yml,_config.dev.yml"]
