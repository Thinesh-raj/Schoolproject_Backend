const express = require("express");
const newroute = express.Router();
const client = require("../connection");
newroute.get("/", async (req, res) => {
    data = await client.db("newData").collection("newserver").find({}).toArray();
    res.send(data)
})
newroute.post("/",async(req,res)=>{
    
})
module.exports = newroute;