@echo off

rem bundle exec jekyll serve --drafts --watch --limit_posts 50

echo Start vgscomcerveja!
bundle exec jekyll serve --drafts --watch --config=_config.yml,_dev_config.yml

