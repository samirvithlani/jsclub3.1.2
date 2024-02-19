function checkAvail(){
    var emailData = ["samir@gmail.com","ram@gmail.com","parth@gmail.com"]

    var email = document.getElementById('email')
    var emailerror = document.getElementById('emailError');
    console.log(email.value);

    if(emailData.includes(email.value)){
        emailerror.innerHTML = "Email already taken";
        email.style.outline = "1px solid red";

    }
    else{
        emailerror.innerHTML = "email is available";
    }



}


// function divblur(){
//     alert("blur");
// }