const db = require('../db/index')

const getPicture = async (req,res,next) =>{
    
    try {
        let picture = await db.one("SELECT * FROM pictures WHERE id = $1", [req.params.id]
        )
        res.status(200).json({
            picture,
            status:"success",
            message: "A picture"
        })
    } catch (err) {
        next(err)
    }
}

const createPicture = async (req,res,next)=>{
    try {
        await db.none("INSERT INTO pictures (albums_id, picture_url) VALUES (${albums_id},${picture_url})",req.body)
        res.status(200).json({
            status:"success",
            message: "NEW PICTURE CREATED"
        })
    } catch (error) {
        next(error)
        
    }
}

const deletePicture = async (req,res,next)=>{
    try {
        await db.none("DELETE FROM pictures WHERE id = $1",[req.params.id])
        res.status(200).json({
            status:"success",
            message: "PICTURE WAS DELETED"
        })
    } catch (error) {
        next(error)
        
    }
}


module.exports = {getPicture,createPicture,deletePicture}