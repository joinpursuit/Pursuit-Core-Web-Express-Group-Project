const db = require("./../../../db/db");

const getUserLogin = async (req, res, next) => {
    try {
    let login = db.one("SELECT email, password FROM users WHERE id=$1", req.params);
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