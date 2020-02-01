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
    let {userID} = req.params
    try {
        let user = await db.one("SELECT * FROM users WHERE user_id = $1", userID);
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
    let {userInfo} = req.body
    try {
        let user = await db.none("INSERT INTO users (full_name, birth_date, city, state, email, password) VALUES (${full_name}, ${birth_date}, ${city}, ${state}, ${email}, ${password}) RETURNING *", userInfo);
        res.status(200).json({
            user,
            status: "Success",
            message: "Created New User"
        })
    } catch(err){
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        let {userId} = req.params
        let user = await db.none("DELETE FROM users WHERE user_id =$1", userId);
        res.status(200).json({
            user,
            status: "Success",
            message: "Deleted User"

        })
    } catch(err){
        next(err)
    }
}

module.exports = { getUsers, getUser, createUser, deleteUser }