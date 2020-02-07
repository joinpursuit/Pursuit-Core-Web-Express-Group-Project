let userQuery = "Is";
let search = document.querySelector("#search");
let searchForm = document.querySelector("#searchForm");

const fetchData = async (url, cb) => {
    try {
        let res = await axios.get(url);
        cb(res.data);
    } catch (err) {
        console.log(err);
    }
} // End of fetchData() function

const findUser = (data) => {

} // End of findUser() function

fetchData(`http://localhost:3000/users?query=${userQuery}`, findUser);