const pgp = require('pg-promise')({})
const db = pgp('postgress://localhost:5432/git_me')

module.exports = db;