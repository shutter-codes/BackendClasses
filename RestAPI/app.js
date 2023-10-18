
const express = require('express')
const app = express();
const ProductRouter = require('./routes/products');
const {dbConnection} = require('./database/dbconfig');


const PORT = process.env.PORT || 3000;


app.get('/', async(req, res) => {
    try{
        const db = await dbConnection();
        const collection = db.collection('planets');

        const findResult = await collection.find().toArray();
        console.log(findResult);
    }
    catch(error){
        console.log(error);
    }
})

app.use("/api/products",ProductRouter ) 

app.listen(PORT, () => {console.log('Server is running on port 3000')});