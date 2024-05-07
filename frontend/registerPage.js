
const submit_button = document.getElementById('RegisterSignup')

if (submit_button){
    submit_button.addEventListener('click' , (event)=>{
        event.preventDefault()
        const email = document.getElementById("RegisterEmail").value
        const first_name = document.getElementById("firstName").value
        const last_name = document.getElementById("lastName").value
        const password = document.getElementById("RegisterPassword").value
        const phone_number = document.getElementById("RegisterPhone").value
    
        fetch('http://localhost:4000/api/register' , {
            method : 'POST', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data = {
                email,
                first_name,
                last_name,
                password,
                phone_number
            })
        } )
        .then ((res) =>
        { if (res.ok){
            if (res.status === "success"){
            alert("Registeration done successfully");
            // window.location.href= "/login"
        }
            else{
                console.log(res);
            }
        }
        else {
            alert("Danger")
        }})
        
    })
}