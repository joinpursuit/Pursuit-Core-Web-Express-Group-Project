let displayUserInfo = async () => {
    let res = await axios.get(
      `http://localhost:3000/users/${sessionStorage.userID}`
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
      sessionStorage.removeItem('userID');
      window.location.href = "logIn.html";
      window.location.href.reload();
    });
  };
  
  
  let content = document.querySelector(".content")
  let displayPhoto = async(userID)=>{
      let res = await axios.get(
          `http://localhost:3000/pictures/${userID}`);
          res.data.body.pictures.forEach(el=>{
              let img = document.createElement("img");
              img.src = el.pictureurl;
              content.appendChild(img)
            })
        }
        
    displayUserInfo();
    displayPhoto(sessionStorage.userID)