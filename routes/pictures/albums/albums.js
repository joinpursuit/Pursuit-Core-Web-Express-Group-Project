const picturesAlbums = require('express').Router()

picturesAlbums.get('/:album_id', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Get all pictures from an album",
        body: "test"
    })
})

picturesAlbums.post('/:album_id', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "User posted picture",
        body: "test"
    })
})

module.exports = picturesAlbums