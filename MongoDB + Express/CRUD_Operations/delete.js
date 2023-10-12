const {dbConnection} = require('../db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('Users');

        const data = {Name:"Kruti"};
        const deleteResult = await collection.deleteOne(data);
        console.log(deleteResult.deletedCount);
    }
    catch(error){
        console.log("something went wrong",error);
    }
}

main();