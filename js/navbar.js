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
        if (!navbarTop.classList.contains('fixed'))
            navbarTop.classList.add('fixed');
    } else {
        if (navbarTop.classList.contains('fixed'))
            navbarTop.classList.remove('fixed');
    }
}