const db = require ("../db/index.js")

const getAllLikes = (req, res, next)=>{
    try{
       let likes =  await db.any("SELECT * FROM likes")
        res.status(200).json({
            status: "success",
            message: "Got All Likes",
            body: likes

        })
    }catch(err){
        next(err)
    }
}

const addLike = (req, res, next) =>{
    try{
        let newLike = await db.one("INSERT INTO likes(post_id, comment_id, likers_id)VALUES(${post_id}, ${comment_id}, ${likers_id}", req.body)
        res.status(200).json({
            status:"message",
            message:"Added like",
            body: newLike
        })
    }catch(err){
        next(err)
    }
}

const deleteOneLike = (req, res, next) =>{
    try{
        let deleteLikes = await db.one("DELETE * FROM Likes WHERE id = $1", req.params.id);
        res.status(200).json({
            status:"message",
            message: "Like deleted",
            body:deleteLikes
        })
    }catch(err){
        next(err)
    }
}



module.exports = {getAllLikes, addLike, deleteOneLike};