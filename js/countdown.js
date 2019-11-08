let countdown = document.querySelector('.countdown');
let date = new Date("Nov 9, 2019 12:00:00");
let now = new Date();
let diff = (date - now);

let days = Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((diff % (1000 * 60)) / 1000);

let localesCount = {
    FR : `${days}J | ${hours}H | ${minutes}M | ${seconds}S`,
    EN : `${days}D | ${hours}H | ${minutes}M | ${seconds}S`,
    NL : `${days}D | ${hours}U | ${minutes}M | ${seconds}S`
}

calculateDiff();

setInterval(() => {
    if (countdown) {
        calculateDiff();
    }
}, 1000);

function updateCountdownText() {
    countdown.innerHTML = localesCount[currentLocal];
}

function calculateDiff() {
    now = new Date();
    diff = (date - now);
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diff % (1000 * 60)) / 1000);

    localesCount = {
        FR : `${days}J | ${hours}H | ${minutes}M | ${seconds}S`,
        EN : `${days}D | ${hours}H | ${minutes}M | ${seconds}S`,
        NL : `${days}D | ${hours}U | ${minutes}M | ${seconds}S`
    }
    updateCountdownText();
}



