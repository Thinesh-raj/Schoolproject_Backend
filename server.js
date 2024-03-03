const express = require("express");
const crossOrgin = require("cors");
const Login = require("./routes/logindata");
const Employeelist = require("./routes/employeelist")
require("./connection");
const app = express();
const key = "Basic U2FtOjIwNTY=";
app.use(express.json());
app.use(crossOrgin());
app.use(function (req, res, next) {
    console.log(req.url, req.method, new Date().toLocaleString());
    if (req.headers.authorization === key) next();
    else { res.send(" invalid data") }
})
app.use("/login", Login);
app.use("/employee", Employeelist);
app.listen(3000, () => {
    console.log("started")
})