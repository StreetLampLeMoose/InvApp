document.addEventListener('DOMContentLoaded', () => {
    console.log("client side content loaded")
    const signInButton = document.getElementById('signInButton');
    let homeButton = document.getElementById("home");
    homeButton.addEventListener('click', () => {
        window.location.href = "/views/index"
    })
    
    signInButton.addEventListener('click', async () => {
        console.log("sign in button clicked")
        const username = document.getElementById('signInUsername').value;
        const password = document.getElementById('signInpassword').value;
        try {
            const response = await fetch('/signIn',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: username, password: password })   
                }
            )
        } catch (err) {
            console.error('Error during sign in:', err);
            document.getElementById("signInErrorMessage").innerHTML = "Error: User Not Found"
        }

    })
   
})

