const db = require ("../db/index.js")

const getAllUsers = async (req, res, next) =>{
    try{
        if (await db.any("SELECT * FROM users")) {

            let users = await db.any("SELECT * FROM users")
            res.status(200).json({
                status:"Success",
                message: "Got All Users",
                body: users
            })
        } else {
            throw {status: 404, error: "There are no existing users."}
        }

    }catch(err){
        next(err)
    }
}

const getSingleUser = async (req, res, next) =>{
    try{
        if (await db.one("SELECT * FROM users WHERE id = $1", [req.params.id])){

            let user = await db.one("SELECT * FROM users WHERE id =$1", [req.params.id])
            res.status(200).json({
                status:"success",
                message: "Got Single User",
                body: user
            })
        } else {
            throw {status: 404, error: "The target user does not exist."}
        }

    } catch(err){
        next(err)
    }
}

const addSingleUser = async(req, res, next)=>{
    try{
        let newUser = await db.one("INSERT INTO users(full_name, email, date_of_birth, gender, profile_pic) VALUES (${full_name}, ${email}, ${date_of_birth}, ${gender}, ${profile_pic}) RETURNING *", req.body)
        res.status(200).json({
            status:"success",
            message: "Added User",
            body: newUser
        })

    }catch(err){
        next(err)
    }
}

const deleteSingleUser = async(req, res, next)=>{
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

module.exports = {getAllUsers, getSingleUser, addSingleUser, deleteSingleUser};