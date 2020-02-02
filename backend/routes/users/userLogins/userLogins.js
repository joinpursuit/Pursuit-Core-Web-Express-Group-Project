const userLogins = require("express").Router({mergeParams: true});

let {getUserLogin} = require("./../../../queries/users/userLogins/userLogins");

userLogins.get("/logins/:email/:password", getUserLogin);

module.exports = userLogins;