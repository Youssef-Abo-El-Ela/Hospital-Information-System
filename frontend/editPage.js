

async function editProfile(){
    try{
        document.addEventListener('DOMContentLoaded' , async ()=>{
            const response = await fetch("http://localhost:4000/data", {
                method: 'GET'
        })
                const res = await response.json()
                if (response.ok){

                        const data_ = res.data.rows[0]
                        console.log(data_);
                        const first_name = data_.first_name
                        const last_name = data_.last_name
                        const address = data_.address
                        const phone_number = data_.phone_number
                        const facebook_link = data_.facebook_link
                        const instagram_link = data_.instagram_link
                        const linkedin_link = data_.linkedin_link
                        const imageURL = data_.image_url
                        document.getElementById('editFname').value = first_name
                        document.getElementById('editLname').value = last_name
                        document.getElementById('editAddress').value = address
                        document.getElementById('editPhone').value = phone_number
                        document.getElementById('editFacebook').value = facebook_link
                        document.getElementById('editInstagram').value = instagram_link
                        document.getElementById('editLinkedIn').value = linkedin_link
                        document.getElementById('profile-image').src = imageURL
                    }
            })
        



        const Done_button = document.getElementById("done")
        if(Done_button){
        console.log("Done")
        
        Done_button.addEventListener("click",(event)=>{
            event.preventDefault();
            
            const fName=document.getElementById('editFname').value;
            
            const lName=document.getElementById('editLname').value;
            const address=document.getElementById('editAddress').value;
            const phone=document.getElementById('editPhone').value;
            const facebook=document.getElementById('editFacebook').value;
            const instagram=document.getElementById('editInstagram').value;
            const linkedIn=document.getElementById('editLinkedIn').value;
            const imageURL = document.getElementById('profile-image').src

        fetch("http://localhost:4000/api/editUser", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data={
                first_name:fName,
                last_name:lName,
                address:address,
                phone_number:phone,
                facebook_link:facebook,
                linkedin_link: linkedIn,
                instagram_link:instagram,
                image_url:imageURL
            })
        })
        .then(response => {
            if (response.ok) {
                // Handle success
                console.log('Data updated successfully');

                // Redirect to a different page or perform any other action
            } else {
                // Handle error
                console.error('Failed to update data');
            }
        })
        } 
            
        )}
        const editPhotoButton = document.getElementById('editPhoto')
        editPhotoButton.addEventListener('click' , (event)=>{
            event.preventDefault()
            const fileInput = document.getElementById('fileInput');
            console.log(fileInput);
            const file = fileInput.files[0]; 
        
            const formData = new FormData();
            formData.append('image', file);
        
            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(imageUrl => {
            const imageContainer = document.getElementById('profile-image');
            imageContainer.src = imageUrl; // Display the uploaded image
            })
        })
        
}catch (error) {
        console.error('Error fetching data:', error);
    }

    }

editProfile();

const doneBtn = document.getElementById("done")

const back_button=document.getElementById("back")
back_button.addEventListener('click', (event) =>{
    event.preventDefault()
    fetch("http://localhost:4000/profile")
    .then(() =>{
        window.location.href = '/profile'
    })
})