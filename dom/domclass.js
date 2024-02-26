function addText(){

    var x = document.getElementsByClassName("box")
    console.log(x)
    for(let i=0;i<x.length;i++){
        x[i].innerHTML = "Hello World"
    }


}
function changeColor(){

    var x = document.getElementsByClassName("box")
    x[0].style.backgroundColor = "blue"


}