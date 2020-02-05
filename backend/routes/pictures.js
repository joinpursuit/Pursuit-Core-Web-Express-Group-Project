const pictures = require("express").Router();
const {
  getAllPicturesByAlbum,
  addSinglePicture,
  deleteSinglePicture,
  getAllPicturesByOwner
} = require("../queries/picturesQueries");

pictures.get("/albums/:album_id", getAllPicturesByAlbum);
pictures.get("/:owner_id", getAllPicturesByOwner);
pictures.post("/albums/:album_id", addSinglePicture);
pictures.delete("/:id", deleteSinglePicture);

module.exports = pictures;
