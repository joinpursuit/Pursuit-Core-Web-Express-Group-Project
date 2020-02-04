const db = require('../db/index')

const getAlbums = async (req,res,next) =>{

    try {
        let album = await db.any("SELECT * FROM albums"
        )
        res.status(200).json({
            album,
            status:"success",
            message: "All Albums"
        })
    } catch (err) {
        next(err)
    }
}

const getAlbum = async (req,res,next) =>{

    try {
        let album = await db.one("SELECT * FROM albums LEFT JOIN pictures ON pictures.albums_id = albums.id WHERE albums.id = $1", [req.params.id]
        )
        res.status(200).json({
            album,
            status:"success",
            message: "An Album"
        })
    } catch (err) {
        next(err)
    }
}


const createAlbum = async (req,res,next)=>{
    try {
        await db.none("INSERT INTO albums (users_id, pics) VALUES (${users_id},${pics})",req.body)
        res.status(200).json({
            status:"success",
            message: "NEW ALBUM CREATED"
        })
    } catch (error) {
        next(error)

    }
}

const deleteAlbum = async (req,res,next)=>{
    try {
        await db.none("DELETE FROM albums WHERE id = $1",[req.params.id])
        res.status(200).json({
            status:"success",
            message: "ALBUM WAS DELETED"
        })
    } catch (error) {
        next(error)

    }
}

module.exports = {getAlbums,getAlbum,createAlbum,deleteAlbum}