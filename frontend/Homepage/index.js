document.addEventListener("DOMContentLoaded", () => {
    let signUpbtn = document.querySelector("#signUp");
    let logInBtn = document.querySelector("#alreadyUser");
    let logIn = document.querySelector('#formlogin');
    let cancelBtn = document.querySelector("#cancelBtn");
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
    logInBtn.addEventListener('click', () => {
        document.getElementById("logInForm").style.display = "block";
    })
    
    cancelBtn.addEventListener("click", () => {
        document.getElementById("logInForm").style.display = "none";
    })
    
    signUpbtn.addEventListener("click", () => {
        debugger
    })
    
    const getUserParams = async () => {
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        debugger
        try {
            
            let res = await axios.post("http://localhost:3000/users/" + username, {username, password });
            let user = res.data.user;
            
        } catch (err) {
            debugger
            console.log(err);
        }
    }
    logIn.addEventListener("submit", (e) => {
        e.preventDefault();
        getUserParams();
    })

})