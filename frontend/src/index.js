// import axios from "axios"
let userId = 1
const getUserID = async () => {
    let userId = 1
    try {
        let res = await axios.get(`http://localhost:3000/users/${userId}`) 
        console.log(res)

    } catch(error) {
        console.log("error")
    }
}
// getUserID()

const getFollowing = async (userId) => {
    try {
        let res = await axios.get(`http://localhost:3000/users/${userId}`) 
        debugger
        console.log(res)

    } catch(error) {
        console.log("error")
    }
}
getFollowing()