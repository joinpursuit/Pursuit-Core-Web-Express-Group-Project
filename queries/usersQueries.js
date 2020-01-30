const db = require("../db/index.js")

const getAllUsers = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Succcess"
        })
    } catch(error) {
        console.log("error")
    }
}

const getSingleUserById = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}

const insertSingleUsers = async(req, res, next) => {
    try {
        res.status(200).json({
            status: "Success"
        })
    } catch(error) {
        console.log("error")
    }
}

const deleteUsersById = async(req, res, next) => {
    try {
        console.log("DELETE USERS BY ID")
    } catch(error) {
        console.log("error")
    }
}


module.exports = {getAllUsers, getSingleUserById, insertSingleUsers, deleteUsersById};
