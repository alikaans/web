const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("error-message");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "admin") {
        alert("You have successfully logged in.");
    } else {
        alert("Wrong password.");
    }
})