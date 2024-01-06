const {MongoClient}=require("mongodb");
const url="mongodb://0.0.0.0:27017";
let client={};
try{
    client=new MongoClient(url)
    console.log("DB connected")
}
catch(err){
    console.log(err.message)
}
module.exports=client;