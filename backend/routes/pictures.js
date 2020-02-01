const pictures = require("express").Router();
const {
  getAllPicturesByAlbum,
  addSinglePicture,
  deleteSinglePicture
} = require("../queries/picturesQueries");

pictures.get("/albums/:album_id", getAllPicturesByAlbum); // queries all the posts
pictures.post("/albums/:album_id", addSinglePicture); // uplaods a single picture
pictures.delete("/:pic_id", deleteSinglePicture); // deletes a single picture

module.exports = pictures;
