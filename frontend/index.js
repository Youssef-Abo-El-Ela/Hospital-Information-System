const loginErrorParagraph = document.getElementById('login_error')


const login_button = document.getElementById("login_submit")
if(login_button){
login_button.addEventListener("click" , (event)=>{
    event.preventDefault()
    handleLogin()
})}



function handleLogin(){
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
    }).then (response =>{
        if(!response.ok){
            console.log(response.json)
            loginErrorParagraph.innerText = "Incorrect email or password"
            throw new Error('error in network connection')
        }
        return response.json(data)
    }).then(responseData =>{
                if (responseData.status === "success"){
                    getProfile()
                }else{
                    loginErrorParagraph.innerText = "Incorrect email or password"
                    alert('wronge password')
                }
    })
}










async function getProfile(){
    try{
        const response = await fetch('http://localhost:4000/api/getData', {
            method: 'GET',
            credentials: 'include', 
        }); 
        const responseData = await response.json();
        if (response.ok) {
            const { data } = responseData;
            location.href = '/profile'
            fetch('http://localhost:4000/profile')
            location.href = '/profile'
            const nameField = document.getElementById("profileName").querySelector(".container .col-6 .row .rectangle3-container .text-center .rectangle2-container ");
            nameField.innerText("dummy data")
            
            console.log('User data:', data);
           
          } else {
            console.error('Error:', responseData.msg); 

          }
    }catch (error) {
        console.error('Error fetching data:', error);
      }
}

const toSignUp = document.getElementById('toSignUp')

toSignUp.addEventListener('click' , (event)=>{
    event.preventDefault()
    fetch('http://localhost:4000/api/register')
    .then(() => window.location.href = '/register')
})