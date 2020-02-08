const db = require("./../../db/db")

const isBetExisting = async (betId) => {
    try {
        let bet = await db.any("SELECT * FROM bets WHERE id=$1", betId);
        if(bet.length) {
            return true;
        } else {
            return false;
        }
    } catch(err) {
        console.log(err);
    }
}

const getBets = async (req, res, next) => {
    try {
        let bets = await db.any("SELECT * FROM bets INNER JOIN users ON bets.better_id=users.id");
        if(bets.length) {
            res.status(200).json({
                bets,
                status: "success",
                message: "Grabbed all bets"
            })
        } else {
            throw {status: 404, error: "No bets found"}
        }
        
    } catch (err) {
        next(err)
    }
}

const getBetsById = async (req,res,next) => {
    let {betId} = req.params
    try{ 
        if(await isBetExisting(betId)) {
            let bet = await db.one("SELECT * FROM bets INNER JOIN users ON bets.better_id=users.id WHERE bets.id=$1", betId);
            res.status(200).json({
                bet,
                status: "sucess",
                message: "Grabbed bet by ID"
            })
        } else {
            throw {status: 404, error: "Bet doesn't exist"}
        }
        
    } catch(err) {
        next(err)
    }
}

const getBetsNoTaker = async (req,res,next) => {
    try {
        let bets = await db.any("SELECT * FROM users JOIN bets ON users.id=bets.better_id WHERE taker_id IS NULL");
        if(bets.length) {
            res.status(200).json({
                bets, 
                status: "sucess",
                message: "Grabbed bets with no taker"
            })
        } else {
            throw {status: 404, error: "No bets found"}
        }
        
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
        let {taker_id} = req.body;
        let {betId} = req.params;
        if(await isBetExisting(betId)) {
            let updateBet = await db.one("UPDATE bets SET taker_id=$1 WHERE id=$2 RETURNING *", [taker_id, betId]);
            res.status(200).json({
                updateBet,
                status:"Sucess",
                message: "Updated bet"
            })
        } else {
            throw {status: 404, error: "Bet doesn't exist"}
        }
        
    } catch(err) {
        next(err)
    }
}

const deleteBet = async (req,res,next) => {
    try{
        let {betId} = req.params;
        if(await isBetExisting(betId)) {
            let eraseBet = await db.one("DELETE FROM bets WHERE id=$1 RETURNING *", betId);
            res.status(200).json({
                eraseBet,
                status: "Sucess",
                message: "Deleted Bet"
            })
        } else {
            throw {status: 404, error: "Bet doesn't exist"}
        }
    } catch(err){
        next(err)
    }
}

module.exports = {getBets, getBetsById, postBets, getBetsNoTaker, patchBets, deleteBet}