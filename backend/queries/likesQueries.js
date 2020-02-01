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

const getLikesForSingle = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "get All likes from post_id",
            body: {
                searchPostID:req.params.post_id,
                result: await db.any('SELECT * FROM posts JOIN LIKES ON posts.id = likes.post_id WHERE posts.id = $1',req.params.post_id)
              }
        })
    } catch(error) {
        res.json({
            error:error
        })
    }
}

const addSingleLike = async(req, res, next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "add a like to post_id by liker_id",
            body:{
                liker_id: req.params.liker_id,
                post_id:req.params.post_id,
                result: await db.one('INSERT INTO likes (liker_id, post_id) VALUES($1, $2) RETURNING *',[req.params.liker_id, req.params.post_id])
            }
        })
    } catch(error) {
        res.json({
            error:error
        })
    }
}

const deleteSingleLike = (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "delete a like by liker_id"
        })
    } catch(error) {
            message: "delete a like by liker_id",
            body:{
                liker_id: req.params.liker_id,
                post_id:req.params.post_id,
                result: await db.one('DELETE FROM likes WHERE (liker_ID =$1 AND post_id=$2) RETURNING *',[req.params.liker_id, req.params.post_id])
            }
        })
    } catch(error) {
        res.json({
            error:error
        })
    }
}


module.exports = {getLikesForSingle, addSingleLike, deleteSingleLike}