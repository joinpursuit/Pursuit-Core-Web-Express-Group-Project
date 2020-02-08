const bets = require("express").Router();
const {getBets, getBetsById, postBets, getBetsNoTaker, patchBets, deleteBet} = require("./../../queries/bets/bets")

bets.get("/", getBetsNoTaker);
bets.get("/:betId", getBetsById);
bets.get("/noTaker", getBetsNoTaker);
bets.post("/", postBets);
bets.patch("/:betId", patchBets);
bets.delete("/:betId",deleteBet);


module.exports = bets;