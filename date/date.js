//date class

var date = new Date();
//0 ms
//var date = new Date(0)
//var date = new Date(2000,11,1)
//var date  = new Date(2024,1,14,1,1,30)
//var date = new Date("2024-02-14T01:01:30")
console.log(date);

//get
console.log("getDate  ",date.getDate());
console.log("getDay  ",date.getDay());
console.log("getMonth  ",date.getMonth());
console.log("getFullYear  ",date.getFullYear());
console.log("getHours  ",date.getHours());
console.log("getMinutes  ",date.getMinutes());
console.log("getSeconds  ",date.getSeconds());
console.log("getMilliseconds  ",date.getMilliseconds());
console.log("getTime  ",date.getTime());

console.log("getTimezoneOffset  ",date.getTimezoneOffset());
console.log("getUTCDate  ",date.getUTCDate());
console.log("getUTCDay  ",date.getUTCDay());
console.log("getUTCMonth  ",date.getUTCMonth());
console.log("getUTCFullYear  ",date.getUTCFullYear());
console.log("getUTCHours  ",date.getUTCHours());
console.log("getUTCMinutes  ",date.getUTCMinutes());



var date2 = new Date();
date2.setDate(14);
date2.setMonth(1);
date2.setFullYear(2024);
date2.setHours(1);
date2.setMinutes(1);
date2.setSeconds(30);

console.log("date 2",date2);

