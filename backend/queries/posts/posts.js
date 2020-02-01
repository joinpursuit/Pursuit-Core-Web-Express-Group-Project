const db = require("./../../db/db");

const getAllPosts = async (req, res) => {
    try {
        let posts = await db.any("SELECT * FROM posts");
        res.status(200).json({
            status: "success",
            message: "Retrieved all posts",
            posts,
            timestamp: new Date().toString()  
        })
    } catch(error) {
        res.json({
            status: "ERROR",
            error
        })
    }
    
} // End of getAllPosts

module.exports = {getAllPosts}