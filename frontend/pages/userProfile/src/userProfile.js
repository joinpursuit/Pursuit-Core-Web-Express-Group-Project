document.addEventListener("DOMContentLoaded", () => {
    
    let postForm = document.querySelector("#postForm");
    let postInput= document.querySelector("#postInput")
    let postFeed = document.querySelector(".usersPost");
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
                sectName.appendChild(showName)
                
            })
        } catch(err){
            console.log(err)
        }
    }

    const showUserPosts = async () => {
            try {
                await axios.get(`http://localhost:3000/users/${userId}/posts`).then(res => {
                    let userPosts = res.data.post
                    userPosts.forEach(post => {
                        let showPosts = document.createElement("p");
                        showPosts.innerText = userPosts[post]
                        debugger
                    })

                })

            }catch(err){
                console.log(err)
            }
    }

    const getUserFollowers = async () => {
        try {
            await axios.get(`http://localhost:3000/users/${userId}/followings/followerCount`).then(res => {
                debugger
                let userFollowers = res.data.follower[0]["userfollowercount"]
                let showFollowers = document.createElement("p");
                showFollowers.innerText = `${userFollowers}`
                debugger
            })
        } catch(err){
            console.log(err)
        }
    }





getUserFollowers()
showUserPosts()
showeUserInfo()
})