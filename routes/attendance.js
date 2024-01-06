const express = require("express");
const attendanceroute = express.Router();
const client = require("../connection");
attendanceroute.get("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Attendance").find({}).toArray();
    res.send(data)
})
attendanceroute.post("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Attendance").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("school_Management").collection("Attendance").insertOne(req.body)
    res.send("created")

})
attendanceroute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Attendance").updateOne({ "id": id }, { $set: { "age": req.body.age } })
    res.send("Updated")
})
attendanceroute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Attendance").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = attendanceroute