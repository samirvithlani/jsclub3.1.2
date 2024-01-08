//pop push shift unshitf

var lang = ["hindi", "english", "marathi", "gujarati", "tamil"];
console.log(lang);

//lang.splice(1,1) //1st index and 1 ==> delete count
//lang.splice(1,1,"kannada","telugu") //1st index and 1 ==> delete count , kannada and telugu ==> add
//lang.splice(2,0,"punjabi")
var removedelm = lang.splice(2,3,"punjabi")
console.log("removing element is " + removedelm);
console.log(lang);

//or operatpr
// for(let i=0;i<lang.length;i++){
//     console.log(lang[i])
// }
var x = lang.some((l)=>{

    //return l.startsWith("h")
    return l.length> 10
})
console.log(x)

var x1 = lang.every((l)=>{

    return l.length> 5
})
console.log(x1)
