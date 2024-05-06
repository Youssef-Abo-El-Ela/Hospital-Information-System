
const login_button = document.getElementById("login_submit")
login_button.addEventListener("click" , (event)=>{
    event.preventDefault()
    handleLogin()
})

function handleLogin(){
    console.log("WELCOME");
    const email = document.getElementById("email_input").value
    const password = document.getElementById("password_input").value

    data ={
        email,
        password
    }

    fetch('http://localhost:4000/api/login',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(
        response=>{
            if (!response.ok){
                console.log(response.json());
                throw new Error ("Error in Network connection")
            }
            return response.json()
        }
    )
    .then(responseData =>{
        if (responseData.status === "success"){
            getProfile()
        }
    })
    .catch(err =>{
        console.log(err)})
    }

function getProfile(){
    fetch("http://localhost:4000/api/getData" , {
        request:"GET",
        headers:{
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then(
        response=>{
            if (!response.ok){
                console.log(response.json());
                throw new Error ("Error in Network connection")
            }
            return response.json()
        }
    )
    .then(responseData =>{

        console.log(responseData)
    }
    )
}