// var i =1;
// while(i<=10){
//     console.log("Hello World");
//     i++;
// }


//153 --> 1 + 125 + 27 ==> 153
//370 -> 27 + 343 ==> 370
//1634 -> 1 + 1296 + 81 + 256 ==> 1634
var no =154;
var count =0
var rem =0;
rev =0;
var tempno = no;

while(tempno>0){

    tempno = Math.floor(tempno/10);
    count++;

}

while(no>0){

    rem = no % 10;
    //rev = rev + rem * rem * rem;
    rev = rev + rem ** count;
    no = Math.floor(no/10);
    //count++;
}
console.log(count);

console.log(rev);
