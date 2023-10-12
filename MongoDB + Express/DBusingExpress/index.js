const {dbConnection} = require('../db');
const express = require('express');
const app = express();


//reading a database 
app.get('/',async (req,res)=>{
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

        const findResult = await collection.find().toArray();
        res.send(findResult)
    }
    catch(error){
        console.log(error);
    }
   
})

// posting to database
app.post('/users',async(req,res)=>{
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

    let result = collection.insertOne({Name:"monsterman"})
    res.json(result)           
    }
    catch(error){
        console.log("something went wrong",error);
    }
})

//update to database
app.put('/users',async (req,res)=>{
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

   
    const updateResult = await collection.updateMany({name:"bitu"},{$set:{name:"Naitik Sharma"}});
    res.json(updateResult)
    console.log(updateResult);
    }
    catch(error){
        console.log("something went wrong",error);
    }
})

//delete to database

app.delete('/users',async (req,res)=>{
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

        const data = {Name:"monsterman"};
        const deleteResult = await collection.deleteOne(data);
        res.send(deleteResult)
        console.log(deleteResult.deletedCount);
    }
    catch(error){
        console.log("something went wrong",error);
    }

})


// listening to port 3000
app.listen(3000,()=>{
    console.log('server is running');
})