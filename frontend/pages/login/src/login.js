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

login.addEventListener("click" ,() => {
    showLogin();
})

signUp.addEventListener("click", ()=> {
    showSignUp();
})


