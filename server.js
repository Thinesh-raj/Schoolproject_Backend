const express = require("express");
const crossOrgin = require("cors");
const Login = require("./routes/logindata");
const Employeelist = require("./routes/employeelist");
const Admin = require("./routes/admin");
const Teacher = require("./routes/teacher");
const Student = require("./routes/student");
const Leave = require("./routes/leave");
const Attendance = require("./routes/attendence");
const Timetable = require("./routes/timetable");
const Log = require("./routes/login");
const newServer = require("./routes/newroute");
require("./connection");
const app = express();
const key = "Basic U2FtOjIwNTY=";
app.use(express.json());
app.use(crossOrgin());
app.use(function (req, res, next) {
    console.log(req.url, req.method, new Date().toLocaleString());
    // if (req.headers.authorization === key) ;
    // else { res.send(" invalid data") }
    next();
})
app.use("/login", Login);
app.use("/employee", Employeelist);
app.use("/Admin", Admin);
app.use("/Student", Student);
app.use("/Teacher", Teacher);
app.use("/Leave", Leave);
app.use("/Timetable", Timetable);
app.use("/Attendance", Attendance);
app.use("/Log", Log);
app.use("/newserver", newServer);
app.listen(3000, () => {
    console.log("started")
})