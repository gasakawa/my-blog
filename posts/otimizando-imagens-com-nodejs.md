---
date: '2020-09-18'
title: 'Otimizando imagens com NodeJS'
description: 'Como otimizar imagens utilizando a lib sharp'
category: 'JS'
background: '#F0D91D'
image: 'assets/img/compactar-imagem.png'
keywords: 'javascript;nodejs'
---

Estava fazendo um projeto pessoal e me deparei com a necessidade de otimizar o tamanho das imagens que precisava utilizar. Existem vários serviços online para isto, (redimensionar, cortar, reduzir peso, etc). Porém encontrei uma lib javascript bastante interessante. O nome dela é [sharp](https://github.com/lovell/sharp) e quero compartilhar com vocês como resolvi o meu problema.

O código é bem simples porém poderoso :), (pode clonar ele do [Github](https://github.com/gasakawa/image-compress)).

```javascript
require('dotenv/config');
const sharp = require('sharp');
const fs = require('fs').promises;

const compress = async () => {
  const directory = await fs.readdir(process.env.SRC_FOLDER);

  const pattern = new RegExp('^.*.(jpg|JPG|gif|GIF|png|PNG)$');

  const files = directory.filter(file => pattern.test(file));

  if (files.length > 0) {
    // O `async`/ `await` não funciona nas funções do Array, então é necessário utilizar `await Promise.all`, porque a função da lib `sharp` que será utilizada retorna uma promise.
    await Promise.all(
      files.map(async file => {
        const content = await fs.readFile(`${process.env.SRC_FOLDER}/${file}`);
        const compressContent = await sharp(content)
          .resize(Number(process.env.WIDTH), Number(process.env.HEIGHT), {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .toFormat('jpeg', {
            progressive: true,
            quality: 90,
          })
          .toBuffer();

        await fs.writeFile(
          `${process.env.DEST_FOLDER}/${file}`,
          compressContent,
        );
      }),
    );
  }
};

compress();
```

_Bora explicar ele então?_

```javascript
require('dotenv/config');
const sharp = require('sharp');
const fs = require('fs').promises;
```

- `require('dotenv/config')`, como utilizo algumas variáveis de ambiente para deixar mais customizado, a lib dotenv vai carregar as variáveis de ambiente do arquivo `.env`, para poder acessá-las utilizando `process.env.NOME_VARIAVEL`.
- `const sharp = require('sharp')` importo a lib `sharp`
- `const fs = require('fs').promises` o `fs` já vem nativamente com o node, então aqui utilizo `promises` para poder utilizar o `async` / `await` e não os `callbacks` tradicionais.

A função `compress` é a que faz o trabalho sujo, então vamos ver como ela funciona.

```javascript
const directory = await fs.readdir(process.env.SRC_FOLDER);
const pattern = new RegExp('^.*.(jpg|JPG|gif|GIF|png|PNG)$');
const files = directory.filter(file => pattern.test(file));
```

- `const directory = await fs.readdir(process.env.SRC_FOLDER)` aqui vamos ler o diretório especificado na variável de ambiente `SRC_FOLDER` que é onde devem estar as imágens "grandes" a serem otimizadas.
- `const pattern = new RegExp('^.*.(jpg|JPG|gif|GIF|png|PNG)$')` somente quero imagens `jpg`, `gif`, ou `png`. (Pode adicionar outras extensões se desejar).
- `const files = directory.filter(file => pattern.test(file))` no diretório podem existir outros tipos de arquivos além de imágens, então filtro os arquivos de acordo às extensões que realmente quero tratar.

Aqui usamos as funções da lib `sharp`

```javascript
const compressContent = await sharp(content)
  .resize(Number(process.env.WIDTH), Number(process.env.HEIGHT), {
    fit: 'inside',
    withoutEnlargement: true,
  })
  .toFormat('jpeg', {
    progressive: true,
    quality: 90,
  })
  .toBuffer();
```

- `resize`, redemensiona o tamanho da imágem, aqui pode usar o tamanho definido nas variáveis de ambiente.
- `toFormat`, converte a imagem em `jpg` sempre.
- `toBuffer` , retorna o conteúdo da imágem em um `Buffer`.

### Exemplo

Imagem antes de ser otimizada.

![Imágem antes de Otimizar](/assets/img/tamanho-imagens-antes-optimizar.png)

Imagem depois de ser otimizada.

![Imágem antes de Otimizar](/assets/img/tamanho-imagens-apos-optimizar.png)

Bom é isso ai pessoal, espero que ajude se você tem uma necessidade parecida. Se tiver dúvidas, elogios, sugestões, deixe seu comentário. Se também curtiu o conteúdo, compartilhe com os seus amigos.

Até a próxima!
