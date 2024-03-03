const express = require("express");
const emproute = express.Router();
const client = require("../connection");
emproute.get("/", async (req, res) => {
    data = await client.db("Employee").collection("employee_List").find({}).toArray();
    res.send(data)
})
emproute.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    data = await client.db("Employee").collection("employee_List").find({ "id": id }).toArray();
    res.send(data)
})
emproute.post("/", async (req, res) => {
    let data = await client.db("Employee").collection("employee_List").find({}).toArray();
    req.body.id = data.length + 1
    await client.db("Employee").collection("employee_List").insertOne(req.body)
    res.send("created")

})
emproute.put("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("Employee").collection("employee_List").updateOne({ "id": id }, {
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
emproute.delete("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    await client.db("Employee").collection("employee_List").findOneAndDelete({ "id": id })
    res.send("deleted")
})
module.exports = emproute