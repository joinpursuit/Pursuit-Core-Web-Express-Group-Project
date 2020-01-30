const pgp = require("pg-promise")({});
const dataBase = pgp("postgress://localhost:5432/schema")


module.exports = dataBase;
