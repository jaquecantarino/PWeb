var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
var Cliente = require("../model/cliente");


router.get("/cliente", function (req, res) {
  Cliente.findAll().then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.get("/cliente/:id", function (req, res) {
  Cliente.findAll({ where : {id: req.params.id }}).then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.post("/cliente", function (req, res) {
  //res.send(`Inclui um usuário`);    
  Cliente.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha}).then(
          function(){
            res.send("cliente criado com sucesso !!!"+ req.body.nome);
          }).catch(
            function(erro){
              res.send("ocorreu um erro !!");
            }
          );
});

router.put("/cliente/:id", function (req, res) { 
  Cliente.update({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha},
    {
      where: {id: req.params.id}
    }).then(
        function(){
          res.send("cliente alterado com sucesso !!!"+ req.body.nome);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

router.delete("/cliente/:id", function (req, res) {  
  Cliente.destroy(    
    {where: {id: req.params.id}}
    ).then(
        function(){
          res.send("cliente removido com sucesso !!!"+req.params.id);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

//CRUD produtos:
router.get("/produto", function (req, res) {
  Produto.findAll().then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Algo está errado : ', err);
    });
  });

router.put("/produto/:id", function (req, res) { 
  Produto.update({
    titulo: req.body.titulo,
    descritivo: req.body.descritivo,
    valor: req.body.valor,
    quantidade: req.body.quantidade},
    {
      where: {id: req.params.id}
    }).then(
        function(){
          res.send("produto alterado com sucesso !!!"+ req.body.titulo);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

router.post("/produto", function (req, res) {
  //res.send(`Incluir produto`);    
  Produto.create({
    titulo: req.body.titulo,
    descritivo: req.body.descritivo,
    valor: req.body.valor,
    quantidade: req.body.quantidade}).then(
          function(){
            res.send("produto cadastrado"+ req.body.titulo);
          }).catch(
            function(erro){
              res.send("ocorreu um erro !!");
            }
          );
});

router.delete("/produto/:id", function (req, res) {  
  Produto.destroy(    
    {where: {id: req.params.id}}
    ).then(
        function(){
          res.send("produto excluido !!!"+req.params.id);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});


module.exports = router;