


const displayUserInfo = async (id) => {
    let res = await axios.get(
      `http://localhost:3000/users/${id}`
    );

    let { username, propicurl, bio } = res.data.body.single_user;
    let profName = document.querySelector("#ownerName")
    let profPic = document.querySelector("#ownerPic")
    let profBio = document.querySelector("#ownerBio")
    let logOffBtn = document.querySelector("#logOffBtn")
    
    let img = document.createElement("img");
    img.src = propicurl;
    profName.innerText = username;
    profPic.appendChild(img);
    profBio.innerText = bio;
  
    logOffBtn.addEventListener("click",e =>{
      debugger;
      sessionStorage.removeItem('userID');
      sessionStorage.removeItem('resultUserID');
      window.location.href = "logIn.html";
      window.location.href.reload();
    });

    if(sessionStorage.resultUserID){
      displayAlbum(sessionStorage.resultUserID)
    }else{
      displayAlbum(sessionStorage.userID)
    }

  };

  let contentButtonDiv = document.querySelector(".contentButton");
  let createBtn =document.createElement("button");
  createBtn.innerText="Create New Album";
  contentButtonDiv.appendChild(createBtn);

createBtn.addEventListener("click",async()=>{
    createBtn.disabled = true;
    let form = document.createElement("form");
    form.id = "createNewAlbum";
    let albumTitleInput = document.createElement("input");
    let coverInput = document.createElement("input");
    let newAlbumBtn = document.createElement("button");
    albumTitleInput.placeholder="please enter new album title";
    coverInput.placeholder="please paste cover URL link"
    newAlbumBtn.innerText="create new Album"
    form.appendChild(albumTitleInput)
    form.appendChild(coverInput)
    form.appendChild(newAlbumBtn)
    contentButtonDiv.appendChild(form)
    createNewAlbum.addEventListener("submit",(e)=>{
      e.preventDefault()
      insertAlbum(sessionStorage.userID,albumTitleInput.value,coverInput.value)
      albumTitleInput.value="";
      coverInput.value=""
    })

  })


  const insertAlbum =async(id,title,url)=>{
    let insert = await axios.post(`http://localhost:3000/albums/${id}`,{album_title:title, album_coverURL:url})
  }
  
  let content = document.querySelector(".content")
  const displayAlbum= async(id)=>{
      let res = await axios.get(
          `http://localhost:3000/albums/${id}`);
          res.data.body.albums.forEach(album=>{
            let div =document.createElement("div")
            div.album_id=album.id
            div.className="albumCover"
            let img = document.createElement("img");
            img.src = album.album_coverurl;
            div.appendChild(img);
            content.appendChild(div)
            div.addEventListener("click",(e)=>{
              e.preventDefault()
              sessionStorage.album_id=div.album_id;
              window.location.href = "photo.html";
             window.location.href.reload();
            })

            })
        }


displayUserInfo(sessionStorage.userID);