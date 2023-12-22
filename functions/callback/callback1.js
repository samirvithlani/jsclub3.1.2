function demo(){

    console.log("hello this is demo function...");
}

function test(a){ //demo

    console.log("value...",a);
    //a();
    //demo();
    a();
}



//test(10)
//test("ram")
//test(10.90)
//test(true)
//test(undefined)
test(demo) //prototype of function