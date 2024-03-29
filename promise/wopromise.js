const placeOrder = () => {


   
        console.log('Order placed...')
           return {
                orderID: 1234,
                orderStatus: 'Order Placed',
                amount: 500
            }
            



}

const payment  = (orderDetails) => {


    
           return {
                //orderID: orderDetails.orderID,
                //amount: orderDetails.amount,
                paymentStatus: 'Payment Done'
            }
    
    


}

console.log('Order is being placed')
var data;
setTimeout(()=>{
    data= placeOrder()
},5000)
console.log('Order Placed:',data)
console.log("payment started...")
var paymentDeatail = payment(data)
console.log('Payment Done:',paymentDeatail)


