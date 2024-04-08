const generateSongs = () =>{


    console.log("generateSongs called")
    const songs = [
        {title: 'song1', duration: 4},
        {title: 'song2', duration: 3},
        {title: 'song3', duration: 5},
    ]

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve(songs)
        },3000)

    })


}

const createPlaylist = (songs) =>{


console.log("createPlaylist called")
    return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                resolve({
                    message: "Playlist Created",
                    songs: songs
                })
            },2000)


    })


}

const playSongs = async () =>{


    console.log("playSongs called")
    const songs = await generateSongs()
    console.log("songs --->",songs)
    const Playlist = await createPlaylist(songs)
    console.log("Playlist --->",Playlist)




    // generateSongs().then((songs)=>{
    //     console.log("songs --->",songs)
    //     createPlaylist(songs).then((playlist)=>{
    //         console.log("playlist --->",playlist)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }).catch((err)=>{
    //     console.log(err)
    // })





}
playSongs()