const products = ["iphone","ipad","tshirt"]
const services = ["repair","cleaning","delivery"]

const displayDropDown = (e) => {
    //get product dropdown
    console.log(e)
    const data = e.target.getAttribute('data-value');
    console.log(data)
    if(data ==="product"){
        var ul = document.createElement('ul');
        var prodDiv = document.getElementById('prodDiv');

        for(let i=0;i<products.length;i++){
            var li = document.createElement("li")
            li.innerHTML = products[i]
            ul.appendChild(li)
            console.log(products[i])
                
        }
        prodDiv.appendChild(ul)
        

    }
    if(data ==="service"){
        var ul = document.createElement('ul');
        var servDiv = document.getElementById('servDiv');

        for(let i=0;i<services.length;i++){
            var li = document.createElement("li")
            li.innerHTML = services[i]
            ul.appendChild(li)
            console.log(services[i])
                
        }
        servDiv.appendChild(ul)
    }

}