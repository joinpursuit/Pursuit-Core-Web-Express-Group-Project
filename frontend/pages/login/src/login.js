let login = document.querySelector("#logInButton");
let signUp = document.querySelector("#signUp");
let logInForm = document.querySelector("#logInForm");
let formSignIn = document.querySelector("#signInForm");
let logo = document.querySelector("#logo");
let h1 =document.querySelector("h1")
let main = document.querySelector("main");

login.addEventListener("click" ,() => {
    h1.innerText = "Welcome Back";
    main.appendChild(logInForm);

})

signUp.addEventListener("click", ()=> {
    h1.innerText = "Be part of the action !"
    main.appendChild(formSignIn)
    debugger
})


