const db = require("./../../../db/db");
const {isUserExisting} = require("./../users");

const getUserLogin = async (req, res, next) => {
    try {
<<<<<<< HEAD
    let {email, password} = req.params
    let login = db.one("SELECT email, password FROM users WHERE email=$1, password=$2", [email, password]);
    res.status(200).json({
        login,
        status: "Success",
        message: "Users Login"
        })
=======
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
        
>>>>>>> c552837cf9e81b4907c56ce1774ac98995fb40d8
    } catch(err){
        next(err)
    }
}


module.exports = { getUserLogin }