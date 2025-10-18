var inputName = document.getElementById("name")
var age = document.getElementById("age")
var maleGender = document.getElementById("male")
var femaleGender = document.getElementById("female")
var course = document.getElementById("course")
var email = document.getElementById("email")
var btnSave = document.getElementById("btnSave")
var listContainer = document.querySelector(".listContainer")

function save(){
    var tr = document.createElement("tr")
    var tdName = document.createElement("td")
    var tdAge = document.createElement("td")
    var tdGender = document.createElement("td")
    var tdCourse = document.createElement("td")
    var tdEmail = document.createElement("td")
    var tdDelete = document.createElement("td")

    tdName.textContent = inputName.value
    tdAge.textContent = age.value
    tdGender.textContent = maleGender.checked ? "Male" : (femaleGender.checked ? "Female" : "");
    tdCourse.textContent = course.value
    tdEmail.textContent = email.value
    tdDelete.innerHTML = "<button onclick='deleteList(event)' style='background-color: red;'>Delete</button>"
    

    tr.append(tdName,tdAge,tdGender,tdCourse,tdEmail,tdDelete)
    listContainer.appendChild(tr)
}

function deleteList(event){
    event.target.parentElement.parentElement.remove(listContainer)
}