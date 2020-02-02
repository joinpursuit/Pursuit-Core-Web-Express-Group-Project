const db = require("./../../../db/db")
const {isUserExisting} = require("./../users");

const getUserFollowings = async (req, res, next) => {
    try {
        let followings = await db.any("SELECT * FROM followings WHERE follower_id =$1", req.params.userId);
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

const getUserFollowingCount = async (req, res, next) => {
    try {
        let {userId} = req.params;
        if(await isUserExisting(userId)) {
            let following = await db.any("SELECT COUNT(*) AS userFollowingCount FROM following WHERE follower_id=$1", userId);
            if(following.length) {
                res.json({
                    following,
                    status: "success",
                    message: "retrieved following count"
                })
            }
        } else {
            res.json({
                status: "error",
                error: "No user found by that ID"
            })
        }

    } catch(err) {
        next(err)
    }
}

const getUserFollowerCount = async (req, res, next) => {
    try {
        let {userId} = req.params;
        if(await isUserExisting(userId)) {
            let follower = await db.any("SELECT COUNT(*) AS userFollowerCount FROM following WHERE followed_id=$1", userId);
            if(follower.length) {
                res.json({
                    follower,
                    status: "success",
                    message: "retrieved follower count"
                })
            }
        } else {
            res.json({
                status: "error",
                error: "No user found by that ID"
            })
        }

    } catch(err) {
        next(err)
    }
}

module.exports = { getUserFollowings, createUserFollowing, getUserFollowingCount, getUserFollowerCount }