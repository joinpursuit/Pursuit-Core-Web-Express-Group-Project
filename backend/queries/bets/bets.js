const db = require("./../../db/db")

const getBets = async (req, res, next) => {
    try {
        let bets = await db.any("SELECT * FROM bets INNER JOIN users ON bets.better_id=users.id");
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
        let betToPost = req.body;
        let bet = await db.one("INSERT INTO bets (game_id, team_id, bet_id, bet_amount, taker_id) VALUES (${game_id}, ${team_id}, ${bet_id}, ${bet_amount}, ${taker_id} RETURNING *", betToPost);
        res.status(200).json({
            bet,
            status: "sucess",
            message: "POST BET"
        })
      } catch(err){
        next(err)
    }
}

const patchBets = async (req,res,next) => {
    try{
        let {takerId} = req.body;
        let updateBet = await db.one("UPDATE bets SET taker_id=$1",takerId);
        res.status(200).json({
            updateBet,
            status:"Sucess",
            message: "BET UPDATED"
        })
    } catch(err) {
        next(err)
    }
}

const deleteBet = async (req,res,next) => {
    try{
        let {deleteBetPosted} = req.params;
        let eraseBet = await db.one("DELETE bets WHERE bet_id", deleteBetPosted);
        res.status(200).json({
            eraseBet,
            status: "Sucess",
            message: "BET DELETED"
        })

    } catch(err){
        next(err)
    }
}

module.exports = {getBets, getBetsById, postBets, getBetsNoTaker, patchBets, deleteBet}