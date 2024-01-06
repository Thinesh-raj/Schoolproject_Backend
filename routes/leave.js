const express = require("express");
const leaveroute = express.Router();
const client = require("../connection");
leaveroute.get("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Leave").find({}).toArray();
    res.send(data)
})
leaveroute.post("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Leave").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("school_Management").collection("Leave").insertOne(req.body)
    res.send("created")

})
leaveroute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Leave").updateOne({ "id": id }, {
        $set: {
            name: req.body.name,
            date: req.body.date,
            approved: req.body.approved,
            subject: req.body.subject,
            id: req.body.id
        }
    })
    res.send("Updated")
})
leaveroute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Leave").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = leaveroute