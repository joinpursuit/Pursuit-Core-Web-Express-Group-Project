let userId = sessionStorage.getItem("userId");
if(!userId) userId = 1;
let upcomingGames = document.querySelector(".upcomingGames");
let gameSelect = document.querySelector("#betGame");
let teamSelect = document.querySelector("#betTeam");
let betAmount = document.querySelector("#betAmount");
let betForm = document.querySelector("#betForm");
let betFormResposne = document.querySelector("#betFormResponse");
let betFeed = document.querySelector("#betsFeed");
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
    section.className = "upcomingSection";
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

const populateBetsFeed = (data) => {
    let bets = data.bets;
    bets.forEach(bet => {
        let team = games[bet.game_id][0].team_id === bet.team_id ? games[bet.game_id][0] : games[bet.game_id][1];
        let betSection = document.createElement("section");
        betSection.className = "betSection";
    
        let betInfo = document.createElement("p");
        betInfo.className = "bets";
    
        betInfo.innerHTML = `<b>User</b>: ${bet.username} <b>Game</b>: ${games[bet.game_id][0].name} VS. ${games[bet.game_id][1].name} <b>Team</b>: ${team.name} <b>Amount</b>: ${bet.bet_amount}`;
        betSection.appendChild(betInfo);

        betFeed.appendChild(betSection);
    })
    
} // End of populateBetsFeed() function

let getData = async () => {
    await fetchData("http://localhost:3000/events", getUpcomingGames);
    await fetchData("http://localhost:3000/bets", populateBetsFeed);
} // End of getData() function

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

betForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if(gameSelect.value === "disabled" || teamSelect.value === "disabled" || betAmount.value <= 0 || !betAmount.value) {
        betFormResposne.innerHTML = "";
        let h1 = document.createElement("h1");
        h1.style.color = "Red";
        h1.innerText = "Please fill out all information";
        betFormResposne.appendChild(h1);
    } else {
        try {
            let res = await axios.post("http://localhost:3000/bets", {game_id: gameSelect.value, team_id: teamSelect.value, better_id: userId, bet_amount: betAmount.value});
            betFormResposne.innerHTML = "";
            let h1 = document.createElement("h1");
            h1.innerText = "Created bet!";
            betFormResposne.appendChild(h1);
        } catch(err) {
            console.log(err);
        }
    }
})

getData();