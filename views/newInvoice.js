document.addEventListener('DOMContentLoaded',() => {
    let newInvoiceForm = document.getElementById("newInvoiceForm");

    newInvoiceForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        let invoiceTitle = document.getElementById('invoiceTitle').value;
        let price = document.getElementById('price').value;
        let invoiceOwner = document.getElementById('invoiceOwner').value;
        let invoiceRequestor = document.getElementById('invoiceRequestor').value;
        let invoiceDescription = document.getElementById('invoiceDescription').value;
        console.log("just before call")
        try{
            var res = await fetch('/newInvoice',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ message: "sending to server" }) 
                })
            console.log(res);
            console.log(res.body.message);
            if (res.ok) {
                document.getElementById("invoiceCreatedMessage").innerHTML = "Invoice Successfully created"
            }
        }catch(err) {
            console.log("there was an error: ", err);
        }

    })
})