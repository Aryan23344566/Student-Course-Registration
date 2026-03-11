const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
courseName:String,
instructor:String,
credits:Number
})

module.exports = mongoose.model("Course",CourseSchema)