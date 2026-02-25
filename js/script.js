window.addEventListener("load", function(){
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(()=> loader.style.display="none", 400);

});
// Countdown to 27th March 2026
function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    const eventDate = new Date("March 27, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownEl.innerHTML = "The event is live!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update every second
setInterval(updateCountdown, 1000);
updateCountdown();


