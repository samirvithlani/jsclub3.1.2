function changeText() {
    
  var x = document.getElementsByName("txt");
  console.log(x);
  for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = "Hello World";
  }
}
