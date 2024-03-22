const placeOrder = () => {

    var promise =new Promise((accept,reject)=>{

        setTimeout(()=>{
            //accept({orderId:1234,amount:5000,status:"Order is placed"})
            reject({orderId:1234,statsu:"Order is not placed"})
        },3000)

    })
    console.log(promise)


    promise.then((orderData)=>{
        console.log("Order is placed successfully",orderData)
    })
    promise.catch((error)=>{
        console.log("Order is not placed",error)
    })
        
    
}


placeOrder()