const db = require("./../../../db/db")
const {isUserExisting} = require("./../users");

const getUserPost = async (req, res, next) => {
    try {
<<<<<<< HEAD
        let { postId } = req.params
        let post = await db.any("SELECT * FROM posts WHERE poster_id = $1", postId);
        res.status(200).json({
            post,
            status: "Success",
            message: "All Users Posts"
        })
=======
        if(await isUserExisting(req.params.userId)) {
            let post = await db.any("SELECT * FROM posts WHERE poster_id = $1", req.params.userId);
            res.status(200).json({
                post,
                status: "Success",
                message: "All Users Posts"
            })
        } else {
            res.json({
                status: "error",
                error: "No user found by that ID"
            })
        }
        
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8
    } catch(err){
        next(err)
    }

}

module.exports = { getUserPost } 