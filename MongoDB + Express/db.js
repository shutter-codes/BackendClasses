const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const DBName = 'WeaveDB';

const dbConnection = async () => {
    try{
        await client.connect();
        console.log('connected to DB Sucessfully');
        const db = client.db(DBName);
        return db;  
    }
    catch(error){
        console.log('failed to connect to the database',error);
        throw error;
    }
}
    

module.exports = {dbConnection};
    