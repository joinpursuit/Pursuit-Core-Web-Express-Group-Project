const db = require('../db/index');


const getPosts = async (req, res, next) => {
    try {
        let posts = await db.any("SELECT *,(SELECT ARRAY_AGG(comments.body)AS comments FROM comments WHERE comments.post_id = posts.id),(SELECT ARRAY_AGG(comments.commentor_id)AS commenter_id FROM comments WHERE comments.post_id = posts.id),(SELECT ARRAY_AGG(users.firstname) AS poster FROM users WHERE users.id = users_id),(SELECT ARRAY_AGG(likes.liker_id) AS who_liked FROM likes WHERE posts.id = post_id),(SELECT ARRAY_AGG(albums.id) AS albums FROM albums WHERE albums.id = posts.users_id),(SELECT ARRAY_AGG(pictures.picture_url) AS profile_pic FROM pictures WHERE albums_id = posts.users_id) FROM posts");
        res.status(200).json({
            posts,
            status: "Success!",
            message: "ALL posts!"
        })
    } catch (err) {
        next(err);
    }
}

const getPost = async (req, res, next) => {
    try {
        let user = req.params.id;
        let userPosts = await db.any("SELECT * FROM posts WHERE users_id = " + user);
        res.status(200).json({
            userPosts,
            status: "Success!",
            message: "ALL USER posts retrieved!"
        })
    } catch (err) {
        next(err);  
    }
}

const createPost = async (req, res, next) => {
    try {
        await db.none("INSERT INTO posts (users_id, body) VALUES (${users_id}, ${body})", req.body);
        res.status(200).json({
            status: "Success!",
            message: "Created NEW POST!"
        })
    } catch (err) {
        next(err);
    }
}

const deletePost = async (req, res, next) => {
    try {
        await db.none("DELETE FROM posts WHERE id = " + req.params.id);
        res.status(200).json({
            status: "Success!",
            message: "DELETED post!"
        })
    } catch (err) {
        next(err);
    }
}

const editPost = async (req, res, next) => {
    console.log(req.body, req.params)
    try {
        let editedPost = await db.one("UPDATE posts SET body = '" + req.body.body + "' WHERE id = " + req.params.id + " RETURNING *");
        res.status(200).json({
            editedPost,
            status: "Success!",
            message: "EDITED post!"
        })
    } catch (err) {
        next(err);
    }
}



module.exports = { getPosts, getPost, createPost, deletePost, editPost };