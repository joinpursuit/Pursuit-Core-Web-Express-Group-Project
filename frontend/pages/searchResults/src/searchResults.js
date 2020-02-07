let userQuery = "v";
let search = document.querySelector("#search");
let searchForm = document.querySelector("#searchForm");
let searchResponse = document.querySelector("#searchResponse");

const fetchData = async (url, cb) => {
    try {
        let res = await axios.get(url);
        cb(res.data);
    } catch (err) {
        if(err.response) cb(err.response.data);
        console.log(err);
    }
} // End of fetchData() function

const findUser = (data) => {
    searchResponse.innerHTML = "";
    if(data.error) {
        let error = document.createElement("error");
        error.innerText = data.error;
        error.id = "error";
        searchResponse.appendChild(error);
    }
} // End of findUser() function

fetchData(`http://localhost:3000/users?search=${userQuery}`, findUser);