const db = require("../../db/index.js")

const getLikesForSingle = (req, res, next) => {
    try {
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}

const addSingleLike = (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}

const deleteSingleLike = (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}


module.exports = {getLikesForSingle, addSingleLike, deleteSingleLike}