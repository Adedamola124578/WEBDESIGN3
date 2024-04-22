const contactForm = document.querySelector('.container form');
const container = document.querySelector('.container');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    container.innerHTML = '<p>Thanks for your message. <br /> We\'ll respond to you shortly</p>';
});

const connectBtn = document.querySelector('.connect-btn');
const crossBtn = document.querySelector('.cross-btn');
const socialContainer = document.querySelector('.social-container');

connectBtn.addEventListener('click', () => {
    socialContainer.classList.toggle('visible');
});

crossBtn.addEventListener('click', () => {
    socialContainer.classList.remove('visible');
});


$(document).ready(function() {
        $('.menu-icon').click(function() {
            $('.nav-links').slideToggle(); // Toggle visibility of the navigation links
        });
    });
