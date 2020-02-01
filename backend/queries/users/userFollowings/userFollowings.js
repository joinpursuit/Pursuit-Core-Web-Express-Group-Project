const db = require("./../../../db/db")

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
    let following = await db.none("INSERT INTO followings VALUES (followers_id, followed_id)", req.params.id);
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