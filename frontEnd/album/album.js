let content = document.querySelector(".content")


// display Users Album on page 

let displayUserAlbum = async (userID) => {
    let res = await axios.get(`http://localhost:3000/albums/${userID}`)
    let data = res.data.body.albums
    data.forEach(album => {
        let h2 = document.createElement("h2")
        h2.innerText = album.album_title
        let p = document.createElement("p")
        p.innerText = album.album_date
        let img = document.createElement("img")
        img.src = album.album_coverurl
        content.appendChild(h2)
        content.appendChild(p)
        content.appendChild(img)
    })
}

displayUserAlbum(sessionStorage.userID)