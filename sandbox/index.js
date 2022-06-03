//arquivo principal
//essas linhas indicam que estão carregando o modulo instalado, instenciando objetos para as bibliotecas baixadas
const express = require('express');
const morgan  = require('morgan');
const cors  = require('cors');
const bodyParser  = require('body-parser');
//Nessa linha está utilizando o arquivo de rotas
const router = require('./config/route');

//Express é modulo princiapl que utlizamos, ele permite que tenhamos suporte a web
const app = express();

app.use(morgan('dev')); //iniciando utilizando todos os recursos/modulos
app.use(bodyParser.urlencoded({extended :false}));
app.use(express.json());
app.use(cors());
app.use('/', router);

//aqui está iniciando o servidor
app.listen(2020,()=>{ //a porta escolhida foi a 2020 ( o padrão é 8080)
    console.log('nodejs started');
});

//pra rodar esse arquivo é necessário criar e startar o banco de dados.
/* 
criar um arquivo com o mesmo nome do banco que esta no arquivo db.js (pasta model)
precisamos habilitar para o Sequelize no arquivo cliente (pasta model), deixar descomentado as linhas:
Cliente.sync({force:true});
Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});
basicamente elas significam que se a tabela não existir vai criar
*/

//resumo dos comandos:
/*
crtl+' (para abrir o terminal no vscode)
npm index (para rodar o arquivo)
npm install nomedopacote --save (caso precise baixar mais bibliotecas) 
crtl+c (para parar de rodar a aplicação)
*/