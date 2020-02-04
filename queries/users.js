const db = require("../DATABASE/index.js");

const getUsers = async(req, res, next)  => {
    try{ 
    let users = await db.any('SELECT * FROM users')
    res.status(200).json({
        users, 
        status: 'success!',
        message: 'all users'
    })
    }catch(err){
        next(err)
    }

}
const getUser = async(req, res, next) => {
    try{
        let users = await db.one ( 
            'SELECT * FROM users WHERE id =  $1', req.params.id 
        )
        
        res.status(200).json({
            users,
            status:'successs',
            message:'one user retreived'
        })
    }catch(err) {
        next(err)
    }
}

const createUser = async (req,res, next) => {
    try{
        await db.one('INSERT INTO users (username, password,firstname, lastname, age, profile_pic) VALUES (${username}, ${password}, ${firstname}, ${lastname}, ${age}, ${profile_pic}) RETURNING *', req.body)  
        res.status(200).json({
            status:'success',
            message:username + 'was created'
        })
    }catch(err){
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try{
        await db.none('DELETE FROM users WHERE id = $1', req.params.id)
        res.status(200).json({
            status:'success',
            message: username + 'deleted'
        })
    }catch(err){
        next(err)
    }
}

module.exports = {getUsers, getUser, createUser, deleteUser}