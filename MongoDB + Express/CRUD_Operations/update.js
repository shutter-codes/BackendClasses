const {dbConnection} = require('../db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

   
    const updateResult = await collection.updateMany({name:"Naitik"},{$set:{name:"bitu"}});
    console.log(updateResult);
    }
    catch(error){
        console.log("something went wrong",error);
    }
}

main();