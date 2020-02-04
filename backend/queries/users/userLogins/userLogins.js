const db = require("./../../../db/db");
const {isUserExisting} = require("./../users");

const getUserLogin = async (req, res, next) => {
    try {
        let {userId} = req.params;
        let {email, password} = req.body;
        if(await isUserExisting(userId)) {
            let user = await db.one("SELECT * FROM users WHERE id=$1", [userId]);
            if(user.email === email && user.password === password) {
                res.json({
                    user,
                    status: "Success",
                    message: "logged in"
                })
            } else {
                throw {status: 404, error: "Email/Password is incorrect"}
            }
        } else {
            throw {status: 404, error: "User does not exist"}
        }
        
    } catch(err){
        next(err)
    }
}


module.exports = { getUserLogin }