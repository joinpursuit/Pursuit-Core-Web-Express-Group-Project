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
    loginH1.style.color = "rgba(6,25,31,1)";
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

formSignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    let signUpFirst = document.querySelector("#signUpFirst").value;
    let signUpLast = document.querySelector("#signUpLast").value;
    let signUpBirth = document.querySelector("#signUpBirth").value;
    let signUpEmail = document.querySelector("#signUpEmail").value;
    let signUpCity = document.querySelector("#signUpCity").value;
    let signUpState = document.querySelector("#signUpState").value;
    if(!signUpFirst || !signUpLast || !signUpBirth || !signUpEmail || !signUpCity || !signUpState) {
        signInh1.innerText = "Please fill out all the information";
        loginH1.style.color = "#940E06";
    } else {
        
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
