const productsArray = ["iphone","ipad","tshirt"]
const servicesArray = ["repair","cleaning","delivery"]
//function displayDropDown(e){}
// const displayDropDown = (e) => {
//     //get product dropdown
//     console.log(e)
//     const data = e.target.getAttribute('data-value');
//     console.log(data)
//     if(data ==="product"){
//         var ul = document.createElement('ul');
//         var prodDiv = document.getElementById('prodDiv');

//         for(let i=0;i<products.length;i++){
//             var li = document.createElement("li")
//             li.innerHTML = products[i]
//             ul.appendChild(li)
//             console.log(products[i])
                
//         }
//         prodDiv.appendChild(ul)
        

//     }
//     if(data ==="service"){
//         var ul = document.createElement('ul');
//         var servDiv = document.getElementById('servDiv');

//         for(let i=0;i<services.length;i++){
//             var li = document.createElement("li")
//             li.innerHTML = services[i]
//             ul.appendChild(li)
//             console.log(services[i])
                
//         }
//         servDiv.appendChild(ul)
//     }

// }

const displayDropDown = (event) => {

    console.log("click...")
    const data = event.target.getAttribute('data-value');
    console.log(data)

    const output = document.getElementById('output');
    if(data =="product"){

        for(let i=0;i<productsArray.length;i++){

            var h1 = document.createElement("h1")
            h1.innerHTML = productsArray[i]
            output.appendChild(h1)

        }
    }
    if(data =="service"){

        for(let i=0;i<servicesArray.length;i++){

            var h1 = document.createElement("h1")
            h1.innerHTML = servicesArray[i]
            output.appendChild(h1)

        }
    }
    
}
