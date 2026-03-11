// Register

const registerForm = document.getElementById("registerForm")

if(registerForm){

registerForm.addEventListener("submit", async function(e){

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value

await fetch("/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({name,email,password})
})

alert("Registered Successfully")

})
}

// Login

const loginForm = document.getElementById("loginForm")

if(loginForm){

loginForm.addEventListener("submit", async function(e){

e.preventDefault()

const email = document.getElementById("email").value
const password = document.getElementById("password").value

const res = await fetch("/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({email,password})
})

const data = await res.json()

alert(data.message)

if(data.message==="Login Success"){
window.location="courses.html"
}

})
}

// Load Courses

async function loadCourses(){

const res = await fetch("/courses")
const courses = await res.json()

let table = document.getElementById("courseTable")

courses.forEach(course=>{

table.innerHTML += `
<tr>
<td>${course.courseName}</td>
<td>${course.instructor}</td>
<td>${course.credits}</td>
<td>
<button onclick="enroll('${course.courseName}')">
Enroll
</button>
</td>
</tr>
`
})

}

if(document.getElementById("courseTable")){
loadCourses()
}

// Enroll

async function enroll(courseName){

await fetch("/enroll",{

method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
studentEmail:"student@email.com",
courseName:courseName
})

})

alert("Course Enrolled")

}