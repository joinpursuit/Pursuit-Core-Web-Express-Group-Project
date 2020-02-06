document.addEventListener("DOMContentLoaded", ()=>{
let form = document.querySelector("form")
let postText = document.querySelector("#postText")
let postSubmit = document.querySelector("#postSubmit")
let postClass = document.querySelector(".postClass")
let getPostUrl = "http://localhost:3000/posts"
let getCommentUrl = "http://localhost:3000/comments/posts"
let profiles = "http://localhost:3000/users"

const populateFeed = async() =>{
    try {
        let res = await axios.get(getPostUrl)
        debugger
        let postData = res.data.posts
        postClass.innerHTML = ""
        postData.forEach(el => {
            let posterText = document.createElement("h1")
            posterText.innerText = el.body + "  "
            posterText.value = el.body
            let posterID = document.createElement("h3")
            // posterID.setAttribute("id", "posterID")
            posterID.innerText = el.comments
            posterID.value = el.comments
            postClass.appendChild(posterText)
            postClass.appendChild(posterID)
            let likeButton = document.createElement("button")
            let commentButton = document.createElement("button")
            let addCommentButton = document.createElement("button")
            likeButton.innerHTML = "&#128077;"
            commentButton.innerHTML = "&#128172;"
            addCommentButton.innerHTML = "&#128221;"
            posterText.appendChild(likeButton)
            posterText.appendChild(commentButton)
            posterText.appendChild(addCommentButton)
            addCommentButton.addEventListener("click", ()=>{
                let commentBox = document.createElement("input")
                let submit = document.createElement("button")
                submit.innerText = "submit comment"
                posterText.appendChild(commentBox)
                posterText.appendChild(submit)
            })
            commentButton.addEventListener("click", ()=>{
                let p = document.createElement("p")
                let edit = document.createElement("button")
                let remove = document.createElement("button")
                remove.innerText = "delete"
                edit.innerText = "edit"
                p.innerText = "hi"
                posterText.appendChild(p)
                p.appendChild(edit)
                p.appendChild(remove)
            })
            likeButton.addEventListener("click", ()=>{
                if(likeButton.innerHTML = "&#128077;") {
                    likeButton.innerHTML = "&#128152;;"
                }
                    likeButton.innerHTML = "&#128152;"
            })
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

            // let postData = res.data.posts
            // postClass.innerHTML = ""
            // postData.forEach(el => {
            //     let h1 = document.createElement("h1")
            //     h1.innerText = el.body + "  "
            //     h1.value = el.body
            //     postClass.appendChild(h1)
            // })


            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    
    // commentsPopulate()
    
    // commentButton.addEventListener("click", ()=>{
        
        
    // })
    // likeButton.addEventListener("click", ()=>{
    
    // })
    
})