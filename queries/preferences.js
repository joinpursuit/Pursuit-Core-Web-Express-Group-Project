const db = require('../db/index');


const getAllPreferences = async (req, res, next) => {
    try{
        let preferences = await  db.any("SELECT * FROM preferences WHERE users_id = " + req.params.user_id)
        res.status(200).json({
            preferences, 
            staus: "success",
            message: "All preferences"
        })

    } catch (err){
        next(err)
    }
}


const createPreference = async (req, res, next) => {
    try{
        await db.none("INSERT INTO preferences (users_id, do_have_child, want_child, drink, smoke_weed, long_term) VALUES (${users_id}, ${do_have_child}, ${ want_child}, ${drink}, ${ smoke_weed}, ${long_term})", req.body)
        res.status(200).json({
            status: "success",
            message: "Success"
        
        })
    } catch (err){
        console.log("not working")
        next(err)
    }
}

const editPreference = async (req, res, next) => {
    try{
        console.log("Im here")
        req.body.user_id = req.params.user_id
        // let user_id = req.params.user_id
        await db.none("UPDATE preferences SET  do_have_child = ${do_have_child}, want_child = ${want_child}, drink = ${drink}, smoke_weed = ${smoke_weed}, long_term = ${long_term} WHERE id = ${user_id}", req.body)
        res.status(200).json({
            status: "success",
            message: "Success"
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { getAllPreferences, createPreference, editPreference }