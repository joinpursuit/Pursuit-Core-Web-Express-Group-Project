const db = require("../../db/index.js")

const getAllCommentsByPost = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Succcess",
            message: "get All Comment by post_id"
        })
    } catch(error) {
        console.log("error")
    }
}

const addCommentByPost = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "add a Comment by post_id from author_id"

        })
    } catch(error) {
        console.log("error")
    }
}

const editCommentByPost = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "edit a Comment by post_id from author_id"
        })
    } catch(error) {
        console.log("error")
    }
}

const deleteComment = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "delete a Comment by post_id from author_id"
        })
    } catch(error) {
        console.log("error")
    }
}


module.exports = {getAllCommentsByPost, addCommentByPost, editCommentByPost, deleteComment};
