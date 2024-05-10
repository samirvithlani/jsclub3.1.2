const readJson = ()=>{

    const output = document.getElementById("output");
    const xhr = new XMLHttpRequest();
    xhr.open("GET","../user.json",true);
    xhr.send();
    xhr.onload = () => {


        console.log(JSON.parse(xhr.responseText))
        output.innerHTML = xhr.responseText;

    }



}
const checkEmail =()=>{


        const email = document.getElementById("email").value;
        console.log(email)
        const emailError = document.getElementById("emailError");
        const xhr = new XMLHttpRequest();
        xhr.open("GET","../user.json",true);
        xhr.send();
        xhr.onload = () => {

            const users = JSON.parse(xhr.responseText);
            console.log(users)
            var x = users.find((user)=>user.email == email)
            console.log("x --->",x)
            if(x==undefined){
                emailError.innerHTML = "Email is available"
            }
            else{
                emailError.innerHTML = "Email is already taken"
            }
        }



}