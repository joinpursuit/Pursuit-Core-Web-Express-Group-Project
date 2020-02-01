const db = require("../../db/index.js")


const getAllAlbumsThatBelongToUser = async (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "Got All Albums That Belong To User",
            body: {
                albums: await db.any("SELECT * FROM albums WHERE user = $1", req.body)
            }
        })
    } catch(error) {
        next(error)
    }
}

const createNewEmptyAlbumForUser = async (res,req,next) => {
    try {
        req.status(200).json({
            status: "Success",
            messge: "Create New Empty Album For User",
            body: {
                newAlbum: await db.any(`INSERT INTO albums VALUES ($1, $2, $3, $4)`, (req.body))
            }
        })
    } catch(error) {
        next(error)
    }
}

module.exports = {getAllAlbumsThatBelongToUser, createNewEmptyAlbumForUser}