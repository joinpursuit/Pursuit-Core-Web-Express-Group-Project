const db = require("../db/index.js");

const getAllPosts =  async (req, res, next) =>{
    try{
        let posts = await db.any("SELECT * FROM posts");
        res.status(200).json({
            status: "success",
            message: "These are all of the available posts",
            body: posts
        })
    }catch(err){
        next(err)
    }
}

const getSinglePost = async (req, res, next) =>{
    try{
        if (await db.one("SELECT * FROM posts WHERE id = $1", [req.params.post_id])) {
            let post = await db.one("SELECT * FROM posts WHERE id = $1", [req.params.post_id]);
            res.status(200).json({
                status: "success",
                message: "Your post has been retrieved",
                body: post
            })
        } else {
            throw {status: 404, error: "Target post does not exist."}
        }
    }catch(err){
        next(err)
    }
}

const registerPosts = async (req, res, next) =>{
    try{
        if (await db.any("SELECT * FROM users WHERE id = ${user_id}", req.body)){

            let newPost = await db.any("INSERT INTO posts (user_id, body) VALUES (${user_id}, ${body}) RETURNING *", req.body);
            res.status(200).json({
                status: "success",
                message: "post was a success",
                body: newPost
            })
        } else {
            throw {status: 404, error: "Target user does not exist."}
        }
    }catch(err){
        next(err)
    }
}

const deletePost = async (req, res, next) =>{
    try{
        let removePost = await db.none("DELETE FROM posts WHERE id = $1", req.params.id);
        res.status(200).json({
            status: "success",
            message: "Post deleted successfully",
            body: removePost
        })

    }catch(err){
        next(err)
    }
}

const editPost = async (req, res, next)=>{
    try{

        let edit = await db.one("UPDATE posts SET body = ${body} WHERE id = ${id} RETURNING *", req.body)
        res.status(200).json({
            status: "success",
            message: "The post was edited successfully.",

       
        })
    }catch(err){
        next(err)
    }
}



module.exports = {getAllPosts, getSinglePost, registerPosts, deletePost, editPost}