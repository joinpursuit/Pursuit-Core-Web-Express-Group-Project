let upcomingGames = document.querySelector(".upcomingGames");
let gameSelect = document.querySelector("#betGame");
let teamSelect = document.querySelector("#betTeam");
let betForm = document.querySelector("#betForm");
let games = {};

const fetchData = async (url, cb) => {
    try {
        let res = await axios.get(url);
        cb(res.data);
    } catch(err) {
        console.log(err)
    }
} // End of fetchData() function

const createUpcomingElement = (event) => {
    let option = document.createElement("option");
    let section = document.createElement("section");
    option.innerText = `${event.teams[0].name} VS. ${event.teams[1].name}`;
    option.value = event.event_id;
    let h3 = document.createElement("h3");
    h3.innerText = `${event.teams[0].name} VS. ${event.teams[1].name}`;
    section.appendChild(h3);
    upcomingGames.appendChild(section);
    games[event.event_id] = event.teams;
    gameSelect.appendChild(option);
} // End of createUpcomingElement() function

const getUpcomingGames = (data) => {
    let events = data.data.events;
    events.forEach(event => {
        createUpcomingElement(event);
    })

} // End of getUpcomingGames() function

fetchData("http://localhost:3000/sports/4/events", getUpcomingGames);

gameSelect.addEventListener("change", (e) => {
    teamSelect.innerHTML = "<option value='disabled' selected disabled>Select a Team</option>"
    let teams = games[e.target.value];
    teams.forEach(team => {
        let option = document.createElement("option");
        option.innerText = team.name;
        option.value = team.team_id;
        teamSelect.appendChild(option);
    })
})

