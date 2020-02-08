const db = require('../db/index');


const getUsers = async (req, res, next) => {
    try{
        let users = await  db.any("SELECT * FROM users")
        res.status(200).json({
            users, 
            staus: "success",
            message: "All users"
        })

    } catch (err){
        next(err)
    }
}

const getSUser = async (req, res, next) => {
    try{
        let users = await  db.any("SELECT * FROM users WHERE id = "+ req.params.id)
        res.status(200).json({
            users, 
            staus: "success",
            message: "All users"
        })

    } catch (err){
        next(err)
    }
}

const getUser = async (req, res, next) => {
    try{
        let user = await db.one("SELECT * FROM users WHERE username = $1", req.body.username);
        if (!user) {
            res.status(404).json({
                message: "User doesn't exist!"
            })
        } else if (user.password !== req.body.password) {
            res.status(401).json({
                message: "Password is incorrect!"
            })
        } else {
            res.status(200).json({
                user, 
                status: "success",
                message: "USER"
            })
        }
    } catch (err){
        next(err)
    }
}

const createUser = async (req, res, next) => {
    try{
        let user_id = await db.one("INSERT INTO users (firstName, lastName, userName, password, email, dob, gender, orientation) VALUES (${firstName}, ${lastName}, ${userName}, ${password}, ${email}, ${dob}, ${gender}, ${orientation}) RETURNING id", req.body)
        res.status(200).json({
            user_id,
            status: "success",
            message: "Success"
        
        })
    } catch (err){
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try{
        console.log("Im here")
        await db.none("DELETE FROM users WHERE id = " +req.params.id)
        res.status(200).json({
            status: "success",
            message: "Success"
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { getUsers, getSUser, getUser, createUser, deleteUser }