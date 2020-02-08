const dataBase = require("../../database/index.js");

const getAllUsers = async (req, res, next) => {
  let users = await dataBase.any("SELECT * FROM users");
  try {
    res.status(200).json({
      users: users,
      status: "ok"
    });
  } catch (err) {
    next(error);
  }
};

const getUserByid = async (req, res, next) => {
  try {
    let user = await dataBase.one("SELECT * FROM users WHERE id = $1 ", [
      req.params.id
    ]);
    res.status(200).json({
      user,
      status: "ok",
      message: `it's lit`
    });
  } catch (err) {
    next(err);
  }
};

const logInUser = async (req, res, next) => {
  try {
    let user = await dataBase.one(
      `SELECT * FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`
    );
    res.status(200).json({user})
  } catch (err) {
    next(err);
  }
};

const addUser = async (req, res, next) => {
  console.log(req.body);
  try {
    let user = await dataBase.one(
      "INSERT INTO users (user_name,email,password,phone_number) VALUES (${user_name}, ${email},${password},${phone_number}) RETURNING *",
      req.body
    );
    res.status(200).json({
      user: user,
      message: "new user created",
      status: "success"
    });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await dataBase.none("DELETE from users WHERE id = $1", [req.params.id]);
    res.status(200).json({
      status: "ok",
      message: "User Has Been Deleted"
    });
  } catch (err) {
    next(err);
  }
};

const getUserByUsername = async (req, res, next) => {
  try {
    
    let user = await dataBase.any(
      `SELECT * FROM users WHERE user_name LIKE '${req.params.user_name}%'`
    );
    res.status(200).json({
      user,
      status: "ok",
      message: `success`
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllUsers, getUserByid, getUserByUsername, logInUser, addUser, deleteUser };
