let navbarTop = document.querySelector('.navbar-top');
let toggler = document.querySelector('.navbar-toggle');
let isOpen = false;

toggler.addEventListener('click', () => {
    if (navbarTop.classList.contains('toggle-on')){
        navbarTop.classList.remove('toggle-on');
    } else {
        navbarTop.classList.add('toggle-on');
    }
});


function updateNavBar() {
    if (scroll > navbarTop.clientHeight) {
        if (!navbarTop.classList.contains('fixed')){
            navbarTop.classList.add('fixed', 'slideInDown');
        }
    } else {
        if (navbarTop.classList.contains('fixed')){
            navbarTop.classList.remove('fixed', 'slideInDown');
        }
    }
}


function slideUp(element) {
    return new Promise((resolve, reject) => {
        if (!element){
            reject();
        }
        clearClass(element);
        element.classList.add('slideOutUp');
        setTimeout(resolve, 1000);
    });
}

function slideDown(element) {
    return new Promise((resolve, reject) => {
        if (!element){
            reject();
        }
        clearClass(element);        
        element.classList.add('slideInDown');
        setTimeout(resolve, 1000);
    });
}

function clearClass(element) {
    if (element){
        if (element.classList.contains('slideInDown')){
            element.classList.remove('slideInDown');
        }
        if (element.classList.contains('slideOutUp')){
            element.classList.remove('slideOutUp');
        }
    }
}