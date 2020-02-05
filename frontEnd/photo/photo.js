let content = document.querySelector(".content")
let profName = document.querySelector("#ownerName")
let profPic = document.querySelector("#ownerPic")
let profBio = document.querySelector("#ownerBio")
let logOffBtn = document.querySelector("#logOffBtn")

let displayUserInfo = async () => {
    let res = await axios.get(
      `http://localhost:3000/users/${sessionStorage.userID}`
    );
    let { username, propicurl, bio } = res.data.body.single_user;
    let img = document.createElement("img");
    img.src = propicurl;
    profName.innerText = username;
    profPic.appendChild(img);
    profBio.innerText = bio;
  
    logOffBtn.addEventListener("click",e =>{
      sessionStorage.removeItem('userID');
      sessionStorage.removeItem('resultUserID');
      window.location.href = "logIn.html";
      window.location.href.reload();
    });


    if(sessionStorage.album_id){
      displayAlbumPhotos(sessionStorage.album_id);
      let quitAlbumBtn = document.createElement("button")
      quitAlbumBtn.innerText="Close this Album";
      content.appendChild(quitAlbumBtn);
      quitAlbumBtn.addEventListener("click",e=>{
        e.preventDefault()
        sessionStorage.removeItem('album_id');
        window.location.href = "album.html";
        window.location.href.reload();
      })
    }else if(sessionStorage.resultUserID){
      displayPhoto(sessionStorage.resultUserID)
  }else{
      displayPhoto(sessionStorage.userID)
  }
  };
  
  let displayAlbumPhotos=async(album_id)=>{
    let res =await axios.get(`http://localhost:3000/pictures/albums/${album_id}`)
    res.data.body.pictures.forEach(photo=>{
      let img = document.createElement("img");
      img.src = photo.pictureurl;
      content.appendChild(img)
    })
  }
  
  let displayPhoto = async(id)=>{
      let res = await axios.get(
          `http://localhost:3000/pictures/${id}`);
          res.data.body.pictures.forEach(photo=>{
              let img = document.createElement("img");
              img.src = photo.pictureurl;
              content.appendChild(img)
            })
    }

    displayUserInfo();