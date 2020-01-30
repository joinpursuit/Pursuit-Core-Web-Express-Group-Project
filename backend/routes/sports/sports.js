const sports = require("express").Router();
const {getAllSports} = require("./../../queries/sports/sports");

sports.get("/", getAllSports);

module.exports = sports;