const db = require("../db/index.js");

const getAllPost =  async (req, res, next) =>{
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

const getUserPosts = async (req, res, next) =>{
    try{
        let post = await db.any("SELECT * FROM posts WHERE poster_id = $1", [req.params.user_id]);
        res.status(200).json({
            status: "success",
            message: `User ID: ${req.params.user_id}'s posts`,
            body: post
        })

    }catch(err){
        next(err)
    }
}

const registerPosts = async (req, res, next) =>{
    try{
        let newPost = await db.any("INSERT INTO posts (poster_id, body) VALUES (${poster_id}, ${body}) RETURNING *", req.body);
        res.status(200).json({
            status: "success",
            message: "post was a success",
            body: newPost
        })
    }catch(err){
        next(err)
    }
}

const deletePost = async (req, res, next) =>{
    try{
        let removePost = await db.none("DELETE FROM posts WHERE id = $1", req.params.id);
        res.status(200).json({
            status: "success",
            message: "delete was a success",
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



module.exports = {getAllPost, getUserPosts, registerPosts, deletePost, editPost}