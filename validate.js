function validate() {
    var email = document.getElementById("email");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var error = document.getElementById("error");

    if (nameValidation(fname, error) && nameValidation(lname, error) && emailValidation(email, error)){
        alert("Thank you for signing up!");
        return true;
    }
    return false;
}
function nameValidation(input, err) {
    var nameExp = /^([a-zA-Z]+?)([- ']?[a-zA-Z]+)*?$/;
    if (input.value.match(nameExp)) {
        return true;
    } 
    else {
        err.innerText = "*Please enter a valid name";
        err.style.display = "block";
        input.focus();
        return false;
    }
}
function emailValidation(input, err) {
    var emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(emailExp)) {
        return true;
    } 
    else {
        err.innerText = "*Please enter a valid email";
        err.style.display = "block";
        input.focus();
        return false;
    }
}


