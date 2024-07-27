// Toggle icon for navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });

    // Sticky navbar
    if (window.scrollY > 100) { // Adjust this value as needed
        document.querySelector('header').classList.add('sticky');
    } else {
        document.querySelector('header').classList.remove('sticky');
    }
};

// Remove toggle icon and navbar when click navbar link (scroll)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Scroll reveal (Placeholder)
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200

});
ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right'});
// Initialize and configure scroll reveal here if needed

// Typed.js (Placeholder)

const typed = new Typed('.multiple-text', {
    strings:['Full Stack Developer','Machine Learning Expert','Research Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
});
// Initialize and configure typed.js here if needed
