let upcomingGames = document.querySelector(".upcomingGames");

const fetchData = async (url, cb) => {
    try {
        let res = await axios.get(url);
        cb(res.data);
    } catch(err) {
        console.log(err)
    }
} // End of fetchData() function

const createUpcomingElement = (event) => {

} // End of createUpcomingElement() function

const getUpcomingGames = (data) => {
    let events = data.data.events;
    events.forEach(event => {
        createUpcomingElement(event);
    })

} // End of getUpcomingGames() function

fetchData("http://localhost:3000/sports/4/events", getUpcomingGames);