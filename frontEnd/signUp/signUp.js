console.log("Hello async is working");

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
  let usernameInput = document.querySelector("#username").value;
  let passwordInput = document.querySelector("#password").value;
  let bioInput = document.querySelector("#bio").value;
  let propicURL = document.querySelector("#propicURL").value;
  let res = await axios.post("http://localhost:3000/users", {
    usernameInput,
    passwordInput,
    bioInput,
    propicURL
  });
  debugger;
};
