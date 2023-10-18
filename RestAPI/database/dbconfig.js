const {MongoClient} = require('mongodb')
const url  ="mongodb+srv://devnaitik104:BncFiOdqtju4Fgwz@naitikapi.72j8tgo.mongodb.net/naitikAPI?retryWrites=true&w=majority"
const client = new MongoClient(url);
const dbName = "RestTesting";

const dbConnection = async () => {
    try{
        await client.connect();
        const db = client.db(dbName);
        console.log('connected to DB Sucessfully');
        return db;  
    }
    catch(error){
        console.log('failed to connect to the database',error);
      
    }
}
    

module.exports = {dbConnection};