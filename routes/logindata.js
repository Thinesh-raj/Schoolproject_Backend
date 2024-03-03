const express = require("express");
const loginroute = express.Router();
const client = require("../connection");
loginroute.get("/", async (req, res) => {
    data = await client.db("Employee").collection("login").find({}).toArray();
    res.send(data)
})
loginroute.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    data = await client.db("Employee").collection("login").find({ "id": id }).toArray();
    res.send(data)
})
loginroute.post("/", async (req, res) => {
    let data = await client.db("Employee").collection("login").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("Employee").collection("login").insertOne(req.body)
    res.send("created")

})
loginroute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("Employee").collection("login").updateOne({ "id": id }, { $set: { "age": req.body.age } })
    res.send("Updated")
})
loginroute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("Employee").collection("login").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = loginroute