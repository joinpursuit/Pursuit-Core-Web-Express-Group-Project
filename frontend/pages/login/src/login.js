let login = document.querySelector("#login");
let signUp = document.querySelector("#signUp");
let logInForm = document.querySelector("#logInForm");
let formSignIn = document.querySelector("#signInForm");
let logo = document.querySelector("#logo");
let loginH1 = document.querySelector("#loginH1")
let signInh1 = document.querySelector("#signInh1")
let main = document.querySelector("main");
let buttons = document.querySelector("#buttons")

const showLogin = () => {
    loginH1.innerText = "Welcome Back";
    buttons.style.display = "none";
    signIn.style.display = "none";
    login.style.display = "inline";
}

const showSignUp = () => {
    signInh1.innerText = "Be part of the action !";
    buttons.style.display = "none";
    login.style.display = "none";
    signIn.style.display = "inline";
}

logInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let loginEmail = document.querySelector("#loginEmail");
    let loginPass = document.querySelector("#loginPass");
    if(!loginEmail.value || !loginPass.value) {
        loginH1.innerText = "Please fill out all the information";
        loginH1.style.color = "#940E06";
    } else {
        fetchData(`http://localhost:3000/users/logins?email=${loginEmail.value}&password=${loginPass.value}`, checkLogin);
    }
})

const checkLogin = (data) => {
    debugger;
}

const fetchData = async (url, callback) => {
    try {
        let res = await axios.get(url);
        debugger;
        callback(res.data);
    } catch(err) {
        console.log(err);
    }
}
