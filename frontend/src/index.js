// import axios from "axios"
let userId = 1
let postsArr = []

const getFollowing = async () => {
    try {
        let res = await axios.get(`http://localhost:3000/users/${userId}/followings/followingCount`) 
        let following = res.data.following[0]
        return following.userfollowingcount;
         
    } catch(error) {
        console.log(error)
    }
}
// getFollowing()
const getFollowers = async () => {
    try {
        let res = await axios.get(`http://localhost:3000/users/${userId}/followings/followerCount`) 
        // debugger
        let followers = res.data.follower[0];
        return followers.userfollowercount; 
    } catch(error) {
        console.log(error)
    }
}
// getFollowers()
const getPosts = async (postId) => {
    try {
        let res = await axios.get(`http://localhost:3000/users/${userId}/posts`) 
        let posts = res.data.post;
        posts.filter(post => {
            console.log(post);
            debugger
            postsArr.push({posterId: post.id, body: post.body, timestamp: post.creation_date})
        })
    } catch(error) {
        console.log(error)
    }
}
getPosts()

// const gamesToday = async () => {

// }

const populateNewsFeed = async () => {
    let gamesTodaySec = document.querySelector(".gamesToday")
    let followers = document.querySelector(".followers")
    let following = document.querySelector(".following")
    let newsFeed = document.querySelector(".newsFeed")
    
    let p1 = document.createElement("p1")
    let p2 = document.createElement("p2")

    // p1.innerText = await getFollowers() //gets Users Followers and appends 
    // followers.appendChild(p1)
    // // debugger
    // // let p = document.createElement("p")
    // p2.innerText = await getFollowing();
    // following.appendChild(p2)
    console.log(postsArr);
    debugger
    
    postsArr.forEach(post => {
        // let newsFeed = document.querySelector(".newsFeed")
        let p3 = document.createElement("p1")
        let p4 = document.createElement("p2")
        let section = document.createElement("section")
        section.id = post.id
        section.class = userpost

        p3.innerText = post.body
        p4.innerText = post.timestamp

        newsFeed.appendChild(section)
        section.appendChild(p3)
        section.appendChild(p4)
        debugger
        
    })

}
populateNewsFeed()
