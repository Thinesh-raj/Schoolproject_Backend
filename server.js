const express = require("express");
const admin = require("./routes/admin")
const router = require("./routes/teacher");
const student = require("./routes/student");
const leave = require("./routes/leave");
const timetable = require("./routes/timetable");
const attendance = require("./routes/attendance");
const login = require("./routes/login")
const crossOrgin = require("cors");
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
app.use("/Admin", admin);
app.use("/Teacher", router);
app.use("/Student", student);
app.use("/Leave", leave);
app.use("/Timetable", timetable);
app.use("/Attendance", attendance);
app.use("/Login", login)
app.listen(3000, () => {
    console.log("started")
})