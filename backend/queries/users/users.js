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
    let {userID} = req.params
    try {
<<<<<<< HEAD
        let user = await db.one("SELECT * FROM users WHERE user_id = $1", userID);
        res.status(200).json({
            user,
            status: "success",
            message: "Retrieved One User"
        })
=======
        let {userId} = req.params
        if(await isUserExisting(userId)) {
            let user = await db.one("SELECT * FROM users WHERE id = $1", userId);
            res.status(200).json({
                user,
                status: "success",
                message: "Retrieved One User"
            })
        } else {
            throw {status: 404, error: "User does not exist"}
        }
        
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8
    }catch(err){
        next(err)
    }
}

const createUser = async (req, res, next) => {
    let {userInfo} = req.body
    try {
<<<<<<< HEAD
        let user = await db.none("INSERT INTO users (full_name, birth_date, city, state, email, password) VALUES (${full_name}, ${birth_date}, ${city}, ${state}, ${email}, ${password}) RETURNING *", userInfo);
=======
        let user = await db.one("INSERT INTO users (full_name, birth_date, city, state, email, password) VALUES (${full_name}, ${birth_date}, ${city}, ${state}, ${email}, ${password}) RETURNING *", req.body);
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8
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
<<<<<<< HEAD
        let {userId} = req.params
        let user = await db.none("DELETE FROM users WHERE user_id =$1", userId);
        res.status(200).json({
            user,
            status: "Success",
            message: "Deleted User"

        })
=======
        if(await isUserExisting(req.params.userId)) {
            let user = await db.one("DELETE FROM users WHERE id =$1 RETURNING *", req.params.userId);
            res.status(200).json({
                user,
                status: "Success",
                message: "Deleted User"
    
            })
        } else {
            throw {status: 404, error: "User does not exist"}
        }
        
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8
    } catch(err){
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    try {
        let {betHistory} = req.body;
        let {userId} = req.params;
        if(await isUserExisting(userId)) {
            let updatedUser = await db.one("UPDATE users SET bet_history=$1 WHERE id=$2 RETURNING *", [betHistory, userId]);
            res.json({
                status: "success",
                message: "update user",
                updatedUser
            })
        } else {
            throw {status: 404, error: "User does not exist"}
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { getUsers, getUser, createUser, deleteUser, updateUser, isUserExisting }