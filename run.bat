@echo off

rem bundle exec jekyll serve --drafts --watch --limit_posts 50

echo Start vgscomcerveja!
set /p limitPosts=Deseja limitar a quantidade de posts? (y/n) 

if /I %limitPosts%==y (
    echo Limitando em 10 posts...
    bundle exec jekyll serve --drafts --watch --config=_config.yml,_dev_config.yml --limit_posts 10
) else (
    bundle exec jekyll serve --drafts --watch --config=_config.yml,_dev_config.yml
)

