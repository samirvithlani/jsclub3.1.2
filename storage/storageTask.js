
var products = [
    {
        id:101,
        name:"iphone",
        price:200,
        description:"iphone 15",
    },
    {
        id:102,
        name:"samsung",
        price:180,
        description:"galaxy s22",
    },
    {
        id:103,
        name:"lenovo",
        price:400,
        description:"lenovo legion"
    }
]
var cart =[]


const loadProducts = ()=>{


    var productContainer = document.getElementById("productContainer")

    for(let i=0;i<products.length;i++){

        const prodDiv = document.createElement("div")
        prodDiv.className = "product"
        const prodInfo = document.createElement("div")
        prodInfo.className = "product-info"

        const title = document.createElement("h2")
        title.innerHTML = products[i].name

        const price = document.createElement("p")
        price.innerHTML = "Price: "+products[i].price

        const description =document.createElement("p")
        description.innerHTML = "Description: "+products[i].description

        const cartbutton = document.createElement("button")
        cartbutton.innerHTML = "Add to Cart"
        cartbutton.className = "btn btn-primary"

        cartbutton.addEventListener("click",()=>{

            cart.push(products[i])
            //localStorage.setItem("product",JSON.stringify(products[i]))
            localStorage.setItem("cart",JSON.stringify(cart))
            //reload page..
            

        })


        prodInfo.appendChild(title)
        prodInfo.appendChild(price)
        prodInfo.appendChild(description)
        prodInfo.appendChild(cartbutton)

        prodDiv.appendChild(prodInfo)
        productContainer.appendChild(prodDiv)
    }

 loadCart()   
}

const loadCart = ()=>{

    
    console.log("load cart")

        var cartArray = JSON.parse(localStorage.getItem("cart"))
        console.log(cartArray)
        console.log(cartArray.length)

        var cartItem = document.getElementById("cartItem")
        cartItem.innerHTML = "Cart Items: "+cartArray.length
        
        

}