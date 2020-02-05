document.addEventListener("DOMContentLoaded",() =>{

    let firstName = document.querySelector("#firstNameInput")
    let lastName = document.querySelector("#lastNameInput")
    let userName = document.querySelector("#userNameInput")
    let password = document.querySelector("#signUpPasswordInput")
    let userAge = document.querySelector("#userAge")
    let signUpbtn = document.querySelector("#sigUpBtn")
    let signUpForm = document.querySelector("#signUpForm")
    let genders = document.querySelector("#genders")

    signUpForm.addEventListener('submit', async(e) => {
        e.preventDefault()
        // firstName.value 
        // lastName.value
        // userName.value
        // password.value
        // userAge.value 
    await axios.post("http://localhost:3000/users", {firstName:firstName.value},{lastName:lastName.value},{userName:userName.value},{password:password.value},{userAge:userAge.value})
    debugger

    })
    debugger
})