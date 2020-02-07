let userQuery = "v";
let search = document.querySelector("#search");
let searchForm = document.querySelector("#searchForm");

const fetchData = async (url, cb) => {
    try {
        let res = await axios.get(url);
        cb(res.data);
    } catch (err) {
        if(err.response) cb(err.response);
        console.log(err);
    }
} // End of fetchData() function

const findUser = (data) => {
    debugger;
} // End of findUser() function

fetchData(`http://localhost:3000/users?search=${userQuery}`, findUser);