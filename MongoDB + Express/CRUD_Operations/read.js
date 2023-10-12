// importing the dbConnection
const dbConnection = require('../db');


// function to read the database
async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

        const findResult = await collection.find().toArray();
        console.log(findResult);
    }
    catch(error){
        console.log(error);
    }
}


// calling the main function
main();