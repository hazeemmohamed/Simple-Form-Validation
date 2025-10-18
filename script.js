

function validateForm(){
    var inputName = document.getElementById("name")
var email = document.getElementById("email")
var pass = document.getElementById("password")
var btn = document.getElementById("btn")

var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passError = document.getElementById("passError")


if (inputName.value === ""){
    nameError.textContent = "Name Required!"
}
else {
    nameError.textContent = ""; 
}

if(email.value === ""){
     emailError.textContent = "Email field Required!"
}
else if (!email.value.includes("@") || !email.value.includes(".")){
    emailError.textContent = "Email address is not valid"
}
else{
    emailError.textContent = "";
}

if(pass.value === ""){
     passError.textContent = "Password field Required!"
}
else if (pass.value.length < 6) {
    passError.textContent = "Password must be at least 6 characters!";
  } else {
    passError.textContent = "";
  }

    if (inputName.value !== "" && email.value.includes("@") && pass.value.length >= 6) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }

}

function submitForm(event){
        alert("Form submitted successfully!");

}