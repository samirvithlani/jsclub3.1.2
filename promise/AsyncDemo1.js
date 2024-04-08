const getData = () => {


    return new Promise((resolve,reject)=>{


        setTimeout(()=>{

            resolve("Data Received")
        },3000)


    })


}

async function fetchData(){


    console.log("fetchData called")
    const data = await getData()
    console.log("data --->",data)
    console.log("fetchData end")


}

fetchData()

// var x;
// getData().then((data)=>{
//     console.log(data)
//     x = data;
// }).catch((err)=>{
//     console.log(err)
// })
// console.log("x --->",x)