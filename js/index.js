window.onscroll = function() {
const header = document.querySelector('header');
const logo = document.querySelector('.logo a');
const navLinks = document.querySelectorAll('.nav-links a');

if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('shrink');
    logo.style.fontSize = '1.2rem'; // Adjust logo size
    navLinks.forEach(link => link.style.fontSize = '1rem'); // Adjust nav link size
} else {
    header.classList.remove('shrink');
    logo.style.fontSize = '1.5rem'; // Reset logo size
    navLinks.forEach(link => link.style.fontSize = '1.1rem'); // Reset nav link size
}
};