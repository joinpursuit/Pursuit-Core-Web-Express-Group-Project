
const db = require("../db/index.js")

// Get all albums that belong to a user.
const getAlbum = async (req, res, next) => {
    try {
        let albums = await db.any("SELECT * FROM albums WHERE user_id = $1", req.params.owner_id)
        res.status(200).json({
            status: "Success",
            message: "Get all albums",
            body: albums
        })

    } catch (err) {
        next(err)
    }
}
// create new album for a single user. 
const createAlbum = async (req, res, next) => {
    try {
        let newAlbum = await db.one("INSERT INTO albums (user_id, album_name) VALUES (${user_id}, ${album_name}) RETURNING *", req.body)
        res.status(200).json({
            status: "success",
            message: "Add album",
            body: newAlbum
        })

    } catch (err) {
        next(err)
    }
}

module.exports = {getAlbum, createAlbum}