// const { response } = require("express")



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
            throw new Error('error in network connection')
        }
        return response.json(data)
    }).then(responseData =>{
                if (responseData.status === "success"){
                    getProfile()
                }       
    })
}













// function handleLogin(){
//     console.log("WELCOME");
//     const email = document.getElementById("email_input").value
//     const password = document.getElementById("password_input").value

//     data ={
//         email,
//         password
//     }

//     fetch('http://localhost:4000/api/login',{
//         method:'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(
//         response=>{
//             if (!response.ok){
//                 console.log(response.json());
//                 throw new Error ("Error in Network connection")
//             }
//             return response.json()
//         }
//     )
//     .then(responseData =>{
//         if (responseData.status === "success"){
//             getProfile()
//         }
//     })
//     .catch(err =>{
//         console.log(err)})
//     }

async function getProfile(){
    try{
        const response = await fetch('http://localhost:4000/api/getData', {
            method: 'GET',
            credentials: 'include', // Include credentials
        }); // Replace '/api/getData' with your actual endpoint URL
        const responseData = await response.json();
        if (response.ok) {
            const { data } = responseData; // Assuming the response contains a 'data' property
            // await fetch('http://localhost:4000/profile')
            location.href = '/profile'
            fetch('http://localhost:4000/profile')
            location.href = '/profile'
            const nameField = document.getElementById("profileName").querySelector(".container .col-6 .row .rectangle3-container .text-center .rectangle2-container ");
            nameField.innerText("dummy data")
            // document.getElementById('profileEmail').innerText()
            // document.getElementById('profilePosts').innerText()
            // let textNode = document.createTextNode("dataText 123456")
            // nameField.appendChild(textNode) 






            console.log('User data:', data);
            // Process the data as needed
          } else {
            console.error('Error:', responseData.msg); // Log error message if status is not successful
          }
    }catch (error) {
        console.error('Error fetching data:', error);
      }
}

function presentPageData(){
    
}