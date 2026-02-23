// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
const closeIcon = mobileMenuBtn.querySelector('.close-icon');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize Hero Slider
$(document).ready(function(){
    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>'
    });
});

// Tabs functionality
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const tabName = trigger.getAttribute('data-tab');
        
        // Remove active class from all triggers and contents
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked trigger and corresponding content
        trigger.classList.add('active');
        document.getElementById(tabName).classList.add('active');
        
        // Reinitialize Lucide icons for the newly visible content
        lucide.createIcons();
    });
});

// Form submission (you can customize this)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        contactForm.reset();
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to cards
const cards = document.querySelectorAll('.value-card, .service-card, .resource-card, .testimonial-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navigation');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});