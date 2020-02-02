const db = require('../db/index');

const getAllLikes = async (req, res, next) => {
    try {
        let likes =  await db.any("SELECT * FROM likes")
        res.status(200).json({
            likes,
            status: "success",
            message: "all likes"
        })
    } catch (error) {
        next (error)
    }
}

const addSingleLike = async (req, res, next) => {
    try {
        let like = await db.none("INSERT into likes (liker_id, post_id) VALUES (${liker_id}, ${post_id})", req.body)
        res.status(200).json({
            like,
            status: "success",
            message: "added a single like"
        })
    } catch (error) {
        next (error)
    }
}

const deleteSingleLike =  async (req, res, next) => {
    try {
        let like =  await db.none("DELETE FROM likes WHERE id = ", req.params.id)
        res.status(200).json({
            like,
            status: "success",
            message: "deleted/removed a like"
        })
    } catch (error) {
        next (error)   
    }
}

module.exports = {getAllLikes, addSingleLike, deleteSingleLike}