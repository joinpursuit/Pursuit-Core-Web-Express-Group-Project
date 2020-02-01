const db = require("./../../../db/db")

const getUserPost = async (req, res, next) => {
    try {
        let { postId } = req.params
        let post = await db.any("SELECT * FROM posts WHERE poster_id = $1", postId);
        res.status(200).json({
            post,
            status: "Success",
            message: "All Users Posts"
        })
    } catch(err){
        next(err)
    }

}

module.exports = { getUserPost } 