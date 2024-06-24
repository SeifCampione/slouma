const express = require("express");
const path = require("path");
var cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", express.static(path.join(__dirname, "public")));
// app.use("/api/test", require("./Router/TestRouter"));
app.use("/api/user", require("./Router/UserRouter"));
app.use("/api/courses", require("./Router/CourseRouter"));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.listen(7005, (err) => {
  err ? console.error(err) : console.log(`server is running on ${7005}`);
});
