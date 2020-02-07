// import axios from "axios"
let userId = 1

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
getFollowers()