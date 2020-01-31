const db = require("/Users/jovanni/Desktop/Projects/groupExpressProject/Pursuit-Core-Web-Express-Group-Project/backend/database/index.js");

const getLikesPost = async (req, res, next) => {
    try{
        let numberOfLikes = await db.any(`SELECT COUNT(id) FROM likes WHERE post_id = ${req.params.post_id}`);
        res.status(200).json({
            numberOfLikes,
            status: "Success",
            message: "Likes for this post"
        })
    } catch (err) {
        next(err)
    }
}

const likePost = async (req, res, next) => {
    try{
        await db.none(`INSERT INTO likes (user_id, post_id) VALUES (${req.body.user_id}, ${req.params.post_id})`);
        res.status(200).json({
            status: "Success",
            message: "Post was liked"
        })
    } catch(error) {
        next(error);
    }
}

const deleteLike = async (req, res, next) => {
    try{
        await db.none(`DELETE FROM likes WHERE user_id = ${req.params.user_id} AND post_id = ${req.params.post_id}`)
            res.status(200).json({
                status: "Success",
                message: "Like was deleted from post"
            })
    } catch(error) {
        next(error);
    }
}

module.exports = { getLikesPost, likePost, deleteLike };