const getData = () => {


    const promise = new Promise((resolve,reject)=>{

        //resolve and reject are the two functions that are passed to the promise
        //resolve("Data is fetched successfully")
        setTimeout(()=>{
            //resolve("Data is fetched successfully")
            reject("Error while fetching data....")
        },3000)

    })
    console.log(promise)
    promise.then((data)=>{
        console.log("data..",data)
    })
    promise.catch((error)=>{
        console.log("error..",error)
    })


}

getData()