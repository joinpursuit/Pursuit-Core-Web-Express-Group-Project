const pictures = require('express').Router
const {getPicture,createPicture,deletePicture} = require('') 
// (queries go above in require )

pictures.get('/:id',getPicture)

pictures.post('/',createPicture)

pictures.delete('/:id',deletePicture)

module.exports = pictures