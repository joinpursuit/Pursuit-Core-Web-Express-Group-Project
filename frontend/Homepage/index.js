document.addEventListener("DOMContentLoaded", () => {
    let signUpbtn = document.querySelector("#signUp");
    let logInBtn = document.querySelector("#alreadyUser");
    let logIn = document.querySelector('#logIn');
    let cancelBtn = document.querySelector("#cancelBtn");
   
    logInBtn.addEventListener('click', () => {
        document.getElementById("logInForm").style.display = "block";
    })

    cancelBtn.addEventListener("click", () => {
        document.getElementById("logInForm").style.display = "none";
    })

    signUpbtn.addEventListener("click", () => {
        
    })

    logIn.addEventListener("submit", (e) => {
        e.preventDefault();
        getUserParams()
    })

    const getUserParams = async () => {
        try {
            let res = await axios.get("http://localhost:3000/users");
            res.status(200).json({
                
            })
        } catch (err) {
            console.log(err);
        }
    }

})