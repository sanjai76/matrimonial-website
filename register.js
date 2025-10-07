document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="tel"]').value.trim();
        const password = form.querySelector('input[type="password"]').value.trim();
        const checkbox = form.querySelector('input[type="checkbox"]').checked;

        if (!name || !email || !phone || !password || !checkbox) {
            alert("Please fill in all fields and agree to the terms.");
            return;
        }

        alert("Account created successfully!");
        form.reset(); // Reset the form after success
    });
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('shrink', window.scrollY > 50);
});

function toggleMenu(icon) {
    const nav = document.getElementById('navbar-links');
    nav.classList.toggle('show');
    icon.classList.toggle('active');
}

// Smooth scroll and auto-close
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = this.getAttribute('href');

        // Only prevent default if it's an in-page link
        if (target.startsWith('#')) {
            e.preventDefault();

            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }

            // Close the menu on mobile
            document.getElementById('navbar-links').classList.remove('show');
            document.getElementById('hamburger').classList.remove('active');
        }
    });
});