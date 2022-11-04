# Projeto Car Store

## Descrição
Este projeto consiste em uma aplicação web onde o usuário pode acessar a vitrine de uma loja de carros à venda na mesma. Se por acaso o usuário for uma administrados, ele poderá gerenciar a vitrine, podendo adicionar, editar ou remover os respectivos carros.

## Tecnologias
Para o desenvolvimento do `Back-End` daaplicação, foi utilizado o __Node.JS__, com __Typescript__. O `Front-End` foi desenvolvido utilizando a ferramenta de construção __Vite__, configurando o __React.js + Typescript__. Segue abaixo uma lista com algumas tecnologias utilizadas:

### Back-End
- `express`
- `bcrypt`
- `cors`
- `dotenv`
- `jest`
- `jwt`
- `mysql2`
- `sequelize`
- `chai`
- `sinon`
- `mocha`

### Front-End
- `react`
- `typescript`
- `react-router-dom`
- `tailwindcss`
- `vitejs`
- `axios`

#### `O projeto foi desenvolvido utilizando o Docker.`

## Rodando o projeto

`Para rodar o projeto, precisamos ter o Docker instalado no computador.`

- Primeiramente, devemos clonar o repositório para o nosso computador.
`git clone git@github.com:guilhermeevencio/car-store-project.git`

- Após clonar o repositório, devemos entrar na pasta __./app__, dentro do __./car-store-project__.
`cd car-store-project/app`

- Dentro da pasta app, executaremos co comando abaixo.
`docker compose up -d`

- Com os containers sendo executados, acessaremos o terminal do container app-backend
`docker exec -it app-backend /bin/sh`

- Dentro do terminal, iremos executar o comando abaixo, que irá inicializar o nosso banco de dados.
`npm run db:reset`

__Agora a nossa aplicação vai estar rodando na porta 3000 do nosso localhost!__
`http://localhost:3000/`

## Informações Adicionais

Para executar login, temos dois usuários cadastrados e, um deles com permissões de administrador.

> Pessoa Administradora
```
email: 'admin@admin.com'
password: 'secret_admin'
```

> Pessoa Usuária
```
email: 'user@user.com'
password: 'secret_user'
```

> Caso queira, o banco de dados pode ser resetado utilizando o mesmo comando para criação do mesmo.
```
docker exec -it app-backend /bin/sh

npm run db:reset
```