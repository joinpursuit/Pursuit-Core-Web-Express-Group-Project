document.addEventListener("DOMContentLoaded", () => {
    // grabbing form
    let form = document.querySelector("form");

    // grabbing input variables for the first half of the form
    let firstName = document.querySelector("#firstName");
    let lastName =  document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let userName = document.querySelector("#userName");
    let passWord = document.querySelector("#passWord")
    let passWordConfirm = document.querySelector("#passWordConfirm")
    let dob = document.querySelector("#dob")

    // grabbing checkbox variables for the second half of the form
    let gender = document.querySelector("select")
    let orientationStraight = document.querySelector("#orientation1")
    let orientationGay = document.querySelector("#orientation2")

    let haveKidsYes = document.querySelector("#yes1")
    let haveKidsNo = document.querySelector("#no1")
    let wantKidsYes = document.querySelector("#yes2")
    let wantKidsNo = document.querySelector("#no2")
    let drinkYes = document.querySelector("#yes3")
    let drinkNo = document.querySelector("#no3")
    let smokeYes = document.querySelector("#yes4")
    let smokeNo = document.querySelector("#no4")
    let longTermYes = document.querySelector("#yes5")
    let longTermNo = document.querySelector("#no5")

    form.addEventListener("submit", async(e) => {
        e.preventDefault()
        try {
            let data = await axios.post("http://localhost:3000/users", {firstName: firstName.value, lastName: lastName.value, email: email.value, password: passWord.value, userName: userName.value, dob: dob.value, }).then((res) => {
                debugger
            })
        } catch (error) {
            
        }
    })

})