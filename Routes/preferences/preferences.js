const preferences = require("express").Router();
const { getAllPreferences, getUserPreferences, createPreference, editPreference } = require("../../queries/preferences");


preferences.get("/:user_id", getAllPreferences);

preferences.get("/:user_id", getUserPreferences);

preferences.post("/:user_id", createPreference);

preferences.put("/:user_id/", editPreference);


module.exports = preferences;