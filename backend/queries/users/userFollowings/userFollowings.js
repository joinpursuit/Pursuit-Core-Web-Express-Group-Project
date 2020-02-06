const db = require("./../../../db/db")
const {isUserExisting} = require("./../users");

const getUserFollowings = async (req, res, next) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
        let followerId = req.params
    let followings = await db.any("SELECT * FROM followings WHERE followers_id =$1", followerId);
    res.status(200).json({
        followings,
        status: "Success",
        message: "All User Followings"
=======
        let followings = await db.any("SELECT * FROM followings WHERE follower_id =$1", req.params.userId);
        res.status(200).json({
            followings,
            status: "Success",
            message: "All User Followings"
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8
        })
=======
        let {userId} = req.params;
        if(isUserExisting(userId)) {
            let followings = await db.any("SELECT * FROM followings WHERE follower_id =$1", req.params.userId);
            res.status(200).json({
                followings,
                status: "Success",
                message: "All User Followings"
            })
        } else {
            throw {status: 404, error: "User does not exist"}
        }
        
>>>>>>> 2416fcf4bbe55d1747f962d59ead9d4accef7190
    }catch(err){
        next(err)
    }   
}

const createUserFollowing = async (req, res, next) => {
    let {followedId} = req.params
    let {followerId} = req.body
    try {
<<<<<<< HEAD
    let following = await db.none("INSERT INTO followings VALUES (${followers_id}, ${followed_id}", [followedId, followerId]);
    res.status(200).json({
        following,
        status: "Success",
        message: "Created New Follower"
=======
        let {followedId} = req.body;
        let {userId} = req.params;
<<<<<<< HEAD
        let following = await db.one("INSERT INTO followings (follower_id, followed_id) VALUES ($1, $2) RETURNING *", [userId, followedId]);
        res.status(200).json({
            following,
            status: "Success",
            message: "Created New Follower"
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8
        })
=======
        if(isUserExisting(userId)) {
            let following = await db.one("INSERT INTO followings (follower_id, followed_id) VALUES ($1, $2) RETURNING *", [userId, followedId]);
            res.status(200).json({
                following,
                status: "Success",
                message: "Created New Follower"
            })
        } else {
            throw {status: 404, error: "User does not exist"}
        }
        
>>>>>>> 2416fcf4bbe55d1747f962d59ead9d4accef7190
    }catch(err){
        next(err)
    }
}

const getUserFollowingCount = async (req, res, next) => {
    try {
        let {userId} = req.params;
        if(await isUserExisting(userId)) {
            let following = await db.any("SELECT COUNT(*) AS userFollowingCount FROM followings WHERE follower_id=$1", userId);
            if(following.length) {
                res.json({
                    following,
                    status: "success",
                    message: "retrieved following count"
                })
            } else {
                throw {status: 404, error: "User is not following anyone"}
            }
        } else {
            throw {status: 404, error: "User does not exist"}
        }

    } catch(err) {
        next(err)
    }
}

const getUserFollowerCount = async (req, res, next) => {
    try {
        let {userId} = req.params;
        if(await isUserExisting(userId)) {
            let follower = await db.any("SELECT COUNT(*) AS userFollowerCount FROM followings WHERE followed_id=$1", userId);
            if(follower.length) {
                res.json({
                    follower,
                    status: "success",
                    message: "retrieved follower count"
                })
            } else {
                throw {status: 404, error: "User has no followers"}
            }
        } else {
            throw {status: 404, error: "User does not exist"}
        }

    } catch(err) {
        next(err)
    }
}

module.exports = { getUserFollowings, createUserFollowing, getUserFollowingCount, getUserFollowerCount }