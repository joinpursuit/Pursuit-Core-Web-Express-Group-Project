const userLogins = require("express").Router({mergeParams: true});

let {getUserLogin} = require("./../../users/userLogins");

userLogins.get("/logins/:email/:password", getUserLogin);

module.exports = userLogins;