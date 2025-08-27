// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(44, 44, 84, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Animation for feature boxes on scroll
function animateOnScroll() {
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach(box => {
        const position = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            box.style.opacity = 1;
            box.style.transform = 'translateY(0)';
        }
    });
}

// Initialize feature box animation
document.querySelectorAll('.feature-box').forEach(box => {
    box.style.opacity = 0;
    box.style.transform = 'translateY(20px)';
    box.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
// Initial check on page load
window.addEventListener('load', animateOnScroll);
.language-toggle {
    z-index: 1000 !important;
    position: fixed !important;
    background: white !important;
    padding: 5px !important;
    border-radius: 4px !important;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2) !important;
}