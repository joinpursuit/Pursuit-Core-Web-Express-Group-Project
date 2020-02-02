const db = require("./../../db/db");

const getAllPosts = async (req, res) => {
    try {
        let posts = await db.any("SELECT * FROM posts INNER JOIN users ON posts.poster_id=users.id");
        res.status(200).json({
            status: "success",
            message: "Retrieved all posts",
            posts,
            timestamp: new Date().toString()  
        })
    } catch(error) {
        console.log(error)
        res.json({
            status: "error",
            error
        })
    }
} // End of getAllPosts

module.exports = {getAllPosts}