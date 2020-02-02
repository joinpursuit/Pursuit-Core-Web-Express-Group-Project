
let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let logInForm = document.querySelector("#logInForm");
let p = document.querySelector("#message");

logInForm.addEventListener("submit", async e => {
  p.innerHTML = "";
  e.preventDefault();
  let res = await axios.get(
    `http://localhost:3000/users/search/${usernameInput.value}`
  );
  let { body, message } = res.data;
  p.innerText = message;
  if (
    body.user.password === passwordInput.value &&
    body.user.username === usernameInput.value
  ) {
    p.innerText = "Successfully logging in";
    sessionStorage.userID = res.data.body.user.id;
    setTimeout(function() {
      window.location.href = "userFeed.html";
      window.location.href.reload();
    }, 2000);
  } else {
    p.innerText = "Could not log in. Credentials are wrong";
  }
});
