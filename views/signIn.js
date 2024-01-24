document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('signInForm');
    
    registerForm.addEventListener("signInButton" , async(event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try{
            const response = await fetch ('/routes/signInRoute', 
            {
                method:'POST',
                headers :{
                    'content-type' :'application/json',
                },
                body: JSON.stringify({username,password})
            }
            )
        }catch (err){
            console.error('Error during sign in:', err);
        }
    })
})