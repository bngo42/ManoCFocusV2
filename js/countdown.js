let countdown = document.querySelector('.countdown');
let date = new Date("Nov 10, 2019");
let now = new Date();
let diff = (date - now);

let days = Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((diff % (1000 * 60)) / 1000);

calculateDiff();

setInterval(() => {
    if (countdown) {
        calculateDiff();
    }
}, 1000);

function updateCountdownText() {
    countdown.innerHTML = `${days}${(currentLocal == "FR") ? "J" : "D"} | ${hours}H | ${minutes}M | ${seconds}S`;
}

function calculateDiff() {
    now = new Date();
    diff = (date - now);
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);
    updateCountdownText();
}



