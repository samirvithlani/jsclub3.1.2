const getDataFromFile =() => {

    const output = document.getElementById("output");
    //xhr = new XMLHttpRequest();
    const xhr = new XMLHttpRequest();
    //xhr.open("GET","../th.txt",true) // true for async
    xhr.open("GET","https://node5.onrender.com/user/user",true) // true for async
    xhr.send();
    xhr.onload = () => {
       // console.log(xhr.responseText);
        output.innerHTML = xhr.responseText;
        console.log(JSON.parse(xhr.responseText))
    }


}

