---
title: 'Desestruturação de objetos e arrays em Javascript'
description: 'Como usar a desestruturação em Javascript'
date: '2020-05-19'
image: 'assets/img/javascript.png'
category: 'JS'
background: '#F0D91D'
keywords: 'javascript'
---

A sintaxe da atribuição via desestruturação é uma expressão JavaScript que possibilita descompactar valores de arrays ou propriedades de objetos em variáveis distintas. Isto significa, que podemos extrair dados de arrays ou objetos, e atribuir estes dados à variáveis.

Você pode ser perguntar, _para que vou fazer isso_? _ou como isso me ajuda_? Bom para responder sua pergunta, vamos ver os exemplos abaixo.

## Desestruturando Arrays

```javascript
const lista = ['Gabriel', 'Asakawa', 'Brasil'];
const nome = lista[0]; // Gabriel
const sobrenome = lista[1]; // Asakawa
const pais = lista[2]; // Brasil

console.log(nome, sobrenome, pais); // Gabriel Asakawa Brasil
```

No código acima, usei uma forma de extrair elementos de um array que funciona e era muito utilizada, porém veja que devo indicar a posição de cada elemento do array em uma linha diferente. Isto torna o código mais verboso.

Utilizando a desestrutração o código pode ser reduzido, veja algums cenários.

### Básico

```javascript
const lista = ['Gabriel', 'Asakawa', 'Brasil'];
const [nome, sobrenome, pais] = lista;

console.log(nome, sobrenome, pais); // Gabriel Asakawa Brasil
```

Utilizando a funcionalidade de desestrutração do JS, o código tem menos linhas e é mais fácil de ler.

### Pulando elementos do array

```javascript
const lista = ['Gabriel', 'Asakawa', 'Brasil', 'São Paulo'];
const [nome, , pais, estado] = lista;

console.log(nome, pais, estado); // Gabriel Brasil São Paulo
```

Veja que o array que recebe a atribuição tem uma vírgula sobrando. Na verdade não está sobrando, ela representa a posição do elemento do array que não queriamos extrair (que foi pulado).

### Valores default

Podemos atribuir um valor default a uma variável, no caso em que o valor extraído do array é _undefined_.

```javascript
const [a, b = 7] = [1];

console(a, b); // 1 7
```

### Usando o operador (...)

Quando é necessário atribuir a uma variável um elemento do array e a outra variável o resto dos elementos do mesmo array, podemos utilizar o operador **(...)**.

```javascript
const lista = ['Gabriel', 'Pai', 'Desenvolvedor', 'Nerd'];
const [nome, ...outros] = lista;

console.log(nome); // Gabriel
console.log(outros); // ['Pai', 'Desenvolvedor', 'Nerd']
```

## Desestruturando Objetos

A desestrutração de um objeto é similar à do array, a diferença é o uso de chaves **{ }** no lugar de colchetes **[ ]**.

```javascript
const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Asakawa',
  pais: 'Brasil',
};
const nome = pessoa.nome; // Gabriel
const sobrenome = pessoa.sobrenome; // Asakawa
const pais = pessoa.pais; // Brasil

console.log(nome, sobrenome, pais); // Gabriel Asakawa Brasil
```

No código acima, usei uma forma de extrair elementos de um objeto que funciona bem, mas o código é verboso e repetitivo. Então mais uma vez podemos utilizar a desestrutração e o código pode ser reduzido, veja algums cenários.

### Básico

```javascript
const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Asakawa',
  pais: 'Brasil',
};
// correto
const { nome, sobrenome, pais } = pessoa;
console.log(nome, sobrenome, pais); // Gabriel Asakawa Brasil

// incorreto
const { nome, sobre, pais } = pessoa;
console.log(nome, sobre, pais); // Gabriel undefined Brasil
```

Na desestrutração de objetos direta, o nome da variável que irá receber o valor da propriedade do objeto, **deve** ser igual ao nome da propriedade do objeto. Caso contrário a atribuição do valor não será feita.

### Objetos aninhados

```javascript
const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Asakawa',
  pais: 'Brasil',
  endereco: {
    rua: 'Av Paulista',
    cep: '00000-000',
  },
};
const {
  nome,
  sobrenome,
  endereco: { rua, cep },
} = pessoa;

console.log(nome, sobrenome, rua, cep); // Gabriel Asakawa Av. Paulista 00000-000
```

### Nomes de variáveis diferentes

Como falei antes, na hora de desestrutrar um objeto de forma direta, o nome da variável que irá receber o valor da proprieade do objeto deve ser igual, porém é possível usar outro nome de variável caso seja necessário.

```javascript
const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Asakawa',
  pais: 'Brasil',
};
const { nome, sobrenome: lastname } = pessoa;

console.log(nome, lastname); // Gabriel Asakawa
```

Outro casos de uso, podem ser vistos [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

### Conclusão

Utilizar a desestrutração, ajuda a reduzir linhas de código e permite que o código seja mais legível. Além disso é possível também extrair somente os dados de um array ou objeto, que realmente são necessários naquele momento.

Se tiver dúvidas, elogios, sugestões, deixe seu comentário. Se também curtiu o conteúdo, compartilhe com os seus amigos.
