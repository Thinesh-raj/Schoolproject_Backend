const express = require("express");
const loginroute = express.Router();
const client = require("../connection");
loginroute.post("/", async (req, res) => {
    let data = await client.db("school_Management").collection("login").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("school_Management").collection("login").insertOne(req.body)
    res.send("created")

})
module.exports=loginroute