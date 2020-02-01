const usersAlbums = require('express').Router({mergeParams: true})
const { getAlbumsByUser } = require("../../../queries/users")
​
usersPets.get("/", getAlbumsByUser)
​
module.exports = usersAlbums;
