const axios = require("axios");

const fetchData = async (url) => {
    let config = {
        headers: {
            "x-rapidapi-key": "141c23a7d4msh5ef06f55c75a949p136086jsnd07e585c2813",
        }
    }

    try {
        let res =  await axios.get(url, config);
        return res.data.sports
    } catch(err) {
        console.log(err);
    }
} // End of fetchData() function

const getAllSports = async (req, res) => {
    let response = await fetchData("https://therundown-therundown-v1.p.rapidapi.com/sports");
    res.json({
        status: "success", 
        message: "Retrieved all sports",
        data: response
    })
} // End of getAllSports() function

module.exports = {getAllSports};