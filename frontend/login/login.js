document.addEventListener("DOMContentLoaded", () => {
  let loginForm = document.querySelector(".loginForm");
  let userName = document.querySelector("#userLoginInput").value;
  
  
  let password = document.querySelector("#loginPasswordInput");
  let inputPassword = password.value;

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
      try {
        let res = await axios.get(`http://localhost:3000/users`)
         
        res.data.users.forEach(user => {
          
          if(userName === user.username || inputPassword === user.password) {
           window.location.pathname = "Users/bsihame/Desktop/groupProject/Pursuit-Core-Web-Express-Group-Project/frontend/activeUser/activeUser.html"
          } else {
            debugger
          }
        
        })
      } catch (err) {
        console.log(err)
      }
    }
  )
})