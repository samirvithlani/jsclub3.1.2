class Test{


     a = 10; // by default it is let scope
     x ;
     //private variable
     #y = 30;

     constructor(){
        console.log("I am constructor");
        this.x = 20;
     }

     //arrow function
     getData = () => {
        console.log("Data is ", this.a);
        console.log("Data is ", this.x);
        console.log("Data is ", this.#y);
        
     }

     //normal function
     printData(){
        console.log("Data is ", this.a);
        console.log("Data is ", this.x);
        console.log("Data is ", this.#y);
        
        
     }


     //private methods

     #myData = () => {
        console.log("I am private method");
     }

     callPrivate(){
        this.#myData();
     }
     
        //call private method
    



}

//class Object
let t = new Test();
//t.getData();
console.log("Value is ", t.a);
t.callPrivate();
//console.log("Value is ", t.y);

