const axios = require("axios");

const fetchData = async (url) => {
    let config = {
        headers: {
            "x-rapidapi-key": "141c23a7d4msh5ef06f55c75a949p136086jsnd07e585c2813",
        }
    }

    try {
        let res =  await axios.get(url, config);
        return res.data
    } catch(err) {
        console.log(err);
    }
} // End of fetchData() function

const getAllSports = async (req, res) => {
    let response = await fetchData("https://therundown-therundown-v1.p.rapidapi.com/sports");
    res.json({
        status: "success", 
        message: "Retrieved all sports",
        data: response.sports
    })
} // End of getAllSports() function

const getSportEvents = async (req, res) => {
    let {sportId} = req.params;
    let response = await fetchData(`https://therundown-therundown-v1.p.rapidapi.com/sports/${sportId}/events`);
    res.json({
        status: "success",
        message: "Retrieved all events for your sport",
        data: response.events
    })
} // End of getSportEvents() function

const getEventById = async (req, res) => {
    let {eventId} = req.params;
    let response = await fetchData(`https://therundown-therundown-v1.p.rapidapi.com/events/${eventId}`)
    res.json({
        status: "success",
        message: "Retrieved the event",
        data: response
    })
} // End of getEventsById() function

module.exports = {getAllSports, getSportEvents, getEventById};