const preferences = require("express").Router();
const { getAllPreferences, createPreference, editPreference } = require("../../queries/preferences");


preferences.get("/:user_id", getAllPreferences);

preferences.post("/:user_id", createPreference);

preferences.put("/:user_id/", editPreference);


module.exports = preferences;