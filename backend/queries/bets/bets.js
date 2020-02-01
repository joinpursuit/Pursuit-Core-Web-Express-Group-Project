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

const getBetsNoTaker = async (req,res,next) => {

    try {
        let {noTaker} = req.params;
        let getBetsNotaker = await db.any("SELECT from bets WHERE taker_id", noTaker);
        res.status(200).json({
            noTaker, 
            status: "sucess",
            message: "BET NOT TAKEN"
        })
    } catch(err){
        next(err)
    }
}

const postBets = async (req,res,next) => {
    try{
        let {postBets} = req.params;
        let postBets = await db.none("INSERT INTO bets (game_id, team_id, bet_id, bet_amount, taker_id) VALUES (${game_id}, ${team_id}, ${bet_id}, ${bet_amount}, ${taker_id} RETURNING *", postBets);
        res.status(200).json({
            postBets,
            status: "sucess",
            message: "POST BET"
        })
      } catch(err){
        next(err)
    }
}

const patchBets = async (req,res,next) => {
    try{
        let {patchBets} = req.params;
        let patchBets = await db.one("INSERT INTO bets WHERE ");
        res.status(200).json({
            patchBets,
            status:"Sucess",
            message: "BET UPDATED"
        })

    } catch(err) {
        next(err)
    }
}