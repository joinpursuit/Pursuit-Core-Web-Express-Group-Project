const users = require("express").Router();
const db = require('../../db/index.js');


users.get("/", (req, res) => {
    try {
        let usersDB = db.any("SELECT * FROM users");
        res.json({
            status: "success",
            message: "got all users",
            body: {
                usersDB
            }
        });
    } catch(error) {
        console.log(error);
    };
});

users.get("/:id", (req, res) => {
    try {
        let usersDB = db.one ("SELECT * FROM users WHERE id = $1 ", [req.params.id]);
        res.json({
            status: "success",
            message: "got specific user information",
            body: {
                usersDB
            }
        });
    } catch(error) {
        console.log(error);
    };
});

users.post("/", (req, res) => {
    try {
        let usersDB = db.one("INSERT INTO users (first_name, last_name, age, profile_image, about_statement) VALUES (${first_name}, ${last_name), ${age}, ${profile_image}, ${about_statement}) RETURNING *", req.body);
        res.json({
            status: "success",
            message: "created new user",
            body: {
                name: req.body.name,
                age: req.body.age
            }
        });
    } catch(error) {
        console.log(error);
    };
})

users.delete("/:id", (req, res) => {
    try {
        db.none("DELETE FROM users WHERE id = $1", [req.params.id]);
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
        console.log(error);
    };
});

module.exports = users