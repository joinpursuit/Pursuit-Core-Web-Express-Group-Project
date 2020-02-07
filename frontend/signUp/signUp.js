document.addEventListener("DOMContentLoaded",() =>{
    const form = document.querySelector("#signUpForm")
        form.addEventListener("submit",checkUser)
})

const UserAlreadyExist = () => {
    clearAlerts();
    let alertUser = document.querySelector("#alert1");
    alertUser.innerText = "User Already Exist"
    let redirect = document.querySelector("#alert2");
    redirect.innerText = "Click Here To Log In"
    redirect.href = "../login/login.html"
}

const newUser = async () => {
    let firstName = document.querySelector("#firstNameInput").value;
    let lastName = document.querySelector("#lastNameInput").value;
    let userName = document.querySelector("#userNameInput").value;
    let password = document.querySelector("#passwordInput").value;
    let userAge = document.querySelector("#userAge").value;
    let response = await axios.post()
}

//input newUser
//check if user exist
//clear alerts
//enter site
//invalid inputs