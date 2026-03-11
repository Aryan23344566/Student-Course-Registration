const mongoose = require("mongoose")

const EnrollmentSchema = new mongoose.Schema({
studentEmail:String,
courseName:String
})

module.exports = mongoose.model("Enrollment",EnrollmentSchema)