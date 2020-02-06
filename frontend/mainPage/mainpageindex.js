document.addEventListener("DOMContentLoaded", () => {
  sessionStorage.clear();
  let signUpForm = document.querySelector("#signUp");
  let logInForm = document.querySelector("#logIn");
  let userNameSU = document.querySelector("#userNameSU");
  let emailSU = document.querySelector("#emailSU");
  let passwordSU = document.querySelector("#passwordSU");
  let phoneNumberSU = document.querySelector("#phoneNumberSU");
  let submitSU = document.querySelector("#submitSU");
  let errorSU = document.querySelector("#errorSU");
  let emailLI = document.querySelector("#emailLI");
  let passwordLI = document.querySelector("#passwordLI");
  let signInLI = document.querySelector("#signInLI");

  //sign up form that creates user on Sign Up click
  signUpForm.addEventListener("submit", async e => {
    e.preventDefault();
    try {
      let res = await axios.post(`http://localhost:3000/users`, {
        user_name: userNameSU.value,
        email: emailSU.value,
        password: passwordSU.value,
        phone_number: phoneNumberSU.value
      });
      sessionStorage.setItem("currentUser", res.data.user.id);
      sessionStorage.setItem("currentUserName", res.data.user.user_name);
      window.location.href = "../FEEDPAGE/feedpageindex.html";
    } catch (err) {
      if (err.response.data.detail === "Key (user_name)=(1) already exists.") {
        errorSU.innerText = "User Name Already In Use";
      } else if (
        err.response.data.detail === "Key (email)=(2@gmail.com) already exists."
      ) {
        errorSU.innerText = "Email Already In Use";
      } else {
        errorSU.innerText = "Phone Already In Use";
      }
      console.log(err);
    }
  });

  logInForm.addEventListener("submit", async e => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3000/users/login", {
        email: emailLI.value,
        password: passwordLI.value
      });
      sessionStorage.setItem("currentUser", res.data.user.id);
      sessionStorage.setItem("currentUserName", res.data.user.user_name);
      window.location.href = "../FEEDPAGE/feedpageindex.html";
    } catch (err) {
      console.log(err);
    }
  });
});
