const albumsPictures = require('express').Router({mergeParams: true})
const {getPicturesFromAlbums} = require('')
// (queries go above in require )

albumsPictures.get('/',getPicturesFromAlbums)

module.exports = albumsPictures