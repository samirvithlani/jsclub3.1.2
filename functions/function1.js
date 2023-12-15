function test(){

    console.log("Test function called....");
    console.log("without return type and without parameters / arguments")

}

//let 
function add(a,b){
    //with return type and with parameters / arguments
    let c = a+b;
    return c;
}

function sub(a,b,c){

    //without return type and with parameters / arguments
    let x = a-b-c;
    console.log("Sub = "+x);
}



function getData(){


    return "Hi this is India"
}



test(); // calling the function

var ans = add(10,20)
console.log("Ans = "+ans);

sub(100,20,30) //cant store...cz no return type


var data = getData()
console.log("Data = ", data);