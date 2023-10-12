require('dotenv').config();
const {MongoClient} = require('mongodb')

const client = new MongoClient(process.env.MONGODB_URL);
const dbName = "naitikAPI";

const dbConnection = async () => {
    try{
        await client.connect();
        console.log('connected to DB Sucessfully');
        const db = client.db(dbName);
        return db;  
    }
    catch(error){
        console.log('failed to connect to the database',error);
        throw error;
    }
}
    

module.exports = {dbConnection};