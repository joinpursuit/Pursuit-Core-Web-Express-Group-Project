const albums = require('express').Router()
const {getAlbums,getAlbum,createAlbum,deleteAlbum} = require('../../queries/albums') 
// (queries go above in require )

albums.get('/',getAlbums)

albums.get('/:id',getAlbum)

albums.post('/',createAlbum)

albums.delete('/:id',deleteAlbum)

module.exports = albums