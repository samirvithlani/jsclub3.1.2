var count = 0;
var id = setInterval(() => {
  console.log("Hello World");
  count++;
  console.log(count);
}, 1000);

//cleat interval

setTimeout(() => {
    clearInterval(id);
    console.log("Interval cleared");
}, 5000)

