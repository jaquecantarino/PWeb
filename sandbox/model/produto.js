const db = require('./db')

const produto = db.sequelize.define('produto', {  
    titulo: {type: db.Sequelize.STRING},
    descritivo: {type: db.Sequelize.STRING},
    valor: {type: db.Sequelize.DOUBLE},
    quantidade: {type: db.Sequelize.INTEGER}
});
//vai criar a tabela no banco de dados caso ela não exista
//Produto.sync({force:true});
Produto.sync();
Produto.create({titulo:'Fone de Ouvido Gatinho',descritivo:'fone com orelha azul',valor:103.25,quantidade:3});

module.exports = Produto;