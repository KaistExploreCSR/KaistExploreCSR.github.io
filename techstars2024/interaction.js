// Navigation functionality
let navbutton = document.getElementById("nav-hamburger");
let navmenus = document.getElementById("nav-container");
let isAnimating = false;

const onClickNavButton = () => {
    if (isAnimating) return;
    isAnimating = true;
    
    if (navmenus.classList.contains('show')) {
        navmenus.classList.add('hiding');
        navmenus.classList.remove('show');
        setTimeout(() => {
            navmenus.classList.remove('hiding');
            navmenus.style.display = 'none';
            isAnimating = false;
        }, 300);
    } else {
        navmenus.style.display = 'flex';
        // Force reflow
        navmenus.offsetHeight;
        navmenus.classList.add('show');
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }
};

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navmenus.classList.contains('show') && 
        !navmenus.contains(e.target) && 
        !navbutton.contains(e.target)) {
        onClickNavButton();
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.presenter-card, .event-card, .member-card, .star-card').forEach(el => {
    observer.observe(el);
});

// Add active class to current navigation item
const setActiveNavItem = () => {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-item').forEach(item => {
        const href = item.getAttribute('href');
        if (currentPath.endsWith(href)) {
            item.classList.add('active');
        }
    });
};

document.addEventListener('DOMContentLoaded', setActiveNavItem);