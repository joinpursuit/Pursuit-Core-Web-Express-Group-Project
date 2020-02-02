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
        await db.none('INSERT INTO users (name, age) VALUES (${name},${age}) RETURNING *', req.body)  // make a new id????
        res.status(200).json({
            status:'success',
            message:'new user created'
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
            message:'user deleted'
        })
    }catch(err){
        next(err)
    }
}

module.exports = {getUsers, getUser, createUser, deleteUser}