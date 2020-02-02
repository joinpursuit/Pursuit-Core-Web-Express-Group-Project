const userLogins = require("express").Router({mergeParams: true});

let {getUserLogin} = require("./../../../queries/users/userLogins/userLogins");

userLogins.get("/", getUserLogin);

module.exports = userLogins;