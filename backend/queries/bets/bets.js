const db = require("./../../db/db")

const getBets = async (req, res, next) => {
    try {
        let bets = await db.any("SELECT * FROM bets")
        res.status(200).json({
            bets,
            status: "success",
            message: "ALL BETS"
        })
    } catch (err) {
        next(err)
    }
}

const getBetsById = async (req,res,next) => {
    let {betId} = req.params
    try{ 
        let betsById = await db.any("SELECT from bets WHERE id=$1", betId);
        res.status(200).json({
            bets_id,
            status: "sucess",
            message: "ALL BETS BY ID"

        })

    } catch(err) {
        next(err)
    }
}