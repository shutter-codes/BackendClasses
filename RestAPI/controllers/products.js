const {dbConnection} = require('../database/dbconfig');

const getAllProducts = async (req, res) => {
    try{
        const db = await dbConnection();
        const collection = db.collection('Products');

        const findResult = await collection.find().toArray();
        res.send(findResult)
    }
    catch(error){
        console.log(error);
    }
};

const getAllProductsTesting = async (req, res) => {
    res.send('Get All Products Testing');
};


module.exports = {getAllProducts, getAllProductsTesting}



// export this file to product-routes.js