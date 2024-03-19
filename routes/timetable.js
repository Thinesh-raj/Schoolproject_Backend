const express = require("express");
const timetableroute = express.Router();
const client = require("../connection");
timetableroute.get("/", async (req, res) => {
    data = await client.db("school_Management").collection("Timetable").find({}).toArray();
    res.send(data)
})
timetableroute.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    data = await client.db("school_Management").collection("Timetable").find({ "id": id }).toArray();
    res.send(data)
})
timetableroute.post("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Timetable").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("school_Management").collection("Timetable").insertOne(req.body)
    res.send("created")

})
timetableroute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Timetable").updateOne({ "id": id }, {
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
timetableroute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Timetable").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = timetableroute