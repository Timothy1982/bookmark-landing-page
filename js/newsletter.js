const emailField = document.getElementById("email");
const emailSubmit = document.getElementById("nlSubmit");
const inputWrap = document.getElementsByClassName("input-wrap");

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

emailSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  inputWrap[0].classList.remove("show");
  if (!validateEmail(emailField.value)) {
    inputWrap[0].classList.add("show");
  }
  emailSubmit.blur();
});
