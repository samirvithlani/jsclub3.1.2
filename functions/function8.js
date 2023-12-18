



const isEligible = (alive,age) => {

        if(alive ==true){
            if(age>=18){
                return true
            }
            else{
                return false
            }
        }
        else{
            return false
        }


}

//using  ternary operator


var isEligible1 = (alive,age) => alive == true ? age >= 18 ? "alive and age grt a8" : ">18" : "dead"
x = isEligible1(false,19)
console.log(x);