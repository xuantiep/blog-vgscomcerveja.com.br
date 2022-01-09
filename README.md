# Videogames com Cerveja

[Videogames com Cerveja](https://www.vgscomcerveja.com.br) é um blog independente sobre games. (ponto)

Compartilhar experiências e opiniões gamísticas tanto ao jogo em si quanto no colecionismo é o foco principal! Aqui você encontrará recomendações de jogos, notícias selecionadas, curiosidades, dicas de colecionismo e tudo mais que é relacionado ao universo virtual que tanto gostamos! :)

Então pegue uma cerveja, aperte START e sinta-se em casa! ^^

## Como rodar a aplicação

```
bundle exec jekyll serve --drafts --watch --config=_config.yml,_dev_config.yml
```

Se quiser limitar a quantidade de posts para otimizar o processo em desenvolvimento, adicione a flag `--limit_posts 10` no comando acima.

## Como converter as imagens para o formato *.webp

Antes, é necessário instalar o software `webp parallel`, desta forma:

```
sudo apt install webp parallel -y
```

Para converter:

```
find . -name "*.jpg" | parallel --bar --eta cwebp -q 90 -m 6 -segments 4 -sharp_yuv -v -metadata all {} -o {.}.webp
```
