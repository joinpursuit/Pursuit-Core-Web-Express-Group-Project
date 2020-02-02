const db = require("./../../db/db");

let newDate = () => new Date().toString()

const getAllPosts = async (req, res) => {
    try {
        let posts = await db.any("SELECT * FROM posts INNER JOIN users ON posts.poster_id=users.id");
        res.status(200).json({
            status: "success",
            message: "Retrieved all posts",
            posts,
            timestamp: newDate()
        })
    } catch(error) {
        console.log(error)
        res.json({
            status: "error",
            error,
            timestamp: newDate()
        })
    }
} // End of getAllPosts() function

const getPostById = async (req, res) => {
    try {
        let {postId} = req.params;
        let post = await db.any("SELECT * FROM posts WHERE id=$1", postId);
        if(post.length) {
            res.json({
                status: "success",
                message: "Retrieved post at id " + postId,
                post,
                timestamp: newDate() 
            })
        }
    } catch(error) {
        console.log(error);
        res.json({
            status: "error",
            error,
            timestamp: newDate()
        })
    }
} // End of getPostById() function

module.exports = {getAllPosts, getPostById}