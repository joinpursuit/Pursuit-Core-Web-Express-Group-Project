const db = require("../../db/index");

const getAllPicturesByAlbum = async (req, res, next) => {
  try {
    let { album_id } = req.params;
    res.status(200).json({
      status: "Success",
      message: "Got all pictures",
      body: {
        pictures: await db.any(
          "SELECT * FROM pictures WHERE album_id=$1",
          album_id
        )
      }
    });
  } catch (error) {
    next(error);
  }
};
const getAllPicturesByOwner = async (req, res, next) => {
  try {
    let { owner_id } = req.params;
    res.status(200).json({
      status: "Success",
      message: "Got all pictures by Owner",
      body: {
        pictures: await db.any(
          "SELECT * FROM pictures JOIN albums ON pictures.album_id = albums.id WHERE owner_id =$1",
          owner_id
        )
      }
    });
  } catch (error) {
    next(error);
  }
};

const addSinglePicture = async (req, res, next) => {
  try {
    let { album_id } = req.params;
    let { post_id, pictureURL } = req.body;
    let single_picture = await db.one(
      "INSERT INTO pictures (post_id, pictureurl, album_id) VALUES ($1,$2,$3) RETURNING *",
      [post_id, pictureURL, album_id]
    );
    res.status(200).json({
      status: "Success",
      message: "You uploaded a single photo!",
      body: {
        single_picture
      }
    });
  } catch (error) {
    next(error);
  }
};

const deleteSinglePicture = async (req, res, next) => {
  try {
    let { id } = req.params;
    let user = await db.one("DELETE FROM pictures WHERE id=$1 RETURNING *", id);
    res.status(200).json({
      status: "Success",
      message: "You deleted a single photo!",
      body: {
        user
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPicturesByAlbum,
  addSinglePicture,
  deleteSinglePicture,
  getAllPicturesByOwner
};
