// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    const loadingSteps = document.querySelectorAll('.loading-step');
    const progressBars = document.querySelectorAll('.progress');
    let currentStep = 0;

    function typeText(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        return new Promise(resolve => {
            const interval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, speed);
        });
    }

    async function animateStep(stepIndex) {
        if (stepIndex < loadingSteps.length) {
            // Activate current step
            loadingSteps[stepIndex].classList.add('active');
            
            // Get the command element
            const commandElement = loadingSteps[stepIndex].querySelector('.command');
            
            // Type the command
            await typeText(commandElement, commandElement.textContent);
            
            // Animate progress bar
            progressBars[stepIndex].style.width = '100%';
            
            // Move to next step after delay
            setTimeout(() => {
                currentStep++;
                animateStep(currentStep);
            }, 1000);
        } else {
            // All steps completed, fade out loading overlay
            setTimeout(() => {
                loadingOverlay.classList.add('fade-out');
                // Remove loading overlay after fade out
                setTimeout(() => {
                    loadingOverlay.remove();
                }, 500);
            }, 1000);
        }
    }

    // Start animation
    animateStep(currentStep);
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const hamburgerList = document.querySelector('.hamburger-list-container');

hamburger.addEventListener('click', () => {
    hamburgerList.classList.toggle('hidden');
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Project Cards Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Blog Cards Hover Effect
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 