const db = require('./db')

const Cliente = db.sequelize.define('cliente', {  
    nome: {type: db.Sequelize.STRING},
    email: {type: db.Sequelize.STRING},
    senha: {type: db.Sequelize.STRING}
});
//vai criar a tabela no banco de dados caso ela não exista
//Cliente.sync({force:true});
Cliente.sync();
Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});

module.exports = Cliente;
