const db = require('../../db/db');

const isUserExisting = async (userId) => {
    let user = await db.any("SELECT * FROM users WHERE id=$1", userId);
    if(user.length) return true;
    return false;
}

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
        let {userId} = req.params
        if(await isUserExisting(userId)) {
            let user = await db.one("SELECT * FROM users WHERE id = $1", userId);
            res.status(200).json({
                user,
                status: "success",
                message: "Retrieved One User"
            })
        } else {
            res.json({
                status: "error",
                error: "user is not existing"
            })
        }
        
    }catch(err){
        next(err)
    }
}

const createUser = async (req, res, next) => {
    try {
        let user = await db.one("INSERT INTO users (full_name, birth_date, city, state, email, password) VALUES (${full_name}, ${birth_date}, ${city}, ${state}, ${email}, ${password}) RETURNING *", req.body);
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
        if(await isUserExisting(req.params.userId)) {
            let user = await db.one("DELETE FROM users WHERE id =$1 RETURNING *", req.params.userId);
            res.status(200).json({
                user,
                status: "Success",
                message: "Deleted User"
    
            })
        } else {
            res.json({
                status: "error",
                error: "No user found by that ID"
            })
        }
        
    } catch(err){
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    try {
        let {betHistory} = req.body;
        let {userId} = req.params;
        if(await isUserExisting(userId)) {
            let updatedUser = await db.one("UPDATE users SET bet_history=$1 WHERE id=$2", [betHistory, userId]);
            res.json({
                status: "success",
                message: "update user",
                updatedUser
            })
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { getUsers, getUser, createUser, deleteUser, updateUser }