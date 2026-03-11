const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")

const Student = require("./models/Student")
const Course = require("./models/Course")
const Enrollment = require("./models/Enrollment")

// Register Student
app.post("/register", async (req,res)=>{
const student = new Student(req.body)
await student.save()
res.json({message:"Student Registered"})
})

// Login
app.post("/login", async (req,res)=>{
const student = await Student.findOne({
email:req.body.email,
password:req.body.password
})

if(student){
res.json({message:"Login Success"})
}
else{
res.json({message:"Invalid Login"})
}
})

// Get courses
app.get("/courses", async (req,res)=>{
const courses = await Course.find()
res.json(courses)
})

// Enroll course
app.post("/enroll", async (req,res)=>{
const enroll = new Enrollment(req.body)
await enroll.save()
res.json({message:"Course Enrolled"})
})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})