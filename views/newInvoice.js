document.addEventListener('DOMContentLoaded',() => {
    let newInvoiceForm = document.getElementById("newInvoiceForm");

    newInvoiceForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        let invoiceTitle = document.getElementById('invoiceTitle').value;
        let price = document.getElementById('price').value;
        let invoiceOwner = document.getElementById('invoiceOwner').value;
        let invoiceRequestor = document.getElementById('invoiceRequestor').value;
        let invoiceDescription = document.getElementById('invoiceDescription').value;
        newInvoiceForm.reset();
        try{
            var res = await fetch('/newInvoice',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        invoiceTitle: invoiceTitle ,
                        price: price,
                        invoiceOwner: invoiceOwner,
                        invoiceRequestor: invoiceRequestor,
                        invoiceDescription: invoiceDescription

                    }) 
                })
            
            if (res.ok) {
                let data = await res.json()
                document.getElementById("invoiceCreatedMessage").innerHTML = "Invoice Successfully created";
                document.getElementById("invoiceId").innerHTML = "Invoice Id: " + data.invoiceId;
            }
        }catch(err) {
            document.getElementById("invoiceCreatedMessage").innerHTML = "Invoice not created. Error: " + err;
        }
        
    })
        
})