const express = require("express");
const adminroute = express.Router();
const client = require("../connection");
adminroute.get("/", async (req, res) => {
    data = await client.db("school_Management").collection("Admin").find({}).toArray();
    res.send(data)
})
adminroute.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    data = await client.db("school_Management").collection("Admin").find({ "id": id }).toArray();
    res.send(data)
})
adminroute.post("/", async (req, res) => {
    let data = await client.db("school_Management").collection("Admin").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("school_Management").collection("Admin").insertOne(req.body)
    res.send("created")

})
adminroute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Admin").updateOne({ "id": id }, {
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
adminroute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("school_Management").collection("Admin").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = adminroute