// //event listenerf
// function test(){

//     alert('test');
// }

//const btn = document.getElementById('btn');
document.getElementById("btn").addEventListener("click",()=>{
    console.log("Button Clicked");
})
document.getElementById("btn").addEventListener("mouseover",()=>{

    document.getElementById("btn").style.backgroundColor = "red";
})
document.getElementById("btn").addEventListener("dblclick",()=>{

    document.getElementById("btn").innerHTML = "Double Clicked";
})