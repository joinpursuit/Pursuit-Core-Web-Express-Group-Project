const db = require("../db/index.js")

const getAllAlbumPictures = async (req, res, next) => {
  try{
    if (await db.none("SELECT * FROM albums WHERE id = ${album_id}", req.body)){
      let pics = await db.any("SELECT * FROM pictures WHERE album_id = ${album_id}", req.body)
      res.status(200).json({
        status: "success",
        message: "All pictures from target album",
        body: pics
      })
    } else{
      throw {status: 404, error: "Target album is not available"}
    }

  }catch(err){
    next(err)
  }
}

const postPicture = async (req, res, next) => {
  try{
    if (await db.none("SELECT * FROM albums WHERE id = ${album_id}", req.body)){
      let pic = await db.one("INSERT INTO pictures (album_id, photo_url, time_stamp) VALUES (${album_id}, ${photo_url}, ${time_stamp}) RETURNING *", req.body)
      res.status(200).json({
        status: "success",
        message: "Your picture has been posted.",
        body: pic
      })
    } else{
      throw {status: 404, error: "Target album is not available"}
    }

  }catch(err){
    next(err)
  }
}

const deletePictures = async (req, res, next) => {
  try{
    if (await db.one("SELECT * FROM pictures WHERE id = ${pic_id}", req.body)){
      let pic = await db.none("DELETE FROM pictures where id = ${pic_id} RETURNING *", req.body)
      res.status(200).json({
        status: "success",
        message: "Targeted picture has been deleted",
        body: pic
      })
    } else{
      throw {status: 404, error: "Target picture is not available"}
    }
  }catch(err){
    next(err)
  }
}

module.exports = {postPicture, getAllAlbumPictures, deletePictures}