const pictures = require('express').Router();

const picturesAlbumsRouter = require('./albums/albums.js');

pictures.use('/albums', picturesAlbumsRouter);

pictures.delete('/:pictures_id', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "deleted single picture",
        body: "test"
    })

})


module.exports = pictures