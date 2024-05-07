async function editProfile(){
    try{
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
                instagram_link:instagram
                
    
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
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0]; 
        const editPhotoButton = document.getElementById('editPhoto')
        editPhotoButton.addEventListener('click' , ()=>{
            if (!file) {
                alert('Please select a file.');
                return;
            }
        
            const formData = new FormData();
            formData.append('image', file);
        
            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(imageUrl => {
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Image">`; // Display the uploaded image
            })
        })
        
}catch (error) {
        console.error('Error fetching data:', error);
      }

    }

editProfile();

