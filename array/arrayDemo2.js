var lang = ["hindi", "english", "marathi", "gujarati", "tamil"];

console.log(lang);
lang.push("telugu");
console.log(lang);
var removedelm = lang.pop(); //remove last element
console.log("removing element is " + removedelm);
console.log(lang);


lang.unshift("kannada"); //add element at first position
console.log(lang);

var removedelm = lang.shift(); //remove first element
console.log("removing element is " + removedelm);
console.log(lang);


lang.forEach((l)=>{
    console.log(l)
})

