document.addEventListener("DOMContentLoaded", () => {
    console.log("client side content loaded");

    let registerButton = document.getElementById("registerButton");
    let changeInvoiceButton = document.getElementById("changeInvoiceButton");
    let searchInvoicesButton = document.getElementById("searchInvoicesButton");
    let newInvoiceButton = document.getElementById("newInvoiceButton");

    registerButton.addEventListener('click', () => {
        window.location.href = "/views/signIn"
    })

    changeInvoiceButton.addEventListener('click', () => {
        window.location.href = "/views/changeInvoice"
    })

    newInvoiceButton.addEventListener('click', () => {
        window.location.href = "/views/newInvoice"
    })

    searchInvoicesButton.addEventListener('click', () => {
        window.location.href = "/views/searchInvoices"
    })
})