document.addEventListener("DOMContentLoaded", () => {
    // sessionStorage.clear()
    let signUpbtn = document.querySelector("#signUp");
    let logInBtn = document.querySelector("#alreadyUser");
    let logIn = document.querySelector('#formlogin');
    let cancelBtn = document.querySelector("#cancelBtn");
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let currentUser = sessionStorage.currentUser;
    let currentUsername = sessionStorage.currentUsername;
    
    logInBtn.addEventListener('click', () => {
        document.getElementById("logInForm").style.display = "block";
    })
    
    cancelBtn.addEventListener("click", () => {
        document.getElementById("logInForm").style.display = "none";
    })
    
    signUpbtn.addEventListener("click", () => {
        window.location.href = "../signUp_page/index.html";
    })
    
    const getUserParams = async () => {
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        try {
            
            let res = await axios.post("http://localhost:3000/users/" + username, {username, password });
            let user = res.data.user;
            debugger
            sessionStorage.setItem("currentUser", user.id);
            sessionStorage.setItem("currentUsername", user.username);
            sessionStorage.setItem("currentPassword", user.password);
            window.location.href = "../feedPage/feedPage.html";

        } catch (err) {
            console.log(err);
        }
    }
    logIn.addEventListener("submit", (e) => {
        e.preventDefault();
        getUserParams();
    })

})