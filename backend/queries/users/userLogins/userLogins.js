const db = require("./../../../db/db");
const {isUserExisting} = require("./../users");

const getUserLogin = async (req, res, next) => {
    try {
        let {userId, email, password} = req.params
        if(await isUserExisting(userId)) {
            let login = db.any("SELECT * FROM users WHERE id=$1 AND email=$2 AND password=$3 RETURNING *", [userId, email, password]);
            if(login.length) {
                res.json({
                    login,
                    status: "Success",
                    message: "logged in"
                })
            } else {
                res.status(200).json({
                    status: "error",
                    error: "Email or password is incorrect"
                })
            }
        } else {
            res.json({
                status: "error",
                error: "No user existing by that ID"
            })
        }
        
    } catch(err){
        next(err)
    }
}


module.exports = { getUserLogin }