document.addEventListener("DOMContentLoaded", () => {
  let loginForm = document.querySelector(".loginForm");
  let userName = document.querySelector("#userLoginInput").value;
  
  
  let password = document.querySelector("#loginPasswordInput");
  let inputPassword = password.value;

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
      try {
        let res = await axios.get(`http://localhost:3000/users`)
         debugger
        res.data.users.forEach(user => {
          debugger
          if(userName === user.username && inputPassword === user.password) {
           window.location.href = "frontend/activeUser/activeUser.html"
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  )
})