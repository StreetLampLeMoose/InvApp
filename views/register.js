document.addEventListener('DOMContentLoaded',() => {
    const registerForm = document.getElementById('registrationForm');

    registerForm.addEventListener('registrationButton', async(event) => {
        event.preventDefault();

        try{
            fetch("/routes/registrationRoute" , {
                method: "POST",
                headers :{
                    'content-type' :'application/json',
                },
                body: JSON.stringify({username,password,company})
            })
        }catch(err){
            console.error("There has been an error with registration:", err);
        }
    })
})