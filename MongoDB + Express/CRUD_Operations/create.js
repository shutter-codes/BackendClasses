const {dbConnection} = require('../db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

        const data = [
            {name:"Naitik"},{Name:"Kruti"}
    ]
    const insertResult = await collection.insertMany(data);
    console.log(data);
    }
    catch(error){
        console.log("something went wrong",error);
    }
}

main();