function applyStyle(){

var div = document.getElementsByTagName("div")
console.log(div)

for(let i=0;i<div.length;i++){
    div[i].style.backgroundColor = "blue"
}

}