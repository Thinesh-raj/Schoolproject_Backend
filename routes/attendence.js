const express = require("express");
const attendenceroute = express.Router();
const client = require("../connection");
attendenceroute.get("/", async (req, res) => {
    data = await client.db("school_Management").collection("Attendance").find({}).toArray();
    res.send(data)
})
attendenceroute.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    data = await client.db("school_Management").collection("Attendance").find({ "id": id }).toArray();
    res.send(data)
})
attendenceroute.post("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Attendance").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("school_Management").collection("Attendance").insertOne(req.body)
    res.send("created")

})
attendenceroute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Attendence").updateOne({ "id": id }, {
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
attendenceroute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Attendence").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = attendenceroute