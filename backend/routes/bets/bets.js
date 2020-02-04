const bets = require("express").Router();
const {getBets, getBetsById, postBets, getBetsNoTaker, patchBets, deleteBet} = require("./../../queries/bets/bets")

bets.get("/", getBets);
bets.get("/bets/:id", getBetsById);
bets.get("/bets/notaker", getBetsNoTaker);
bets.post("/", postBets);
bets.patch("/bets/:betId", patchBets);
bets.delete("/bets/:betId",deleteBet);


module.exports = bets;