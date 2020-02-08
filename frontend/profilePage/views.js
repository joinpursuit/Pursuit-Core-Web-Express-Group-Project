document.addEventListener("DOMContentLoaded", () =>{
    let currentUser = sessionStorage.currentUser;
    let currentUsername = sessionStorage.currentUsername;
    let currentPassword = sessionStorage.currentPassword;
    let viewUser = sessionStorage.viewUser;

    let divProfilePic = document.querySelector("#profile_pic")
    let  divAlbums = document.querySelector("#albums")
    let divUserInfo = document.querySelector("#users_info")
    let divUserPost = document.querySelector("#users_post")
    let divUserPref = document.querySelector("#pref")
    let form = document.querySelector("#pQuestions")
    
  

  

    let fullName = "";
    let user_id = 0;

    const profilePic = async () =>{
        try{
          let res = await axios.get("http://localhost:3000/albums/"+viewUser);
        // debugger
        let ppic = res.data.album[0].picture_url

        let img = document.createElement("img")
        img.src =ppic
        divProfilePic.appendChild(img)
        } 
          catch(err) {
              console.log(err)
              debugger
          }
      }

      const userInfo = async () =>{
        try{
          let res = await axios.get("http://localhost:3000/users/" + viewUser);
          debugger
          let userKeys = Object.keys(res.data.users[0])
          let usersi = Object.values(res.data.users[0])

          user_id = res.data.users[0].id
          userPref(user_id)
          debugger
          
        let ul = document.querySelector("#info")

        for(let i =0; i < userKeys.length; i++){
            let label = document.createElement("label")
            if(userKeys[i] === "firstname"){
              fullName += usersi[i]
            }else if(userKeys[i] === "lastname"){
              label.innerText = "Name:"
              fullName += " "+usersi[i]
            }else if(userKeys[i] === "orientation"){
                label.innerText = "What im looking for:"
            }else {
                label.innerText = userKeys[i] + ":"
            }
            
            let p = document.createElement("p")
            if(userKeys[i] === "firstname"){
   
          }else if(userKeys[i] === "lastname"){
            p.innerText = fullName
          }else {
            p.innerText =  usersi[i] 
          }
            


            divUserInfo.appendChild(label)
            divUserInfo.appendChild(p)
            let br =document.createElement("br")
            divUserInfo.appendChild(br)
            
        }
        // divUserInfo.appendChild(ul)
        } 
          catch(err) {
              console.log(err)
              debugger
          }
      }

      const userPref = async (user_id) =>{
        try{
          let res = await axios.get("http://localhost:3000/preferences/"+user_id);
          let userPrefKeys = Object.keys(res.data.preferences[0])
          let userPrefVal = Object.values(res.data.preferences[0])
          // debugger
          
        let ul = document.querySelector("#info")
        

        for(let i =0; i < userPrefKeys.length; i++){
          // debugger
            let label = document.createElement("label")
            
                label.innerText = userPrefKeys[i] + ":"
            
            
            let p = document.createElement("p")
            p.innerText =  userPrefVal[i] 
          
            


            divUserPref.appendChild(label)
            divUserPref.appendChild(p)
            let br =document.createElement("br")
            divUserPref.appendChild(br)
        }
        // divUserInfo.appendChild(ul)
        } 
          catch(err) {
              console.log(err)
              debugger
          }
      }
      const userPost = async () =>{
        try{
          let res = await axios.get("http://localhost:3000/posts/"+viewUser);
        // debugger
        let usersi = res.data.userPosts[0].body
        
        let p = document.createElement("p")
        p.innerText = usersi 
        // debugger
        divUserPost.appendChild(p)
        
        } 
          catch(err) {
              console.log(err)
              debugger
          }
      }

   
profilePic()
userInfo()
userPost()
})