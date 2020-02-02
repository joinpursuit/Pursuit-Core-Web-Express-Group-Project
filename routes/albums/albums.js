const albums = require('express').Router()
const {getAlbum, createAlbum} = require("../../queries/album")
albums.get('/:owner_id',(req, res) => {
    res.status(200).json({
        status: "success",
        message: "Get all user's albums",
        body: "test"
    })
})

albums.post('/:owner_id',  (req, res) => {
    res.status(200).json({
        status: "success",
        message: "New empty album has been created",
        body: "test"
    })
})

module.exports = albums