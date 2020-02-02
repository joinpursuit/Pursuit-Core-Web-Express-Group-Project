const userLogins = require("express").Router({mergeParams: true});

// let {getUserLogin} = require(".");

// userLogins.get("/logins/:email/:password", getUserLogin);

module.exports = userLogins;