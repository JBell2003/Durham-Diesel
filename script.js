// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
}

// Mobile navigation menu toggle
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(26, 60, 110, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--primary-color)';
    }
});

// Service card hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}); 