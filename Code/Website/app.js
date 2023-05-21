var fname = document.getElementById("txtFname");
var lname = document.getElementById("txtLname");
var userName = document.getElementById("pUserName");
var secUserInput = document.getElementById("userInput");
var secUserOutput = document.getElementById("userOutput");

function getUserData(){
    var firstName = fname.value;
    var lastName = lname.value;
    if(firstName !== "" && lastName !== ""){
        userName.innerHTML = "Welcome " + firstName + " " + lastName;
        secUserInput.style.display="none";
        secUserOutput.style.display="block";
    }
}
function goHome(){
    secUserInput.style.display="block";
    secUserOutput.style.display="none";
}