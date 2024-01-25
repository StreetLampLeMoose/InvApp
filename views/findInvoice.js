document.addEventListener('DOMcontentloaded', () => {
    document.addEventListener("findInvoiceButton", async (event) => {
        event.preventDefault()

        const invoiceNumber = document.getElementById("invoiceId");

        try {
            const response = await fetch('/dummyroute todo'),
                {
                    method: GET,
                    headers: {
                        'content-type': 'application/json',
                    }
                }
            response => {
                const tableBody = document.getElementById("singleInvoiceTable");
                const row = document.createElement('tr');
                row.innerHTML = '<td>${response.invoiceTitle}</td><td>${response.price}</td><td>response.invoiceOwner</td><td>${response.invoiceRequestor}</td><td>${response.status}</td>'
                tableBody.appendChild(row);
                const textArea = document.getElementById("invoiceDescription")
                textArea.innerHTML = '${response.description}'
            }

        }
    })
})