let upcomingGames = document.querySelector(".upcomingGames");

const fetchData = async (url, cb) => {
    try {
        let res = await axios.get(url);
        cb(res.data);
    } catch(err) {
        console.log(err)
    }
} // End of fetchData() function