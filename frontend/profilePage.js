
// fetch('http://localhost:4000/api/getData')
// .then(response => {
//     if(!response.ok){
//         const nameField = document.getElementById("profileName")
//         nameField.innerText = "data data"
//         console.log(response)
//     }
// })




async function getProfile(){
    try{
        const response = await fetch('http://localhost:4000/api/getData', {
            method: 'GET',
            credentials: 'include', // Include credentials
        }); // Replace '/api/getData' with your actual endpoint URL
        const responseData = await response.json();
        if (response.ok) {
            const { data } = responseData; // Assuming the response contains a 'data' property
        const nameField = document.getElementById("profileName")
        nameField.innerText = `${data.existingUserDataRow[0].first_name} ${data.existingUserDataRow[0].last_name}`

        const emailField = document.getElementById('profileEmail')
        emailField.innerText = `${data.existingUserDataRow[0].email}`

        const postsNumberField = document.getElementById('profilePosts')
        postsNumberField.innerText = `${data.existingPostsDataRow.length}`

        const twitterField = document.getElementById("linkedIn_label")
        const facebookField = document.getElementById("facebook_label")
        const instagramField = document.getElementById("instagram_label")

        twitterField.innerText = `${data.existingUserDataRow[0].linkedin_link}`
        facebookField.innerText = `${data.existingUserDataRow[0].facebook_link}`
        instagramField.innerText = `${data.existingUserDataRow[0].instagram_link}`
        const bigContainer = document.getElementById("posts_container")
// Assuming bigContainer is already defined
var topPosition = 300; // Initial top position

for (var i = 0; i < data.existingPostsDataRow.length; i++) {
    var newElement = document.createElement("div");

    // Set the class and style attributes
    newElement.className = "rectangle2-container";

    // Set the top position dynamically
    newElement.style.top = topPosition + "px";

    // Set the innerHTML property with the HTML code
    newElement.innerHTML = `<p id="post${i}">${data.existingPostsDataRow[i].post_date}: ${data.existingPostsDataRow[i].post_content}</p>`;

    // Increment the top position for the next element
    topPosition += 70; // You can adjust this value as needed

    // Append the new element to the container
    bigContainer.appendChild(newElement);
}




        console.log(data)
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
getProfile()
const edit_page_button = document.getElementById("editbutton")
if(edit_page_button){

    console.log("editpage")
    edit_page_button.addEventListener("click",(event)=>{


        
        event.preventDefault();
        console.log("hey")
        fetch("http://localhost:4000/edit")
        .then(()=>{
            window.location.href='/edit'

        })
        
    }

)}
