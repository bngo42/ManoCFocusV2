let barFill = document.querySelector('.bar-fill'),
    poolLabel = document.querySelector('.progress-current');


updateProgress();
setInterval(updateProgress, 10000);


function updateProgress() {   
    getCurrentTotal().then(val => {
        let percentage = calculatePercent(40000, val.current_value);
        setBarPercent(percentage);
        setCurrentLabel(val.current_value);
    }).catch(console.log);
}

function getCurrentTotal() {
    return new Promise((resolve, reject) => {
        fetch('https://tweets-server.herokuapp.com/donations')
            .then(res => res.json())
            .then(resolve)
            .catch(reject);
    });
}

function calculatePercent(total, current) {
    return (current * 100) / total;
}

function setBarPercent(percent) {
    barFill.style.width = percent + "%";
}

function setCurrentLabel(val) {
    poolLabel.innerHTML = val + '€';
}
