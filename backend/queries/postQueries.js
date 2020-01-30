const db = require("../../db/index.js")

const getAllPosts = (req, res, next) => {
    try {
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}

const getSinglePost = (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}

module.exports = {getAllPosts, getSinglePost}