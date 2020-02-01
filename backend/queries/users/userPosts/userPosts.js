const db = require("./../../../db/db")

const getUserPost = async (req, res, next) => {
    try {
        let post = await db.any("SELECT * FROM posts WHERE poster_id = $1", req.params.id);
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