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

const getUser = async (req, res, next) => {
    try{
        let user = await db.one("SELECT * FROM users WHERE id = "+ req.params.id)
        res.status(200).json({
            user, 
            status: "success",
            message: "USER"
        })
    } catch (err){
        next(err)
    }
}

const createUser = async (req, res, next) => {
    try{
        await db.none("IINSERT INTO users (firstName, lastName, userName, password, email, dob, gender, orientation) VALUES (${firstName}, ${lastName}, ${userName}, ${password}, ${email}, ${dob}, ${gender}, ${orientation})", req.body)
        res.status(200).json({
            status: "success",
            message: "Success"
        
        })
    } catch (err){
        console.log("not working")
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

module.exports = { getUsers, getUser, createUser, deleteUser }