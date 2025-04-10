document.addEventListener('DOMContentLoaded', () => {
    let searchInvoicesForm = document.getElementById("searchInvoicesForm");
    let invoiceTable = document.getElementById("invoiceTable")
    let homeButton = document.getElementById("home");
    homeButton.addEventListener('click', () => {
        window.location.href = "/views/index"
    })
    searchInvoicesForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        let invoiceId = document.getElementById("invoiceId").value
        let invoiceTitle = document.getElementById("invoiceTitle").value
        let invoiceOwner = document.getElementById("invoiceOwner").value
        let invoiceRequestor = document.getElementById("invoiceRequestor").value


        try {
            let res = await fetch('/searchInvoices',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        invoiceId: invoiceId,
                        invoiceTitle: invoiceTitle,
                        invoiceOwner: invoiceOwner,
                        invoiceRequestor: invoiceRequestor
                    })
                })

            if (res.ok) {
                let data = await res.json();
                data.forEach((invoice) => {
                    row = invoiceTable.insertRow(1);
                    idCell = row.insertCell(0);
                    titleCell = row.insertCell(1);
                    priceCell = row.insertCell(2);
                    ownerCell = row.insertCell(3);
                    requestorCell = row.insertCell(4);
                    idCell.innerHTML = invoice._id;
                    titleCell.innerHTML = invoice.description;
                    priceCell.innerHTML = invoice.price;
                    ownerCell.innerHTML = invoice.invoiceOwner;
                    requestorCell.innerHTML = invoice.invoiceRequestor;

                })
            }
        } catch (err) {
            console.log(err);
        }
    })
})