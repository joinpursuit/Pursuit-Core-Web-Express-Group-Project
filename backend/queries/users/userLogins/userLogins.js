const db = require("./../../../db/db");

const getUserLogin = async (req, res, next) => {
    try {
    let {email, password} = req.params
    let login = db.one("SELECT email, password FROM users WHERE email=$1, password=$2", [email, password]);
    res.status(200).json({
        login,
        status: "Success",
        message: "Users Login"
        })
    } catch(err){
        next(err)
    }
}


module.exports = { getUserLogin }