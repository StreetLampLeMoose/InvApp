//need to add some responses that put in new HTML elements. i.e. new user created, with id, 
//user name already taken etc.TODO
document.addEventListener('DOMContentLoaded', () => {
    const registerButton = document.getElementById('registrationButton');
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const company = document.getElementById("company");
    registerButton.addEventListener('click', async function (event) {
        event.preventDefault();
        console.log("in registration button handler")
        var usernameValue = username.value;
        var passwordValue = password.value;
        var companyValue = company.value;
        try{
           const response = await fetch('/register',
                {
                method: "POST",
                headers :{
                    'content-type' :'application/json',
                },
                    body: JSON.stringify({
                        username: usernameValue,
                        password: passwordValue,
                        company: companyValue
                    })
               })
            if (!response.ok) {
                throw new error('Registration Failed');
                return
            }
            const data = await response.json();
            console.log("user successfully registered. Token:", data.token);
        }catch(err){
            console.error("There has been an error with registration:", err);
        }
    })
})