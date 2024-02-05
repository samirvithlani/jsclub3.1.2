function getData() {
  var txt = document.getElementById("txt");
  //console.log(txt);
  txt.innerHTML = "Hello World";
  txt.style.color = "red";
}

function changeLink(){

    var link = document.getElementById("link");
    link.href = "http://www.netflix.com";
    link.innerHTML = "Netflix";
    link.target = "_blank";
}

function changeDiv(){

    var mydiv = document.getElementById("mydiv");
    mydiv.className ="box"
}

function changeDiv1(){

    var mydiv = document.getElementById("mydiv");
    mydiv.className ="box1"

}