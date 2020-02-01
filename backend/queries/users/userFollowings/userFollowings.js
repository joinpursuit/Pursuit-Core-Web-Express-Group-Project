const db = require("./../../../db/db")

const getUserFollowings = async (req, res, next) => {
    let followings = await db.any("SELECT * FROM followings WHERE followers_id =$1", req.params.id)
}