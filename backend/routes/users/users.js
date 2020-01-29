app.get("/", (req, res) => {
    try {
        let users = db.any("SELECT * FROM users");
        res.json({
            status: "success",
            message: "got all users",
            body: {
                users
            }
        });
    } catch(error) {
        next(err);
    };
});

app.get("/:id", (req, res) => {
    try {
        let users = db.one ("SELECT * FROM users WHERE id = $1 ", [req.params.id]);
        res.json({
            status: "success",
            message: "got specific user information",
            body: {
                users
            }
        });
    } catch(error) {
        next(err);
    };
});

app.post("/", (req, res) => {
    try {
        let users = await db.one("INSERT INTO users (first_name, last_name, age, profile_image, about_statement) VALUES (${first_name}, ${last_name), ${age}, ${profile_image}, ${about_statement}) RETURNING *", req.body);
        res.json({
            status: "success",
            message: "created new user",
            body: {
                name: req.body.name,
                age: req.body.age
            }
        });
    } catch(error) {
        next(err);
    };
})

app.delete("/:id", (req, res) => {
    try {
        await db.none("DELETE FROM users WHERE id = $1", [req.params.id]);
        res.json({
            status: "success",
            message: "deleted a single user",
            body: {
                id: req.params.id,
                name: req.body.name,
                age: req.body.age
            }
        });
    } catch(error) {
        next(err);
    };
});