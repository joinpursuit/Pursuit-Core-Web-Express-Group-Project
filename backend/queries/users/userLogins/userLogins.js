const db = require("./../../../db/db");
const {isUserExisting} = require("./../users");

const getUserLogin = async (req, res, next) => {
    try {
        let {email, password} = req.query;
        let user = await db.any("SELECT * FROM users WHERE email=$1 AND password=$2", [email, password]);
        if(user.length) {
            res.json({
                user,
                status: "Success",
                message: "logged in"
            })
        } else {
            throw {status: 404, error: "Email/Password is incorrect"}
        }
        
    } catch(err){
        next(err)
    }
}


module.exports = { getUserLogin }