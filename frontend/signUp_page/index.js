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
    let gender = document.querySelector("#gender")
    let orientation = document.querySelector("#orientation")

    // preferences
    let haveKidsYes = document.getElementById("yes1")
    let wantKidsYes = document.getElementById("yes2")
    let drinkYes = document.getElementById("yes3")
    let smokeYes = document.getElementById("yes4")
    let longTermYes = document.getElementById("yes5")

    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("http://localhost:3000/users", {firstName: firstName.value, lastName: lastName.value, userName: userName.value, password: passWord.value, email: email.value, dob: dob.value, gender: gender.options[gender.options["selectedIndex"]].value, orientation: orientation.options[orientation.options["selectedIndex"]].value})
            let res2 = await axios.post(`http://localhost:3000/preferences/${res.data.user_id.id}`, {users_id:res.data.user_id.id, do_have_child: haveKidsYes.checked, want_child: wantKidsYes.checked, drink: drinkYes.checked, smoke_weed: smokeYes.checked, long_term: longTermYes.checked})
            
            window.location.href = "../profilePage/profile.html";
        } catch (error) {
            console.log(error)
        }
    })
})