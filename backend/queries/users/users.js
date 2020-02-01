const db = require('../../db/db');


const getUsers = async (req, res, next) => {
    try {
        let users = await db.any("SELECT * FROM users");
        res.status(200).json({
            users, 
            status: "success",
            message: "All Users"
        })
    } catch(err){
        next(err)
    }
}

const getUser = async (req, res, next) => {
    try {
        let user = await db.one("SELECT * FROM users WHERE id = $1", req.body
        );
        res.status(200).json({
            user,
            status: "success",
            message: "Retrieved One User"
        })
    }catch(err){
        next(err)
    }
}

const createUser = async (req, res, next) => {
    try {
        let user = await db.none("INSERT INTO users (full_name, birth_date, city, state, email, password)", req.body);
        res.status(200).json({
            user,
            status: "success",
            message: "Created New User"
        })
    } catch(err){
        next(err)
    }
}

module.exports = { getUsers, getUser, createUser }