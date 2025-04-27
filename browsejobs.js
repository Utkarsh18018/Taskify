// Load job cards from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const jobCardsContainer = document.getElementById('jobCards');

    // Get jobs from localStorage
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Clear existing content
    jobCardsContainer.innerHTML = '';

    // Populate job cards dynamically
    jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';

        card.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Skills:</strong> ${job.skills}</p>
            <button class="apply-btn">Apply Now</button>
        `;

        jobCardsContainer.appendChild(card);
    });
});
