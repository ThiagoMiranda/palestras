# Banco Inter - Inter site components

Inter site components

## Features

* Construído em cima do [Rollup](https://github.com/rollup/rollup)
* Testado via JEST
* ESLint com [ESLint](http://eslint.org/). Padrões: "standard" e "standard-react"
* Testado no Chrome, Safari Firefox e Edge

## Processo e organização

```
/src - Arquivos do projeto
/src/index.js - Arquivo de "entrada" da biblioteca
```

## Iniciando o desenvolvimento

Antes tenha certeza que possui o [NodeJS](https://nodejs.org/en/) versão 8.11+ na sua máquina. Recomendamos a versão LTS do site. Use o npm para instalação de pacotes. O npm usará o .npmrc para pegar do Nexus

### Preparando o ambiente

1. Instale o NodeJS
2. Instale as dependências do projeto `npm i``
3. Build `npm run build`
4. Publicação: mude a versão com `npm version patch` && publique com `npm publish`

## Dicas

Algumas dicas e comando úteis:

- Navegue até a pasta /website e digite `code .` para abrir o Visual Studio Code na pasta do projeto
- Para instalar um pacote novo digite `npm i --save {nome do pacote}`
- Para remover um pacote `npm uninstall {nome do pacote}`

### Git

Usamos o git como versionador de nosso projeto. Alguns comandos úteis:

- `git checkout {nome do branch}` - como citado acima, muda o branch atual. Para criar um novo branch a partir do original e mudar para ele digite `git checkout -b {nome do branch}`
- `git add .` - sempre que um ( ou mais ) arquivo(s) for criado, digite esse comando para versioná-lo no git. O `.` versiona todos arquivos criados daquele repositório.
- `git commit -a -m "{mensagem}"` - sempre ao modificar um ( ou mais ) arquivo(s) digite esse comando para deixá-los versionados prontos para serem enviados ao nosso repositório. Procure manter uma mensagem concisa e clara do que foi modificado. Exemplo: `git commit -a -m "Mudança do texto da rota /abra-sua-conta"`
- `git pull origin {nome do branch}` - Antes de enviar os arquivos para nosso repositório tenha certeza que sua versão local é a mais atualizada. O pull baixará qualquer mudança feita por outras pessoas para seu repositório e vai juntar com suas alterações. Lembre-se que isso pode dar conflito e você deverá resolvê-lo, fazer o `git commit...` - antes de subir as alterações.
- `git push origin {nome do branch}` - Envia suas alterações para nosso repositório.

### Documentação e padrões

** Em construção **