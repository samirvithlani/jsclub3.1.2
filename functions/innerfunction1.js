//inner function -->
function outer()
{

    console.log("I am outer function");

    function inner(){
        console.log("I am inner function");
    } 
    //block scope
    inner();
    
}
//outer();
//inner(); //error


function bankTrasaction(){


        function deposit(){
            console.log("I am deposit function");
        }

        function withdraw(){
            console.log("I am withdraw function");
        }

        deposit();
        withdraw();


}
bankTrasaction();