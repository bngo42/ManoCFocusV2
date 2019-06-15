let alert = document.querySelector('.alert');
let alertShown = false;

function showAlert(msg, type, duration = 3) {
    if (msg && type && alert) {
        alert.innerHTML = msg;
        alert.classList.add(type);
        if (type == "success") {
            alert.classList.remove('error');
        } else if (type == "error") {
            alert.classList.remove('success');
        }

        if (!alertShown){
            alertShown = true;
            fadeIn(alert).then(() => {
                timeout(duration * 1000).then(() => {
                    fadeOut(alert).then(() => {
                        alertShown = false;
                    });
                });
            });
        }
    }
}

function fadeIn(element) {
    return new Promise((resolve, reject) => {
        if (!element){
            reject('No element specified');
        }
        element.classList.remove('fadeIn', 'fadeOut', 'hidden');
        element.classList.add('fadeIn');
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

function fadeOut(element) {
    return new Promise((resolve, reject) => {
        if (!element){
            reject('No element specified');
        }
        element.classList.remove('fadeIn', 'fadeOut');
        element.classList.add('fadeOut');
        setTimeout(() => {
            element.classList.add('hidden');
            resolve();
        }, 1000);
    });
}

function timeout(duration) {
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            clearInterval(timer);
            resolve();
        }, duration);
    });
}