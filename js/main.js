// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const headerMiddle = document.querySelector('.header-middle');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    headerMiddle.classList.toggle('active');
    
    // Animation des barres du hamburger
    if (hamburger.classList.contains('active')) {
        hamburger.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
        hamburger.querySelector('span:nth-child(2)').style.opacity = '0';
        hamburger.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        hamburger.querySelector('span:nth-child(1)').style.transform = '';
        hamburger.querySelector('span:nth-child(2)').style.opacity = '';
        hamburger.querySelector('span:nth-child(3)').style.transform = '';
    }
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            headerMiddle.classList.remove('active');
            hamburger.querySelector('span:nth-child(1)').style.transform = '';
            hamburger.querySelector('span:nth-child(2)').style.opacity = '';
            hamburger.querySelector('span:nth-child(3)').style.transform = '';
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    }
});