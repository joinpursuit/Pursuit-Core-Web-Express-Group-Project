const db = require("./../../../db/db")
const {isUserExisting} = require("./../users");

const getUserFollowings = async (req, res, next) => {
    try {
        let followings = await db.any("SELECT * FROM followings WHERE followers_id =$1", req.params.id);
        res.status(200).json({
            followings,
            status: "Success",
            message: "All User Followings"
        })
    }catch(err){
        next(err)
    }   
}

const createUserFollowing = async (req, res, next) => {
    try {
        let {followedId} = req.body;
        let {userId} = req.params;
        let following = await db.one("INSERT INTO followings (follower_id, followed_id) VALUES ($1, $2) RETURNING *", [userId, followedId]);
        res.status(200).json({
            following,
            status: "Success",
            message: "Created New Follower"
        })
    }catch(err){
        next(err)
    }
}


module.exports = { getUserFollowings, createUserFollowing }