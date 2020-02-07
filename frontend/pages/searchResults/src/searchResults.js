let userQuery = sessionStorage.getItem("userQuery")
if(!userQuery) userQuery = "";
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

const findUserId = (e) => {
    let userId = e.target.id;
    sessionStorage.setItem("foreignUser", JSON.stringify(userId));
    window.location.href = "./../userProfile/userProfile.html";
} // End of findUserId() function

const findUser = (data) => {
    searchResponse.innerHTML = "";
    if(data.error) {
        let error = document.createElement("p");
        error.innerText = data.error;
        error.id = "error";
        searchResponse.appendChild(error);
    } else {
        let userList = document.createElement("ul");
        let users = data.users;
        for(let i = 0; i < users.length; i++) {
            if(i === 10) break;
            let user = users[i];
            let li = document.createElement("li");
            li.className = "users";
            li.id = user.id;
            li.innerText = user.full_name;
            userList.appendChild(li);
        }
        searchResponse.appendChild(userList);
        userList.addEventListener("click", findUserId);
    }
} // End of findUser() function

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    userQuery = search.value;
    fetchData(`http://localhost:3000/users?search=${userQuery}`, findUser);
}) // End of searchForm event listener

fetchData(`http://localhost:3000/users?search=${userQuery}`, findUser);