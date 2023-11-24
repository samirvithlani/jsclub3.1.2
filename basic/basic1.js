//printf-->
//log function --> console.. --->
console.log("Hello World");
console.info("Hello World");
console.warn("Hello World");
console.error("Hello World");

// ---------------------------------
// 3 keywords --> 1) var 2) let 3) const

// var --> global scope
// let --> block scope     {}
// const --> block scope   {} --> final const aadharno = 12345


var a = 10; // int
console.log("value of a = ",a);
console.log("type of a = ",typeof(a))

var b = 10.5; // float
console.log("value of b = ",b);
console.log("type of b = ",typeof(b))

var userName = "John"; // string
console.log("value of userName = ",userName);
console.log("type of userName = ",typeof(userName))

var isTrue = true; // boolean
console.log("value of isTrue = ",isTrue);
console.log("type of isTrue = ",typeof(isTrue))

var x;
console.log("value of x = ",x);
console.log("type of x = ",typeof(x))

//number, string, boolean, undefined



{
    //blank block...
    var w = 700; // global scope
    let z = 800; // block scope
    console.log("value of w  inside block = ",w);
    console.log("value of z inside block = ",z);
}

console.log("value of w = ",w);
//console.log("value of z = ",z); // error

let p1 = 100;
console.log("value of p1 = ",p1);


const pi = 3.14;
console.log("value of pi = pi is const variable.... ",pi);
pi = 3.15; // error
