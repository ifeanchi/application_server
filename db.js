const { Sequelize } = require('sequelize'); //Q: Why is this Sequelize capitalized? the capital Sequelize is new instance access the sequelize library
const path = require('path'); //a node native module

//Q: What are we creating down below?
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'), //quick way to get the path for our db
});

//Q: Why are we exporting lowercase sequelize? we want other files to have access to our database
module.exports = {sequelize};
