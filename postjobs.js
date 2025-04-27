document.getElementById('postJobForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get job details from form
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const skills = document.getElementById('skills').value;

    // Create a new job object
    const newJob = {
        title: jobTitle,
        company: companyName,
        skills: skills
    };

    // Get existing jobs from localStorage
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Add the new job to the jobs array
    jobs.push(newJob);

    // Save the updated jobs array back to localStorage
    localStorage.setItem('jobs', JSON.stringify(jobs));

    // Clear the form fields
    document.getElementById('postJobForm').reset();

    // Alert user of successful post
    alert('Job posted successfully!');
});
