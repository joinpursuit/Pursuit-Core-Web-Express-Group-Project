let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let bioInput = document.querySelector("#bio");
let propicURL = document.querySelector("#propicURL");

let signUpDiv = document.querySelector("#signUpDiv");
let signUpForm = document.querySelector("#signUpForm");
signUpForm.addEventListener("submit", async e => {
  let signUpMessage = document.querySelector("#signUpMessage");
  e.preventDefault();
  signUpMessage.innerHTML = "";
  if (
    !usernameInput.value ||
    !passwordInput.value ||
    !bioInput.value ||
    !propicURL.value
  ) {
    signUpMessage.innerText = "Please enter all required inputs!";
    signUpDiv.appendChild(signUpMessage);

  } else {
    createNewUser(signUpDiv, signUpMessage);
    usernameInput.value = "";
    passwordInput.value = "";
    bioInput.value = "";
    propicURL.value = "";
  }
});

const createNewUser = async (div, statusMessage) => {
  let res = await axios.post("http://localhost:3000/users", {
    username: usernameInput.value,
    password: passwordInput.value,
    bio: bioInput.value,
    propicURL: propicURL.value
  });
  let { status, message } = res.data;
  if (status === "Error") {
    statusMessage.innerText = message;
    div.appendChild(statusMessage);
  } else {
    statusMessage.innerText = message;
    div.appendChild(statusMessage);
  }
};
