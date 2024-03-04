console.log("Before timeout: ");

setTimeout(()=>{
    // console.log("function called....")
    getData();
},3000)





const getData = () => {
    console.log('Fetching data from function');
}

// getData();