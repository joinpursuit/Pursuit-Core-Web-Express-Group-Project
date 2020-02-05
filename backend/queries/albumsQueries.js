const db = require("../../db/index.js")


const getAllAlbums = async (req, res, next) => {
    try {
      res.status(200).json({
        status: "Success",
        message: "Got all Albums",
        body: {
          albums: await db.any("SELECT * FROM albums")
        }
      });
    } catch (error) {
      next(error);
    }
  };

const getAllAlbumsThatBelongToUser = async (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "Got All Albums That Belong To User",
            body: {
                searchOwner:req.params.owner_id,
                albums: await db.any(`SELECT * FROM albums WHERE owner_id = $1`, req.params.owner_id)
            }
        })
    } catch(error) {
        next(error)
    }
}

const createNewEmptyAlbumForUser = async (req,res,next) => {
    try {
        let {owner_id} = req.params;
        let {album_title, album_coverURL} = req.body;
        let newAlbum = await db.one("INSERT INTO albums (owner_id, album_title, album_coverURL) VALUES ($1, $2, $3) RETURNING *", [owner_id, album_title, album_coverURL])
        res.status(200).json({
            status: "Success",
            message: "Create New Empty Album For User",
            body: {
                newAlbum
            }
        })
    } catch(error) {
        next(error)
    }
}

module.exports = {getAllAlbums, getAllAlbumsThatBelongToUser, createNewEmptyAlbumForUser}