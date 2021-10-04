# desafioAlliar

Criar Docker para mySQL
docker run --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest


build do projeto 
node_modules/.bin/babel src -d build --copy-files --no-copy-ignored --verbose

Comandos yarn
yarn add pacote_nome

iniciar projeto 
yarn start:dev

//criar o banco
yarn sequelize db:migrate

banco: mysql
name: test

EndPoints:

PUT http://localhost:4000/v1/exames
body:
{
    "exames": "Update Todo Label"
}

++++++++++++++++++++++++++++++++++++++++++++

POST http://localhost:4000/v1/exames
body:

{
    "nome": 1,
    "tipo": "Test of tipo",
    "status": 0
}

++++++++++++++++++++++++++++++++++++++++++++

GET BY ID http://localhost:4000/v1/exames?name=test

++++++++++++++++++++++++++++++++++++++++++++

GET LIST http://localhost:4000/v1/exames

++++++++++++++++++++++++++++++++++++++++++++

DELETE http://localhost:4000/v1/exames/1
