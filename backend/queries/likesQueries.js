const db = require("../../db/index.js")

const getLikesForSingle = (req, res, next) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "get All likes from post_id"
        })
    } catch(error) {
        console.log("error")
    }
}

const addSingleLike = (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "add a like to post_id by liker_id"
        })
    } catch(error) {
        console.log("error")
    }
}

const deleteSingleLike = (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "delete a like by liker_id"
        })
    } catch(error) {
        console.log("error")
    }
}


module.exports = {getLikesForSingle, addSingleLike, deleteSingleLike}