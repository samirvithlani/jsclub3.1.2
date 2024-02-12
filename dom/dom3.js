const generateImage = ()=>{


    const path = "../images/"
    const images = ["forest.jpg","ocean.jpg","rain.jpg","sunset.jpg"]
    
    //const randomImage = Math.random() * images.length
    const randomIndex = Math.floor(Math.random() * images.length)
    // console.log(randomIndex)
    // console.log(path+images[randomIndex])


    var image =document.getElementById('image')
    image.src = path+images[randomIndex]

}

