const express = require("express");
const path = require('path'); //a node native module
const {Restaurant, Menu, Item} = require('./models/index');



const app = express();
const port = 3000;

//Q: What does express.static help us do?
//Q: What do you think path.join helps us do?
app.use(express.static(path.join(__dirname, 'public')))

//will add routes
app.get('/restuarant', async (req, res) => {
    const allRestuarantItems = await Restaurant.findAll()
    res.json(allRestuarantItems)
})

//will add routes
app.get('/menu', async (req, res) => {
    const allMenuItems = await Menu.findAll()
    res.json(allMenuItems)
})

app.get('/item', async (req, res) => {
    const allItems = await Item.findAll()
    res.json(allItems)
})


//Q: What will our server be doing? this is a way to talk to our server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
