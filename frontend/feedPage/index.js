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
                // debugger
        
                let userPostID = document.createElement("h1")
                // userPostID.id = userPostIDer
                userPostID.innerText = el.users_id + " - "
                userPostID.value= el.users_id
                let posterText = document.createElement("h2")
                let poss = document.createElement("p")
                poss.innerText = el.body
                posterText.innerText = el.body + "  "
                posterText.value = el.body
                let postComments = document.createElement("h3")
                // postComments.setAttribute("id", "postComments")
                postComments.innerText = el.comments
                postComments.value = el.comments

                NameContainer.appendChild(userPostID)
                postContainer.appendChild(poss)
                lowerContainer.appendChild(NameContainer)
                lowerContainer.appendChild(postContainer)
                lowerContainer.appendChild(btnContainer)

                upperContainer.appendChild(imageContainer)
                cardContainer.appendChild(upperContainer)
                cardContainer.appendChild(lowerContainer)
                
                // postClass.appendChild(userPostID)
                // postClass.appendChild(posterText)
                // postClass.appendChild(postComments)
                postClass.appendChild(cardContainer)
                

                let likeButton = document.createElement("button")
                likeButton.id = "likeButton"
                // let commentButton = document.createElement("button")
                // let addCommentButton = document.createElement("button")
                likeButton.innerHTML = likeIcon
                // commentButton.innerHTML = "&#128221;"
                // addCommentButton.innerHTML = commentIcon
                posterText.appendChild(likeButton)
                btnContainer.appendChild(likeButton)
                // posterText.appendChild(commentButton)
                // posterText.appendChild(addCommentButton)
                let commentBox = document.createElement("input")
                let submit = document.createElement("button")
                submit.innerText = "submit comment"
                posterText.appendChild(commentBox)
                posterText.appendChild(submit)
                btnContainer.appendChild(commentBox)
                btnContainer.appendChild(submit)


    
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