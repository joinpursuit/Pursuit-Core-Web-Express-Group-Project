let login = document.querySelector("#login");
let signUp = document.querySelector("#signUp");
let logInForm = document.querySelector("#logInForm");
let signUpForm = document.querySelector("#signUpForm");
let logo = document.querySelector("#logo");
let loginH1 = document.querySelector("#loginH1")
let signUpH1 = document.querySelector("#signUpH1")
let main = document.querySelector("main");
let buttons = document.querySelector("#buttons")

const showLogin = () => {
    loginH1.innerText = "Welcome Back";
    loginH1.style.color = "rgba(6,25,31,1)";
    buttons.style.display = "none";
    signUp.style.display = "none";
    login.style.display = "inline";
}

const showSignUp = () => {
    signUpH1.innerText = "Be part of the action !";
    buttons.style.display = "none";
    login.style.display = "none";
    signUp.style.display = "inline";
}

logInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let loginUser = document.querySelector("#loginUser");
    let loginPass = document.querySelector("#loginPass");
    if(!loginUser.value || !loginPass.value) {
        loginH1.innerText = "Please fill out all the information";
        loginH1.style.color = "#940E06";
    } else {
        fetchData(`http://localhost:3000/users/logins?username=${loginUser.value}&password=${loginPass.value}`, checkLogin);
    }
})

signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let signUpFirst = document.querySelector("#signUpFirst").value;
    let signUpLast = document.querySelector("#signUpLast").value;
    let signUpBirth = document.querySelector("#signUpBirth").value;
    let signUpCity = document.querySelector("#signUpCity").value;
    let signUpState = document.querySelector("#signUpState").value;
    let signUpUser = document.querySelector("#signUpUser").value;
    let signUpPass = document.querySelector("#signUpPass").value;
    if(!signUpFirst || !signUpLast || !signUpBirth || !signUpUser || !signUpCity || !signUpState || !signUpPass) {
        signUpH1.innerText = "Please fill out all the information";
        loginH1.style.color = "#940E06";
    } else {
        try {
            debugger;
            let user = {
                full_name: signUpFirst + " " + signUpLast, 
                birth_date: signUpBirth,
                city: signUpCity,
                state: signUpState,
                username: signUpUser,
                password: signUpPass 
            }
            let res = await axios.post(`http://localhost:3000/users`, user);
            window.location.href = "./../../index.html";
        } catch(err) {

        }
    }
})

const checkLogin = (data) => {
    sessionStorage.setItem("userId", JSON.stringify(data.user[0].id));
    window.location.href = "./../../index.html";
}

const errorHandling = (err) => {
    if(login.style.display !== "none") {
        loginH1.innerText = err.error;
        loginH1.style.color = "#940E06"
    } else if(signUp.style.display !== "none") {
        signInh1.innerText = err.error;
        signInh1.style.color = "#940E06"
    }
}

const fetchData = async (url, callback) => {
    try {
        let res = await axios.get(url);
        callback(res.data);
    } catch(err) {
        if(err.response) errorHandling(err.response.data)
        else console.log(err);
    }
}
