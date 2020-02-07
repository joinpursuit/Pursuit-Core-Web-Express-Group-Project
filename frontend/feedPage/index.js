document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("form")
    let postText = document.querySelector("#postText")
    let postSubmit = document.querySelector("#postSubmit")
    let postClass = document.querySelector(".postClass")
    // let postName = 
    let getPostUrl = "http://localhost:3000/posts"
    let getProfilesUrl = "http://localhost:3000/users"
    let likeIcon = "&#128077;"
    let heartIcon = "&#128152;"
    let commentIcon = "&#128172;"
    const populateFeed = async() =>{
        try {
            let res = await axios.get(getPostUrl)
            debugger
            let postData = res.data.posts
            postClass.innerHTML = ""
            postData.forEach(el => {
                let userPostID = document.createElement("h1")
                // userPostID.id = userPostIDer
                userPostID.innerText = el.users_id + " - "
                userPostID.value= el.users_id
                let posterText = document.createElement("h2")
                posterText.innerText = el.body + "  "
                posterText.value = el.body
                let postComments = document.createElement("h3")
                // postComments.setAttribute("id", "postComments")
                postComments.innerText = el.comments
                postComments.value = el.comments
                postClass.appendChild(userPostID)
                postClass.appendChild(posterText)
                postClass.appendChild(postComments)

                let likeButton = document.createElement("button")
                likeButton.id = "likeButton"
                // let commentButton = document.createElement("button")
                // let addCommentButton = document.createElement("button")
                likeButton.innerHTML = likeIcon
                // commentButton.innerHTML = "&#128221;"
                // addCommentButton.innerHTML = commentIcon
                posterText.appendChild(likeButton)
                // posterText.appendChild(commentButton)
                // posterText.appendChild(addCommentButton)
                let commentBox = document.createElement("input")
                let submit = document.createElement("button")
                submit.innerText = "submit comment"
                posterText.appendChild(commentBox)
                posterText.appendChild(submit)
    
                // addCommentButton.addEventListener("click", ()=>{
                //     let commentBox = document.createElement("input")
                //     let submit = document.createElement("button")
                //     submit.innerText = "submit comment"
                //     posterText.appendChild(commentBox)
                //     posterText.appendChild(submit)
                // },{once : true}) 
    
    
                // commentButton.addEventListener("click", ()=>{
                //     let p = document.createElement("p")
                //     let edit = document.createElement("button")
                //     let remove = document.createElement("button")
                //     remove.innerText = "delete"
                //     edit.innerText = "edit"
                //     p.innerText = "hi"
                //     posterText.appendChild(p)
                //     p.appendChild(edit)
                //     p.appendChild(remove)
                // })
    
                likeButton.addEventListener("click", ()=>{  
                    // document.getElementById("likeButton").innerHTML = 
                    if(likeButton.innerHTML ==="👍") {
                        likeButton.innerHTML = heartIcon
                        console.log("hi");
                        
                    } else {
                        likeButton.innerHTML = likeIcon
                        console.log("bye");
                        
                    }
                })
            })
    
        } catch (error) {
            console.log(error);
            
        }
    }
        populateFeed()
        
        const profilePop = async() =>{
            try {
                let res = await axios.get(getProfilesUrl)
                // debugger
    
                let profile = res.data.users
                // postClass.innerHTML = ""
                profile.forEach(el => {
                    // let h1 = document.querySelector("#userPostIDer")
                    h1.innerText = "  "
                    h1.innerText = el.firstname + "  "
                    h1.value = el.firstname
                    
                })
    
    
                
                
            } catch (error) {
                console.log(error);
                
            }
        }
    
        
        profilePop()
        
        // commentButton.addEventListener("click", ()=>{
            
            
        // })
        // likeButton.addEventListener("click", ()=>{
    
        // })
        
    })