const express = require("express");
const timeroute = express.Router();
const client = require("../connection");
timeroute.get("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Timetable").find({}).toArray();
    res.send(data)
})
timeroute.post("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Timetable").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("school_Management").collection("Timetable").insertMany(req.body)
    res.send("created")

})
timeroute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Timetable").updateOne({ "id": id }, { $set: { "age": req.body.age } })
    res.send("Updated")
})
timeroute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Timetable").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = timeroute