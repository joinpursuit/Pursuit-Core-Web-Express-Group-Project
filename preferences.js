const preferences = require("express").Router();
const { getAllPreferences, createPreference, editPreference } = require("");


preferences.get("/:user_id", getAllPreferences);

preferences.post("/:user_id", createPreference);

preferences.patch("/:user_id/:id", editPreference);


module.exports = preferences;