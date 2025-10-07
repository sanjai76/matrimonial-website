// function scrollToRegister() {
//     document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
// }

// // Hero entrance animation
// window.addEventListener('DOMContentLoaded', () => {
//     const heroContent = document.querySelector('.hero div');
//     heroContent.style.opacity = 0;
//     heroContent.style.transform = 'translateY(30px)';

//     setTimeout(() => {
//         heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
//         heroContent.style.opacity = 1;
//         heroContent.style.transform = 'translateY(0)';
//     }, 300);

//     startTyping();
//     startHeroCarousel();
// });

// // Typing animation
// const texts = ["Find Your Perfect Match", "Join Thousands Today", "Start Your Journey"];
// let charIndex = 0, textIndex = 0;
// let typingSpeed = 100, erasingSpeed = 50, delayBetween = 1500;

// function type() {
//     const typedText = document.querySelector(".typed-text");
//     if (charIndex < texts[textIndex].length) {
//         typedText.textContent += texts[textIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingSpeed);
//     } else {
//         setTimeout(erase, delayBetween);
//     }
// }

// function erase() {
//     const typedText = document.querySelector(".typed-text");
//     if (charIndex > 0) {
//         typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, erasingSpeed);
//     } else {
//         textIndex = (textIndex + 1) % texts.length;
//         setTimeout(type, typingSpeed);
//     }
// }

// function startTyping() {
//     if (texts.length) setTimeout(type, 500);
// }

// // Hero background carousel
// const heroImages = [
//     "images/backTwo.jpeg",
//     "images/backThreee.jpg",
//     "images/backFourrrrr.jpg"
// ];
// let heroIndex = 0;

// function startHeroCarousel() {
//     setInterval(() => {
//         heroIndex = (heroIndex + 1) % heroImages.length;
//         document.querySelector('.hero').style.backgroundImage = `url('${heroImages[heroIndex]}')`;
//     }, 5000);
// }





function scrollToRegister() {
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
}

// Hero entrance animation
window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero div');
    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateY(30px)';

    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateY(0)';
    }, 300);

    startTyping();
    startHeroCarousel();
});

// Typing animation
const texts = ["Find Your Perfect Match", "Join Thousands Today", "Start Your Journey"];
let charIndex = 0, textIndex = 0;
let typingSpeed = 100, erasingSpeed = 50, delayBetween = 1500;

function type() {
    const typedText = document.querySelector(".typed-text");
    if (charIndex < texts[textIndex].length) {
        typedText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    const typedText = document.querySelector(".typed-text");
    if (charIndex > 0) {
        typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, typingSpeed);
    }
}

function startTyping() {
    if (texts.length) setTimeout(type, 500);
}

// Hero background carousel
const heroImages = [
    "images/backTwo.jpeg",
    "images/backThreee.jpg",
    "images/HeroImage.webp"
];
let heroIndex = 0;

function startHeroCarousel() {
    setInterval(() => {
        heroIndex = (heroIndex + 1) % heroImages.length;
        document.querySelector('.hero').style.backgroundImage = `url('${heroImages[heroIndex]}')`;
    }, 5000);
}

// // Shrink header on scroll
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     if (window.scrollY > 50) {
//         header.classList.add('shrink');
//     } else {
//         header.classList.remove('shrink');
//     }
// });

// // Toggle mobile menu
// function toggleMenu() {
//     document.getElementById('navbar-links').classList.toggle('show');
// }
// Shrink header on scroll
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




function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("slide-in");
    }, 10);
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("slide-in");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function (e) {
    document.querySelectorAll(".profile-modal").forEach((modal) => {
        if (e.target === modal) {
            modal.classList.remove("slide-in");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
};
const form = document.querySelector('.register-form');
const popup = document.getElementById('successPopup');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    popup.classList.add('show');             // Show popup
    document.body.classList.add('blurred');  // Add blur effect

    // Auto-close after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
});

function closePopup() {
    popup.classList.remove('show');
    document.body.classList.remove('blurred');
}
function toggleChatBox() {
    const chat = document.getElementById('chatBox');
    chat.classList.toggle('open');
}

function sendUserMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message === '') return;

    const chatBody = document.getElementById('chatBody');

    // User message
    const userMsg = document.createElement('div');
    userMsg.classList.add('message', 'sent');
    userMsg.textContent = message;
    chatBody.appendChild(userMsg);

    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulate AI response after 1s
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.classList.add('message', 'received');
        aiMsg.textContent = 'Thank you for contacting Match IT 💖';
        chatBody.appendChild(aiMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}
function openBookingForm(service) {
    document.getElementById('serviceName').innerText = service;
    document.getElementById('bookingPopup').classList.add('show');
}

function closeBookingForm() {
    document.getElementById('bookingPopup').classList.remove('show');
}

function submitBooking() {
    alert("🎉 Booking submitted successfully!\nWe will contact you shortly.");
    closeBookingForm();
}
function toggleMoreMatches() {
    const section = document.getElementById("moreMatches");
    const btn = document.getElementById("toggleMatchesBtn");

    if (section.classList.contains("visible")) {
        section.classList.remove("visible");
        section.classList.add("hidden");
        btn.innerText = "More Matches";
    } else {
        section.classList.remove("hidden");
        section.classList.add("visible");
        btn.innerText = "Hide Matches";
        AOS.refresh(); // Refresh animations if using AOS
    }
}
function subscribeNewsletter(e) {
    e.preventDefault();
    document.getElementById("newsletter-msg").textContent = "Subscribed successfully 💌";
    setTimeout(() => {
        document.getElementById("newsletter-msg").textContent = "";
    }, 3000);
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function subscribeNewsletter(e) {
    e.preventDefault();
    const msg = document.getElementById('newsletter-msg');
    msg.textContent = "Subscribed successfully 💌";
    setTimeout(() => msg.textContent = "", 3000);
}