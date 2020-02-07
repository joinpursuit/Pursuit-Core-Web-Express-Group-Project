let userQuery = "i";
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

const findUserId = () => {
    debugger;
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
            li.innerHTML = `<a class="users" id=${user.id} href="./../userProfile/userProfile.html">${user.full_name}</a>`
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