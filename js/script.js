/* ================= PAGE LOADER ================= */

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 400);
    }
});

/* ================= MOBILE NAVIGATION ================= */

const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

if (toggle && links) {
    toggle.addEventListener("click", () => {
        links.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", () => {
            links.classList.remove("active");
        });
    });
}

/* ================= SCROLL REVEAL ANIMATION ================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================= COUNTDOWN ================= */

// Countdown to 27th March 2026
function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    const eventDate = new Date("March 27, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        countdownEl.innerHTML = "The event is live!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Run immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);


