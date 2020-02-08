const sports = require("express").Router();
const {getAllSports, getSportEvents, getEventById} = require("./../../queries/sports/sports");

sports.get("/", getAllSports);

sports.get("/:sportId/events", getSportEvents);

sports.get("/events/:eventId", getEventById)

module.exports = sports;