# VALIDADOR DE DADOS DE CARTÃO DE CRÉDITO v 1.0.0

Essa biblioteca é destinada à validação de Cartão de Crédito. Na versão atual é capaz de mostrar se um número de cartão é válido ou não, retornando true ou false.

## Como instalar

$  npm install card-validator-dj

## Como utilizar

> const validator = require("card-validator-dj");
> console.log(cardValidator('5232841955055344'))
> // returns "true"

##  Roadmap oficial do projeto

#### versão 1.0.0 (released)

-   funcionalidades: Validação de número de Cartão de crédito.
-   Essa versão não aceita letras, caracteres especiais, números com mais de 16 dígitos, ou com menos de 16 dígitos, todos os dígitos iguais.

#### versão 2.0.0 (no release date)

- implementação da opção que aceita caracteres especiais (-), (.), (,);
- README translated to english.
