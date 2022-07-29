document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const CreateAccountForm = document.querySelector("#CreateAccount");

  document.querySelector("#LinkCreateAccount").addEventListener("click", () => {
    e.preventDefault();
    loginForm.classList.add("form--hidden");
    CreateAccountForm.classList.remove("form-hidden");
  });
  document.querySelector("#LinkLogin").addEventListener("click", () => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    CreateAccountForm.classList.add("form-hidden");
  });
});