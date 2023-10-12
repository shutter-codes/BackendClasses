
const express = require('express')
const app = express();
const ProductRouter = require('./routes/products');
const {dbConnection} = require('./database/dbconfig');


const PORT = process.env.PORT || 3000;


app.get('/', async(req, res) => {
    console.log("i am alive");
    res.send("I am okay")
})

app.use("/api/products",ProductRouter ) 

app.listen(PORT, () => {console.log('Server is running on port 3000')});