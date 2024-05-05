
function handleLogin(){
    console.log("WELCOME");
    const email = document.getElementById("email_input").value
    const password = document.getElementById("password_input").value

    data ={
        email,
        password
    }

    fetch('/api/login',{
        method:'POST',
        body: JSON.stringify(data)
    })
    .then(
        response=>{
            if (!response.ok){
                throw new Error ("Error in Network connection")
            }
            console.log("Welcome to HELL!!!!");
            return response.json()
        }
    )
    .then(responseData =>{
        if (responseData.status === "success"){
            console.log("SUCCESS")
        }
    })
    .catch(err =>{
        showMessage(err)})
    }
