function calling(){

    console.log("calling !!!")
}
function printing(){

    console.log("printing !!!")
}

function printData(a){

//        console.log(a)
            a() // calling


}

// printData(1)
// printData("java")
// printData(true)
//printData(calling)
printData(printing)