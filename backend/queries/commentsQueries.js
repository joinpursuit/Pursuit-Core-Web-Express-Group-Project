const db = require("../../db/index.js")

const getAllCommentsByPost = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Succcess"
        })
    } catch(error) {
        console.log("error")
    }
}

const addCommentByPost = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}

const editCommentByPost = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}

const deleteComment = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}


module.exports = {getAllCommentsByPost, addCommentByPost, editCommentByPost, deleteComment};
