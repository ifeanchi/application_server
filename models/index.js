const {sequelize} = require('../db')
const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./Item')

//associations - What are they?
Menu.belongsTo(Restaurant) //Q: What will .belongsTo provide Menu? this will provide a foreign key in Menu as restaurant_id
Restaurant.hasMany(Menu)

Item.belongsTo(Menu)
Menu.hasMany(Item) // what does hasMany provide for us? it provides Menu with methods ~ static methods like getitems()

module.exports = { Restaurant, Menu, Item } //exporting models w/ associations
