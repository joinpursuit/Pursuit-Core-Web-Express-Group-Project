// Get all users
const db = require ("../db/index.js")

const getAllUsers = async(res, req, next) =>{
    try{
        let users = await db.any("SELECT * FROM users")
        res.status(200).json({
            status:"Success",
            message: "Got All Users",
            body: users
        })

    }catch(err){
        next(err)
    }
}
//getAllUsers()

// Get single users

const getSingleUsers = async(res, req, next) =>{
    try{
        let user = await db.one("SELECT * FROM users WHERE id = $1", req.params.id)
        res.status(200).json({
            status:"success",
            message: "Got Single User",
            body: user
        })

    } catch(err){
        next(err)
    }
}

//Add single user

const addSingleUser = async(res, req, next)=>{
    try{
        let newUser = await db.one("INSERT INTO users(full_name, email, date_of_birth, gender, profile_pic, join_date) VALUES (${full_name}, ${email}, ${date_of_birth}, ${gender}, ${profile_pic}, ${join_date})", req.body)
        res.status(200).json({
            status:"success",
            message: "Added User",
            body: newUser
        })

    }catch(err){
        next(err)
    }
}

// Delete Single User

const deleteSingleUser = async(res, req, next)=>{
    try{
        let deleteUser = await db.none("DELETE * FROM USERS WHERE id = $1", req.params.id);
        res.status(200).json({
            status:"Success",
            message:"User deleted",
            body: deleteSingleUser
        })
    }catch(err){
        next(err)
    }
}

module.exports = {getAllUsers, getSingleUsers, addSingleUser, deleteSingleUser};