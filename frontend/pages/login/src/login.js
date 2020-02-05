let login = document.querySelector("#login");
let signUp = document.querySelector("#signUp");
let logInForm = document.querySelector("#logInForm");
let formSignIn = document.querySelector("#signInForm");
let logo = document.querySelector("#logo");
let h1 =document.querySelector("h1")
let main = document.querySelector("main");
let buttons = document.querySelector("#buttons")

const showLogin = () => {
    h1.innerText = "Welcome Back";
    buttons.style.display = "none";
    login.style.display = "inline";
}

const showSignUp = () => {
    h1.innerText = "Be part of the action !";
    buttons.style.display = "none";
    signIn.style.display = "inline";
    
}

login.addEventListener("click" ,() => {
    showLogin();
})

signUp.addEventListener("click", ()=> {
    showSignUp();
})


