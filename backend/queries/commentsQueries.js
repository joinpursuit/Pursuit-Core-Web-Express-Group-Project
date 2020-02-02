const db = require("../../db/index.js")

const getAllComments = async (req, res, next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "Grabbed all comments",
            body: {
                comments: await db.any("SELECT * FROM comments WHERE post_id = $1 ")
            }
        });
    } catch(error) {
        next(error);
    }
};



const addSingleComment = async (req, res, next) => {
    try {
        let { post_id, author_id } = req.params;
        let { content } = req.body;
            let single_comment = await db.one("INSERT INTO comments (post_id, author_id, content) VALUES ($1, $2, $3) RETURNING *", [post_id, author_id, content] )
        res.status(200).json({
            status: "Success",
            message: "Added a single comment",
            body: {
                single_comment
            }
        });
    } catch(error) {
        next(error);
    }
}


const editSingleComment = async (req, res, next) => {
    try {
        let { post_id, author_id } = req.params;
        let { content } = req.body;
            let edited_comment = await db.one(`UPDATE comments SET content = '${content}' WHERE (post_id = $1 AND author_id = $2)`, [post_id, author_id])
        res.status(200).json({
            status: "Succes",
            message: "You have edited a single comment",
            body: {
                edited_comment
            }
        });
    } catch(error) {
        next(error);
    }
}



const deleteSingleComment = async (req, res, next) => {
    try {
        let { post_id, author_id } = req.params;
        let { content } = req.body;
            let deleted_comment = await db.one("DELETE FROM comments WHERE (post_id = $1 AND author_id = $2) RETURNING *", [post_id, author_id])
        res.status(200).json({
            status: "Success",
            message: "You have deleted a single comment",
            body: {
                deleted_comment
            }
        });
    }catch(error) {
        next(error);
    }
}

module.exports = {getAllComments, addSingleComment, editSingleComment, deleteSingleComment};

// GET /comments/posts/:post_id - Get all comments for a single post.
// POST /comments/posts/:post_id/:commenter_id - Add single comment.
// PATCH /comments/:post_id/:commenter_id - Edit single comment.
// DELETE /comments/:post_id/:commenter_id - Delete single comment.