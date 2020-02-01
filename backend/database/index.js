const pgp = require("pg-promise")({});
const dataBase = pgp("postgress://localhost:5432/lunch_buddies_db")


module.exports = dataBase;
