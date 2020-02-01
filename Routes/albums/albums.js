const albums = require('express').Router
const {getAlbums,getAlbum,createAlbum,deleteAlbum,editAlbum} = require('') 
// (queries go above in require )
const albumPictureRouter = require('./pictures/pictures.js')
albums.use("/:id/pictures",albumPictureRouter)

albums.get('/',getAlbums)

albums.get('/:id',getAlbum)

albums.post('/',createAlbum)

albums.delete('/:id',deleteAlbum)

albums.patch('/:id',editAlbum)

module.exports = albums