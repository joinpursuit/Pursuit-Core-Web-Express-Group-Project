document.addEventListener("DOMContentLoaded", () => {
    
    let postForm = document.querySelector("#postForm");
    let postInput= document.querySelector("#postInput")
    let postFeed = document.querySelector("#usersPost");
    let sectName = document.querySelector(".name");
    let sectRecord = document.querySelector(".hotboxRecord");
    let sectFollowers = document.querySelector(".followers");
    let secFollowed = document.querySelector(".followed");
    // const userId = sessionStorage.getItem("userId"); 
    const userId = 1

    const showUserInfo = async () => {
        try {
            await axios.get(`http://localhost:3000/users/${userId}`).then(res => {
                let userInfo = res.data.user
                let showName = document.createElement("p");
                let showRecord = document.createElement("p");
                showName.innerText = userInfo["full_name"];
                showRecord.innerText = userInfo["bet_history"];
                debugger
                // showFollowers = userInfo[""]
                sectName.appendChild(showName)
                
            })
        } catch(err){
            console.log(err)
        }
    }



})