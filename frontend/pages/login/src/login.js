let login = document.querySelector("#logInButton");
let signUp = document.querySelector("#signUp");
let logInForm = document.querySelector("#logInForm");
let formSignIn = document.querySelector("#signInForm");
let logo = document.querySelector("#logo");
let h1 =document.querySelector("h1")

login.addEventListener("click" ,() => {
    h1.innertext = "Welcome Back";
    let main = document.querySelector("main");
    main.appendChild(logInForm);

})


