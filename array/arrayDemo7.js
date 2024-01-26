//forEach,filter,map,reduce
//forEach will return void...
//map will return same size of an array
//filter will return based on condition
//reduce will return single value


var data = ["amit","raj","parth","raj","amit","raj","kunal"]
// for(let i=0;i<data.length;i++){
//     console.log(data[i])
// }

//data[i]
// data.forEach((d)=>{

//     console.log(d)

// })


// data.map((d)=>{
//     console.log(d)
// })


// var upperData = data.map((d)=>{

//     return d.toUpperCase()
// })
// console.log(upperData)

// for(let i=0;i<data.length;i++){


//     upperData.push(data[i].toUpperCase())

// }
// console.log(upperData)


// var filData = data.filter((d)=>{
//     return d.length>4
// })


var filData = data.filter((d)=>d.length>4)
var filData1 = data.filter((d)=>d.startsWith("a")||d.startsWith("p"))


// for(let i =0;i<data.length;i++){

//     if(data[i].length>4){
//         filData.push(data[i])
//     }
// }

console.log(filData)
console.log(filData1)






