//pop push shift unshitf

var lang = ["hindi", "english", "marathi", "gujarati", "tamil"];
console.log(lang);

//lang.splice(1,1) //1st index and 1 ==> delete count
//lang.splice(1,1,"kannada","telugu") //1st index and 1 ==> delete count , kannada and telugu ==> add
//lang.splice(2,0,"punjabi")
var removedelm = lang.splice(2,3,"punjabi")
console.log("removing element is " + removedelm);
console.log(lang);