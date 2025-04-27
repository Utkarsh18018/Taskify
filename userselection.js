// document.addEventListener('DOMContentLoaded', () => {
//     const roleButtons = document.querySelectorAll('.role-btn');
//     const formContainer = document.getElementById('form-container');
//     const formTitle = document.getElementById('form-title');

//     roleButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const role = button.getAttribute('data-role');
//             formContainer.classList.remove('hidden');  // Remove 'hidden' class to make it visible
//             formContainer.classList.add('visible');    // Add 'visible' class for animation
            
//             // Update the form title based on the selected role
//             formTitle.textContent = 
//                 role === 'admin' ? 'Admin Login' : 
//                 role === 'worker' ? 'Freelancer Login' : 
//                 'Employer Login';
//         });
//     });
// });


document.getElementById('closebutton').addEventListener('click', () => {
    window.location.href = 'landingpage.html'; // Replace 'index.html' with your homepage URL
});
