// JavaScript to show thank you message on form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    showThankYouMessage();
});

function showThankYouMessage() {
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Hide form and show thank you message
    form.style.display = "none";
    thankYouMessage.style.display = "block";
}

function resetForm() {
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Reset form and hide thank you message
    form.reset();
    form.style.display = "block";
    thankYouMessage.style.display = "none";
}

document.getElementById('closebutton').addEventListener('click', () => {
    window.location.href = 'landingpage.html'; // Replace 'index.html' with your homepage URL
});
