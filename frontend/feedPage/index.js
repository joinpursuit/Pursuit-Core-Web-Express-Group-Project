document.addEventListener("DOMContentLoaded", ()=>{
    let currentUser = sessionStorage.currentUser;
    let currentUsername = sessionStorage.currentUsername;
    let currentPassword = sessionStorage.currentPassword;
    let logout = document.querySelector("#logout")
    let form = document.querySelector("form")
    let postText = document.querySelector("#postText")
    let postSubmit = document.querySelector("#postSubmit")
    let postClass = document.querySelector(".postClass")
    let getPostUrl = "http://localhost:3000/posts"
    let getProfilesUrl = "http://localhost:3000/users"
    let likesUrl = "http://localhost:3000/likes"
    let likeIcon = "&#128077;"
    let heartIcon = "&#128152;"
    const populateFeed = async() =>{
        try {
            let res = await axios.get(getPostUrl)
            debugger
            let postData = res.data.posts
            postClass.innerHTML = ""
            
            postData.forEach(el => {
               
                let cardContainer =document.createElement("div")
                cardContainer.class ="card-container"
                //All divs belong to card-container
                    let upperContainer =document.createElement("div")
                    upperContainer.className ="upper-container"
                        let imageContainer = document.createElement("div")
                        imageContainer.className = "image-container"

                    let lowerContainer =document.createElement("div")
                    lowerContainer.className ="lower-container"
                        let NameContainer =document.createElement("div")
                        let postContainer =document.createElement("div")
                        let btnContainer =document.createElement("div")
                        btnContainer.className = "btn"

                
                let profilePic = document.createElement("img")
                profilePic.src = el.profile_pic[0]
                let userPostID = document.createElement("h1")
                userPostID.innerText = el.poster[0] + " - "
                userPostID.value= el.poster[0]
                let posterText = document.createElement("h2")
                let poss = document.createElement("p")
                poss.innerText = el.body
                posterText.innerText = el.body + "  "
                posterText.value = el.body
                let comment = document.createElement("h3")
                comment.innerText = "Mysterious User: " + el.commenter_id[0] + " - " + el.comments + "    "
                    let edit = document.createElement("button")
                    let remove = document.createElement("button")
                    remove.innerText = "delete"
                    edit.innerText = "edit"
                    comment.appendChild(edit)
                    comment.appendChild(remove)



                comment.addEventListener("click", (e)=>{
                    e.preventDefault()
                    debugger
                    sessionStorage.setItem("viewUser", el.commenter_id[0]);
                    window.location.href = "../profilePage/viewProfile.html";
                })
                imageContainer.appendChild(profilePic)
                NameContainer.appendChild(userPostID)
                postContainer.appendChild(poss)
                lowerContainer.appendChild(NameContainer)
                lowerContainer.appendChild(postContainer)
                lowerContainer.appendChild(btnContainer)

                upperContainer.appendChild(imageContainer)
                cardContainer.appendChild(upperContainer)
                cardContainer.appendChild(lowerContainer)
                
                postClass.appendChild(cardContainer)
                

                let likeButton = document.createElement("button")
                likeButton.id = "likeButton"
                likeButton.innerHTML = likeIcon
                btnContainer.appendChild(comment)
                btnContainer.appendChild(likeButton)
                let commentBox = document.createElement("input")
                let submit = document.createElement("button")
                submit.innerText = "submit comment"
                posterText.appendChild(commentBox)
                posterText.appendChild(submit)
                btnContainer.appendChild(commentBox)
                btnContainer.appendChild(submit)
                let likeID = el.users_id
                let postID = el.id
                likeButton.addEventListener("click", ()=>{  
                    if(likeButton.innerHTML ==="👍") {
                        likeButton.innerHTML = heartIcon
                        console.log("hi");
                        const addLike = async() =>{
                            try {
                                let res = await axios.post(likesUrl+ "/" + likeID, {
                                    liker_id : (likeID),
                                     post_id : (postID)
                                })

                            } catch (error) {
                                console.log(error);
                            }
                        }
                        addLike()
                    } else {
                        likeButton.innerHTML = likeIcon
                        console.log("bye");
                        const deleteLike = async() =>{
                            try {
                                let res = await axios.delete(likesUrl+ "/" + likeID)
                            } catch (error) {
                                console.log(error);
                            }
                        }
                        deleteLike()
                    }
                })
            })
            
    
        } catch (error) {
            console.log(error);
            
        }
    }
        populateFeed()
        logout.addEventListener("click",()=>{
            sessionStorage.clear();
        })
        
    })