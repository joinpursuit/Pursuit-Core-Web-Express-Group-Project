const albums = require('express').Router()
const {getAlbum, createAlbum} = require("../../queries/album")

albums.get('/:owner_id',getAlbum)

albums.post('/:owner_id', createAlbum)

module.exports = albums