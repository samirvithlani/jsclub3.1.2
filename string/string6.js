//0 1 2
var data = "naman" //3

var temp = ""
for(let i = data.length-1; i>=0 ;i--){

    console.log(data[i])
    //temp = temp + data[i]
    temp = temp.concat(data[i])
}
console.log(temp)
if(temp==data){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}

// var p = "n"
// x = String.fromCharCode(p.codePointAt(0)-32)
// console.log(x)


// var data = "abit"
// //97 - 32 = 65 
// var aa  =data.codePointAt(1)
// console.log(aa)
// x = String.fromCharCode(98)
// console.log(x)

var data = "amit"

// var upperData = String.fromCharCode(data.codePointAt(0)-32)
// console.log(upperData)

var upperData = ""
for(let i=0;i<data.length;i++){


    //a = 97
    if(data.codePointAt(i)>=97 && data.codePointAt(i)<=122){
        upperData = upperData.concat(String.fromCharCode(data.codePointAt(i)-32))
    }


}
console.log(upperData)
