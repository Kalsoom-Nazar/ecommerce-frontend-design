// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", function() {
    let mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "flex";
    }
});

// Search button functionality
document.querySelector(".search-button").addEventListener("click", function() {
    let query = document.querySelector(".search-input").value;
    alert("Searching for: " + query);
});
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}


function startCountdown(durationInSeconds) {
    let timer = durationInSeconds;
    setInterval(() => {
        const days = Math.floor(timer / (24 * 60 * 60));
        const hours = Math.floor((timer % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;
        
      document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
        
        if (timer > 0) {
            timer--;
        }
    }, 1000);
}  
startCountdown(4 * 24 * 60 * 60 + 13 * 60 * 60 + 34 * 60 + 56);


