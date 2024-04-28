document.addEventListener("DOMContentLoaded", () => {
    console.log("client side content loaded");

    registerButton = document.getElementById("registerButton");

    registerButton.addEventListener('click', () => {
        window.location.href = "/views/signIn"
    })
})