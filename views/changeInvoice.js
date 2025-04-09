document.addEventListener('DOMContentLoaded', () => {
    event.preventDefault()
    let changeInvoicesForm = document.getElementById("changeInvoicesForm");  
    let searchInvoicesForm = document.getElementById("searchInvoiceForm");
    let invoiceTable = document.getElementById("invoiceTable");
    searchInvoicesForm.addEventListener('submit', async function (event) {
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
                        row = invoiceTable.insertRow(1);
                        idCell = row.insertCell(0);
                        titleCell = row.insertCell(1);
                        descriptionCell = row.insertCell(2);
                        priceCell = row.insertCell(3);
                        ownerCell = row.insertCell(4);
                        requestorCell = row.insertCell(5);
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
        let invoiceId = document.getElementById('idCell').value;
        let invoiceTitle = document.getElementById('titleCell').value;
        let price = document.getElementById('priceCell').value;
        let invoiceOwner = document.getElementById('ownerCell').value;
        let invoiceRequestor = document.getElementById('requestorCell').value;  
        let invoiceDescription = document.getElementById('descriptionCell').value;
        changeInvoicesForm.reset();
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
                        //this will need to be parsed in the server to get rid of blanks
                    })})
        }catch(err){
            console.log(err);
            let response = "There was an error making the change to the invoice"
            responseMessage.innerHTML = response;
        }

})
})