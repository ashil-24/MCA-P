const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const password2 = document.getElementById("pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    // show error
    setErrorFor(username, "username cannot be blank");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    // show error
    setErrorFor(email, "email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    // show error
    setErrorFor(password, "password cannot be blank");
  } else {
    setSuccessFor(password);
  }
  if (password2Value === "") {
    // show error
    setErrorFor(password2, "password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "password dose not match");
  } else {
    setSuccessFor(password2);
  }
}
function setErrorFor(input, message) {
  const xfom = input.parentElement; // xfom
  const small = xfom.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  xfom.className = "xfom error";
}

function setSuccessFor(input) {
  const xfom = input.parentElement;
  xfom.className = "xfom success";
}

function isEmail(email) {
  return /^/.test(email);
}
