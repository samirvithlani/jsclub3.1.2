function Calc(x,y){


        function add(a,b){

            return a+b;
        }

        function sub(a,b){
                
                return a-b;
        }

        var ans1 = add(x,y)
        var ans2 = sub(x,y)
        //console.log("add...",ans);
        return ans1;

}

// var x = Calc(10,20);
// console.log("x = ",x);




function Calc1(x,y){

        function mul(a,b){
                
                return a*b;
        }

        // var ans = mul(x,y)
        // return ans;

        return mul(x,y);
}
var y = Calc1(10,20);
console.log("y = ",y);