document.addEventListener('DOMContentLoaded', () => {
    let changeInvoicesForm = document.getElementById("changeInvoicesForm");  
    let searchInvoicesForm = document.getElementById("searchInvoicesForm");
    let invoiceTable = document.getElementById("invoiceTable");
    let homeButton = document.getElementById("home");
    homeButton.addEventListener('click', () => {
        window.location.href = "/views/index"
    })
    searchInvoicesForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        try{
            let res = await fetch('/searchInvoices',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        invoiceId: invoiceId,
                    })
                })
                if (res.ok) {
                    let data = await res.json();
                    data.forEach((invoice) => {
                        let row = invoiceTable.insertRow(1);
                        let idCell = row.insertCell(0);
                        let titleCell = row.insertCell(1);
                        let descriptionCell = row.insertCell(2);
                        let priceCell = row.insertCell(3);
                        let ownerCell = row.insertCell(4);
                        let requestorCell = row.insertCell(5);
                        idCell.innerHTML = invoice._id;
                        titleCell.innerHTML = invoice.invoiceTitle;
                        descriptionCell.innerHTML = invoice.description;
                        priceCell.innerHTML = invoice.price;
                        ownerCell.innerHTML = invoice.invoiceOwner;
                        requestorCell.innerHTML = invoice.invoiceRequestor;
                })
            }
        }catch(err){
            console.log(err);
        }
    })

    changeInvoicesForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        let invoiceId = document.getElementById('idCell').value;
        let invoiceTitle = document.getElementById('titleCell').value;
        let price = document.getElementById('priceCell').value;
        let invoiceOwner = document.getElementById('ownerCell').value;
        let invoiceRequestor = document.getElementById('requestorCell').value;  
        let invoiceDescription = document.getElementById('descriptionCell').value;
        try {
                var res = await fetch('/changeInvoice',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body:JSON.stringify({
                        invoiceId: invoiceId,
                        invoiceTitle: invoiceTitle,
                        price: price,
                        invoiceOwner: invoiceOwner,
                        invoiceRequestor: invoiceRequestor,
                        invoiceDescription: invoiceDescription
                    })})
        }catch(err){
            console.log(err);
            let responseMessage = document.getElementById("responseMessage");
            let response = "There was an error making the change to the invoice"
            responseMessage.innerHTML = response;
        }
        changeInvoicesForm.reset();

})
})