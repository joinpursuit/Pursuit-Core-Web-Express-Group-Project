app.get("/", (req, res) => {
    try {
        let posts = db.any("SELECT * FROM posts");
        res.json({
            status: "success",
            message: "got all posts",
            body: {posts}
        });
    } catch(error) {
        next(err);
    };
});

app.get("/:id", (req, res) => {
    try {
        let posts = db.one ("SELECT * FROM posts WHERE id = $1 ", [req.params.id]);
        res.json({
            status: "success",
            message: "got specific post",
            body: {posts}
        });
    } catch(error) {
        next(err);
    };
});

app.post("/", (req, res) => {
    try {
        let posts = await db.one("INSERT INTO posts (poster_id, body) VALUES (${poster_id}, ${body}) RETURNING *", req.body);
        res.json({
            status: "success",
            message: "created new post",
            body: req.body
        });
    } catch(error) {
        next(err);
    };
});

app.patch("/:id", (req, res) => {
    try {
        let posts = await db.one("UPDATE posts SET body = ${req.body.body} WHERE id = ${req.params.id} RETURNING *", req.body);
        res.json({
            status: "success",
            message: "edited a post",
            body: req.body
        });
    } catch(error) {
        next(err);
    };
});

app.delete("/:id", (req, res) => {
    try {
        await db.none("DELETE FROM posts WHERE id = $1", [req.params.id]);
        res.json({
            status: "success",
            message: "deleted a single post",
            body: {
                id: req.params.id,
                username: req.body.poster_id,
                body: req.body
            }
        });
    } catch(error) {
        next(err);
    };
});

//escape from commit is :wq!