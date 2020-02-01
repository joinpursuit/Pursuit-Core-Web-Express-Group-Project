const db = require ("../db/index")

// Get all albums that belong to a user.
const getAlbum = (req, res, next) =>{
    try{
    let albums = await db.any("SELECT * FROM albums WHERE albums_id = $1", req.params.albums_id)
    res.status(200).json({
        status:"Success",
        message: "Get all albums",
        body: albums
    })

    }catch(err){
        next(err)
    }
}
// create new album for a single user. 

const createAlbum = (req, res, next) =>{
    try{
        let newAlbum = await db.none("INSERT INTO albums (albums_id, album_name, thumbnail, time_stamp) VALUES (${albums_id}, ${album_name}, ${thumbnail}, ${time_stamp})", req.body)
        res.status(200).json({
            status: "success",
            message: "Add album", 
            body: newAlbum
        })

    }catch(err){
        next(err)
    }
}