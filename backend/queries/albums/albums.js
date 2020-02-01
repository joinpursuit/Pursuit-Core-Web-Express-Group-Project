const dataBase = require("../../database/index.js");

const getAlbums = async (req, res, next) => {
  try {
    let albums = await dataBase.one("SELECT * FROM albums WHERE id = $1", [
      req.params.user_id
    ]);
    res.status(200).json({
      albums,
      status: "success",
      message: "selected albums"
    });
  } catch (err) {
    next(err);
  }
};

const newAlbum = async (req, res, next) => {
  try {
    let newAlbum = await dataBase.any(
      "INSERT INTO Albums (title, user_id) VALUES (${title},${user_id}) RETURNING *",
      req.body
    );

    res.status(200).json({
      newAlbum,
      status: "success",
      message: "one album created"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAlbums, newAlbum };
