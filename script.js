// Mobile Menu Toggle Script with Accessibility Enhancements
function toggleMobileMenu() {
    const menu = document.getElementById('menu');
    const isExpanded = menu.classList.toggle('active');

    const toggleButton = document.querySelector('.mobile-toggle');
    toggleButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

    if (isExpanded) {
        menu.style.display = 'flex';
        menu.classList.add('fade-in');
    } else {
        menu.classList.add('fade-out');
        setTimeout(() => {
            menu.style.display = 'none';
            menu.classList.remove('fade-out');
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Close the menu if the user clicks outside of it
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('menu');
        const toggleButton = document.querySelector('.mobile-toggle');
        if (!menu.contains(event.target) && !toggleButton.contains(event.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
            menu.classList.add('fade-out');
            setTimeout(() => {
                menu.style.display = 'none';
                menu.classList.remove('fade-out');
                toggleButton.setAttribute('aria-expanded', 'false');
            }, 300);
        }
    });

    // Toggle dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode', 'fade-in');
        darkModeToggle.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('dark-mode');
        document.body.classList.add('fade-in');

        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDark);
        darkModeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });

    // Scroll Reveal Animation
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    handleScrollAnimation(); // Trigger animation on page load
});

// Smooth Scrolling for Anchor Links with Compatibility Check
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target && 'scrollIntoView' in target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Scroll Effect with Improved Performance (Throttling)
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;

    if (currentScroll > 50 && currentScroll > lastScroll) {
        header.classList.add('scrolled', 'slide-up');
    } else if (currentScroll <= 50) {
        header.classList.remove('scrolled', 'slide-up');
    }

    lastScroll = currentScroll;
});

// Contact Form Submission with On-Page Success Message
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const successMessage = document.createElement('p');
        successMessage.className = 'success-message text-burgundy-800 text-center fade-in';
        successMessage.textContent = 'Thank you for contacting us! We will get back to you shortly.';
        
        if (!contactForm.querySelector('.success-message')) {
            contactForm.appendChild(successMessage);
        }

        contactForm.reset();
    });
}

// Portfolio Item Hover Effect with Class Toggle
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered', 'fade-in');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered', 'fade-in');
    });
});

// Filter Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll('.portfolio-item');

    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
            project.classList.add('fade-in');
        } else {
            project.style.display = 'none';
        }
    });
}

// Contact Information Logging for Development Mode Only
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log("Contact Information: Kevin Jerome");
    console.log("Email: blade94781kj@gmail.com");
    console.log("LinkedIn: https://www.linkedin.com/in/kevin-jerome-10371a234/");
    console.log("GitHub: https://github.com/SpikeTek241");
}

// Carousel Animation
let currentIndex = 0;
function moveCarousel() {
    const track = document.querySelector('.portfolio-carousel-track');
    const items = document.querySelectorAll('.portfolio-item');
    currentIndex = (currentIndex + 1) % items.length;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
setInterval(moveCarousel, 3000); // Rotate every 3 seconds

// Dark Mode Toggle Button
const darkModeToggle = document.querySelector('#darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.add('fade-in');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
        darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });
}

// Load Dark Mode State on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode', 'fade-in');
        if (darkModeToggle) {
            darkModeToggle.textContent = 'Light Mode';
        }
    }
});
