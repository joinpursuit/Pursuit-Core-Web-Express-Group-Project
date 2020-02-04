const db = require("./../../db/db")

const getBets = async (req, res, next) => {
    try {
        let bets = await db.any("SELECT * FROM bets INNER JOIN users ON bets.better_id=users.id");
        res.status(200).json({
            bets,
            status: "success",
            message: "Grabbed all bets"
        })
    } catch (err) {
        next(err)
    }
}

const getBetsById = async (req,res,next) => {
    let {betId} = req.params
    try{ 
        let bet = await db.any("SELECT from bets WHERE id=$1 INNER JOIN users ON bets.better_id=users.id", betId);
        res.status(200).json({
            bet,
            status: "sucess",
            message: "Grabbed bet by ID"
        })
    } catch(err) {
        next(err)
    }
}

const getBetsNoTaker = async (req,res,next) => {
    try {
        let bets = await db.any("SELECT * FROM bets INNER JOIN users ON bets.better_id=users.id WHERE taker_id IS NULL");
        res.status(200).json({
            bets, 
            status: "sucess",
            message: "Grabbed bets with no taker"
        })
    } catch(err){
        next(err)
    }
}

const postBets = async (req,res,next) => {
    try{
        let bet = await db.one("INSERT INTO bets (game_id, team_id, better_id, bet_amount) VALUES (${game_id}, ${team_id}, ${better_id}, ${bet_amount}) RETURNING *", req.body);
        res.status(200).json({
            bet,
            status: "sucess",
            message: "Created bet"
        })
      } catch(err){
        next(err)
    }
}

const patchBets = async (req,res,next) => {
    try{
        let {takerId} = req.body;
        let updateBet = await db.one("UPDATE bets SET taker_id=$1 RETURNING *",takerId);
        res.status(200).json({
            updateBet,
            status:"Sucess",
            message: "Updated bet"
        })
    } catch(err) {
        next(err)
    }
}

const deleteBet = async (req,res,next) => {
    try{
        let {deleteBetPosted} = req.params;
        let eraseBet = await db.one("DELETE bets WHERE bet_id RETURNING *", deleteBetPosted);
        res.status(200).json({
            eraseBet,
            status: "Sucess",
            message: "Deleted Bet"
        })

    } catch(err){
        next(err)
    }
}

module.exports = {getBets, getBetsById, postBets, getBetsNoTaker, patchBets, deleteBet}