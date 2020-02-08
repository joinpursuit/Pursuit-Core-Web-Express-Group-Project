const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

const betsRouter = require("./routes/bets/bets");
const postsRouter = require("./routes/posts/posts");
const sportsRouter = require("./routes/sports/sports");
const usersRouter = require("./routes/users/users");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use("/bets", betsRouter);
app.use("/posts", postsRouter);
app.use("/sports", sportsRouter);
app.use("/users", usersRouter);

app.get("/events", (req,res) => {
    res.json({
        "event_id": "2c0a565cbda38791e8b42e5fb7a53d21",
        "sport_id": 4,
        "event_date": "2020-02-08T03:35:00Z",
        "rotation_number_away": 525,
        "rotation_number_home": 526,
        "teams": [
            {
                "team_id": 6279,
                "team_normalized_id": 19,
                "name": "Portland Trail Blazers",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 6439,
                "team_normalized_id": 20,
                "name": "Utah Jazz",
                "is_away": false,
                "is_home": true
            }
        ],
        "teams_normalized": [
            {
                "team_id": 19,
                "name": "Portland",
                "mascot": "Trailblazers",
                "abbreviation": "POR",
                "ranking": 0,
                "record": "24-28",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 20,
                "name": "Utah",
                "mascot": "Jazz",
                "abbreviation": "UTAH",
                "ranking": 0,
                "record": "32-18",
                "is_away": false,
                "is_home": true
            }
        ]
   }, {
        "event_id": "2ea2890d5a50a9caefe8c86982df5ac6",
        "sport_id": 4,
        "event_date": "2020-02-09T00:35:00Z",
        "rotation_number_away": 535,
        "rotation_number_home": 536,
        "teams": [
            {
                "team_id": 7044,
                "team_normalized_id": 2,
                "name": "Brooklyn Nets",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 6278,
                "team_normalized_id": 5,
                "name": "Toronto Raptors",
                "is_away": false,
                "is_home": true
            }
        ],
        "teams_normalized": [
            {
                "team_id": 2,
                "name": "Brooklyn",
                "mascot": "Nets",
                "abbreviation": "BKN",
                "ranking": 0,
                "record": "23-27",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 5,
                "name": "Toronto",
                "mascot": "Raptors",
                "abbreviation": "TOR",
                "ranking": 0,
                "record": "37-14",
                "is_away": false,
                "is_home": true
            }
        ]
  },
{
        "event_id": "39e1a794a9a9fbe5845ed5c37624f910",
        "sport_id": 4,
        "event_date": "2020-02-08T02:05:00Z",
        "rotation_number_away": 521,
        "rotation_number_home": 522,
        "teams": [
            {
                "team_id": 7126,
                "team_normalized_id": 27,
                "name": "Houston Rockets",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 6438,
                "team_normalized_id": 24,
                "name": "Phoenix Suns",
                "is_away": false,
                "is_home": true
            }
        ],
        "teams_normalized": [
            {
                "team_id": 27,
                "name": "Houston",
                "mascot": "Rockets",
                "abbreviation": "HOU",
                "ranking": 0,
                "record": "33-18",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 24,
                "name": "Phoenix",
                "mascot": "Suns",
                "abbreviation": "PHX",
                "ranking": 0,
                "record": "20-31",
                "is_away": false,
                "is_home": true
            }
        ]
 }, 
{
        "event_id": "4f77b2d91bafc5ee94ecf1f44ef44cc4",
        "sport_id": 4,
        "event_date": "2020-02-08T22:05:00Z",
        "rotation_number_away": 527,
        "rotation_number_home": 528,
        "teams": [
            {
                "team_id": 6408,
                "team_normalized_id": 10,
                "name": "Milwaukee Bucks",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 6758,
                "team_normalized_id": 14,
                "name": "Orlando Magic",
                "is_away": false,
                "is_home": true
            }
        ],
        "teams_normalized": [
            {
                "team_id": 10,
                "name": "Milwaukee",
                "mascot": "Bucks",
                "abbreviation": "MIL",
                "ranking": 0,
                "record": "44-7",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 14,
                "name": "Orlando",
                "mascot": "Magic",
                "abbreviation": "ORL",
                "ranking": 0,
                "record": "22-30",
                "is_away": false,
                "is_home": true
            }
        ]
 }, 
{
        "event_id": "daba67a5b3f7d9ee8489ddf30aca84be",
        "sport_id": 4,
        "event_date": "2020-02-08T03:05:00Z",
        "rotation_number_away": 523,
        "rotation_number_home": 524,
        "teams": [
            {
                "team_id": 6757,
                "team_normalized_id": 13,
                "name": "Miami Heat",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 6434,
                "team_normalized_id": 25,
                "name": "Sacramento Kings",
                "is_away": false,
                "is_home": true
            }
        ],
        "teams_normalized": [
            {
                "team_id": 13,
                "name": "Miami",
                "mascot": "Heat",
                "abbreviation": "MIA",
                "ranking": 0,
                "record": "34-16",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 25,
                "name": "Sacramento",
                "mascot": "Kings",
                "abbreviation": "SAC",
                "ranking": 0,
                "record": "19-31",
                "is_away": false,
                "is_home": true
            }
        ]
 }, 
{
        "event_id": "f19114a64bf6154e91b66355152613cf",
        "sport_id": 4,
        "event_date": "2020-02-09T03:05:00Z",
        "rotation_number_away": 543,
        "rotation_number_home": 544,
        "teams": [
            {
                "team_id": 6435,
                "team_normalized_id": 30,
                "name": "San Antonio Spurs",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 6434,
                "team_normalized_id": 25,
                "name": "Sacramento Kings",
                "is_away": false,
                "is_home": true
            }
        ],
        "teams_normalized": [
            {
                "team_id": 30,
                "name": "San Antonio",
                "mascot": "Spurs",
                "abbreviation": "SA",
                "ranking": 0,
                "record": "22-29",
                "is_away": true,
                "is_home": false
            },
            {
                "team_id": 25,
                "name": "Sacramento",
                "mascot": "Kings",
                "abbreviation": "SAC",
                "ranking": 0,
                "record": "19-31",
                "is_away": false,
                "is_home": true
            }
        ]
    })
})

app.use((err, req, res, next) => {
    if(err.status) res.status(err.status).json(err);
    else res.json(err);
})

app.get("*", (req, res) => {
    res.json({error: "no route found"})
})

app.listen(port, () => console.log("Listening on port ", port));