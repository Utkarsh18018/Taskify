// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations for sections
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    // Scroll animations for hero text
    const heroText = document.querySelectorAll('.hero h2, .hero p');
    window.addEventListener('scroll', () => {
        heroText.forEach((text) => {
            if (window.scrollY > 50) {
                text.classList.add('visible');
            }
        });
    });
});

// JavaScript for handling mobile menu toggle
const hamburger = document.getElementById('hamburger-menu');
const navbarMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
