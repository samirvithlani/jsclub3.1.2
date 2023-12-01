var age = 18

if(age>=18){

    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}

// ---> ladder if-else , nested if-else

age = 15
if (age>=18){
   
    console.log("You are eligible to vote")
}
else if(age>=16){
    console.log("You are eligible to vote in 2 years")
}
else if (age>=14){
    console.log("You are eligible to vote in 4 years")
}
else{
    console.log("You are not eligible to vote stay home")
}



var isAlive = false
var userAge = 61

if(isAlive == true){

        console.log("You are alive")
        if(userAge>=60){
            console.log("You are senior citizen")
        }
        else{
            console.log("You are not senior citizen")
        }
}
else{

    console.log("You are dead")
}

