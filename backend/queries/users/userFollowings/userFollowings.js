const db = require("./../../../db/db")

const getUserFollowings = async (req, res, next) => {
    try {
        let followerID = req.params
    let followings = await db.any("SELECT * FROM followings WHERE followers_id =$1", followerID);
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
    let {followerId, followedId} = req.params
    try {
    let following = await db.none("INSERT INTO followings VALUES (${followers_id}, ${followed_id}", [followerId, followedId]);
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