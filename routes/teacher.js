const express = require("express");
const teacherroute = express.Router();
const client = require("../connection");
teacherroute.get("/", async (req, res) => {
        data = await client.db("school_Management").collection("teachersPage").find({}).toArray();
        res.send(data)
})
teacherroute.get("/:id", async (req, res) => {
        let id = parseInt(req.params.id);
        data = await client.db("school_Management").collection("teachersPage").find({ "id": id }).toArray();
        res.send(data)
})
teacherroute.post("/", async (req, res) => {
        let data = await client.db("school_Management").collection("teachersPage").find({}).toArray();
        req.body.id = data.length + 1
        await client.db("school_Management").collection("teachersPage").insertOne(req.body)
        res.send("created")

})
teacherroute.put("/:id", async (req, res) => {
        let id = parseInt(req.params.id);
        await client.db("school_Management").collection("teachersPage").updateOne({ "id": id }, {
                $set: {
                        name: req.body.name,
                        pass: req.body.pass,
                        classteacher: req.body.classteacher,
                        age: req.body.age,
                        gender: req.body.gender,
                        experience: req.body.experience,
                        qualification: req.body.qualification,
                        major: req.body.major, phn: req.body.phn,
                        email: req.body.email,
                        address: req.body.address,
                        id: req.body.id
                }
        })
        res.send("Updated")
})
teacherroute.delete("/:id", async (req, res) => {
        let id = parseInt(req.params.id);
        await client.db("school_Management").collection("teachersPage").findOneAndDelete({ "id": id })
        res.send("deleted")
})
module.exports = teacherroute