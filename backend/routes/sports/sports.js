const sports = require("express").Router();
const {getAllSports, getSportEvents} = require("./../../queries/sports/sports");

sports.get("/", getAllSports);

sports.get("/:sportId/events", getSportEvents);

module.exports = sports;