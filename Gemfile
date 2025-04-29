source 'https://rubygems.org'

gem 'github-pages'
gem 'tzinfo-data'
gem 'webrick', '~> 1.8' # Moved out of group for clarity, needed by Jekyll

group :jekyll_plugins do
  gem 'jekyll'
  gem 'jekyll-feed'
  gem 'jekyll-sitemap'
  gem 'jemoji'
  # Removing the explicit eventmachine gem as it's likely a dependency
  # of other gems and installing directly from git can cause conflicts.
  # Bundler will resolve the correct version if needed.
  # If you specifically need v1.2.7 from that repo, there might be
  # underlying compatibility issues. Try letting Bundler handle it first.
  # gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'
  gem 'wdm', '>= 0.1.0' if Gem.win_platform?
end