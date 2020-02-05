document.addEventListener("DOMContentLoaded", ()=>{
let form = document.querySelector("form")
let postText = document.querySelector("#postText")
let postSubmit = document.querySelector("#postSubmit")
let postClass = document.querySelector(".postClass")
let getPostUrl = "http://localhost:3000/posts"
let getCommentUrl = "http://localhost:3000/comments/posts"

const populateFeed = async() =>{
    try {
        let res = await axios.get(getPostUrl)
        let postData = res.data.posts
        postClass.innerHTML = ""
        postData.forEach(el => {
            let h1 = document.createElement("h1")
            h1.innerText = el.body + "  "
            h1.value = el.body
            postClass.appendChild(h1)
            let likeButton = document.createElement("button")
            let commentButton = document.createElement("button")
            likeButton.innerHTML = "&#128077;"
            commentButton.innerHTML = "&#128172;"
            h1.appendChild(likeButton)
            h1.appendChild(commentButton)
        })

    } catch (error) {
        console.log(error);
        
    }
}
    populateFeed()
    
    const commentsPopulate = async() =>{
        try {
            let res = await axios.get(getCommentUrl)
            debugger
            let postData = res.data.posts
            postClass.innerHTML = ""
            postData.forEach(el => {
                let h1 = document.createElement("h1")
                h1.innerText = el.body + "  "
                h1.value = el.body
                postClass.appendChild(h1)
                let likeButton = document.createElement("button")
                let commentButton = document.createElement("button")
                likeButton.innerHTML = "&#128077;"
                commentButton.innerHTML = "&#128172;"
                h1.appendChild(likeButton)
                h1.appendChild(commentButton)
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }
    
    commentsPopulate()
    
    commentButton.addEventListener("click", ()=>{
        
        
    })
    likeButton.addEventListener("click", ()=>{
    
    })
    
})