const albums = require('express').Router()
const albumsRouter = require('./albums/albums.js')
const {} = require("../queries/albums.js")

albums.get('/:owner_id', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Get all user's albums",
        body: "test"
    })
})

albums.post('/albums/:owner_id', (req, res) => {
    res.status(200).json({
        status: "success",
        message: "New empty alhum has been created",
        body: "test"
    })
})

module.exports = albums