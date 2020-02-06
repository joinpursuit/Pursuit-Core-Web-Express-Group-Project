let usernameInput = document.querySelector("#username");
let passwordInput = document.querySelector("#password");
let bioInput = document.querySelector("#bio");
let propicURL = document.querySelector("#propicURL");

let signUpDiv = document.querySelector("#signUpDiv");
let signUpForm = document.querySelector("#signUpForm");
signUpForm.addEventListener("submit", async e => {
  e.preventDefault();
  signUpDiv.innerHTML = "";
  if (
    !usernameInput.value ||
    !passwordInput.value ||
    !bioInput.value ||
    !propicURL.value
  ) {
    let h2 = document.createElement("h2");
    h2.innerText = "Please enter all required inputs!";
    signUpDiv.appendChild(h2);
  } else {
    createNewUser();
  }
});

const createNewUser = async () => {
  let res = await axios.post("http://localhost:3000/users", {
    username: usernameInput.value,
    password: passwordInput.value,
    bio: bioInput.value,
    propicURL: propicURL.value
  });
  let { status, message } = res.data;
  if (status === "Error") {
    let h2 = document.createElement("h2");
    h2.innerText = message;
    signUpDiv.appendChild(h2);
  } else {
    let h2 = document.createElement("h2");
    h2.innerText = "User successfully created!";
    signUpDiv.appendChild(h2);
    usernameInput.value = "";
    passwordInput.value = "";
    bioInput.value = "";
    propicURL.value = "";
  }
};
