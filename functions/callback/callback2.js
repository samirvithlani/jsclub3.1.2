function toBeCalled(){

    console.log('I am called ');
}
function toBeCalled1(){

    console.log('I am called 1');
}


function test(cb,a){
     ///toBeCalled();


    console.log('I am test function');
    console.log(a); //100
    //console.log(cb);
    cb();




}
//test(toBeCalled,100)
//test(toBeCalled1,200)

var p = 200;
if(p ==20){
    test(toBeCalled,100)
}
else{
    test(toBeCalled1,200)
}