
const submit_button = document.getElementById('RegisterSignup')
const login_button = document.getElementById('Registerlogin')

if (submit_button){
    submit_button.addEventListener('click' , (event)=>{
        event.preventDefault()
        const email = document.getElementById("RegisterEmail").value
        const first_name = document.getElementById("firstName").value
        const last_name = document.getElementById("lastName").value
        const password = document.getElementById("RegisterPassword").value
        const phone_number = document.getElementById("RegisterPhone").value
    
        const regesterUser = async () =>{
            try{
                const UserData = {
                    email : email,
                    first_name: first_name,
                    last_name: last_name,
                    password : password,
                    phone_number: phone_number
                };
                const response = await fetch('http://localhost:4000/api/register', {
                    method: 'POST', 
                    headers:  {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(UserData)
                })  
                const responseData = await response.json()
                if(responseData.status = "fail"){
                    alert(responseData.msg)
                }else if(responseData.status = "success"){
                    alert(responseData.msg)
                }
                console.log(responseData)
            }catch(err){
                console.log('Error registring user: ', err)
            }
        }      
        regesterUser()  
    })

}

login_button.addEventListener('click', (event) =>{
    event.preventDefault()
    fetch('http://localhost:4000/api/login')
    .then(() => {
        window.location.href = '/login'
        alert("back too login")
    })
})
