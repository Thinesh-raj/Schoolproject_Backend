const express = require("express");
const studentroute = express.Router();
const client = require("../connection");
studentroute.get("/", async (req, res) => {
    data = await client.db("school_Management").collection("Student").find({}).toArray();
    res.send(data)
})
studentroute.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    data = await client.db("school_Management").collection("Student").find({ "id": id }).toArray();
    res.send(data)
})
studentroute.post("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Student").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("school_Management").collection("Student").insertOne(req.body)
    res.send("created")

})
studentroute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Student").updateOne({ "id": id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            designation: req.body.designation,
            gender: req.body.gender,
            course: req.body.course,
            image: req.body.image,
            createdate: req.body.createdate
        }
    })
    res.send("Updated")
})
studentroute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Student").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = studentroute