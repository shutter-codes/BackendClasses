const {dbConnection} = require('../database/dbconfig');


// server response for getting all products.
const getAllProducts = async (req, res) => {
    try{
        const db = await dbConnection();
        const collection = db.collection('products');


        // code for the filter and sorting of the product through req.query
        const {brand, rating, title,stock,price,sort} = req.query;
        
        const queryObject = {};


        // filtering of products on the basis of brand.
        if(brand){queryObject.brand = brand;}
        if(rating){queryObject.rating = parseFloat(rating);}
        if(title){ queryObject.title = {$regex: title, $options: 'i'};}
        if(stock){queryObject.stock = parseInt(stock);}
        if(price){queryObject.price = parseFloat(price);}
        
        console.log(queryObject);
      
       // to find all products
        const findResult = await collection.find(queryObject).toArray();

        // to find a specific product
        // const findResult = await collection.find({"brand":"Apple"}).toArray();

        res.send(findResult)
    }
    catch(error){
        console.log(error);
    }
};


// server response for getting all products of testing.
const getAllProductsTesting = async (req, res) => {
   
    try{
        const db = await dbConnection();
        const collection = db.collection('products');

        // to find all products
        const findResult = await collection.find(req.query).toArray();

        // to find a specific product
        // const findResult = await collection.find({"brand":"Apple"}).toArray();
        res.send(findResult)
    }
    catch(error){
        console.log(error);
    }
    res.send('Get All Products Testing');
};


module.exports = {getAllProducts, getAllProductsTesting}



// export this file to product-routes.js