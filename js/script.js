let navbarTop = document.querySelector('.navbar-top');
let parallaxer = document.querySelector('.parallaxer');
let items = parallaxer.querySelectorAll('.item');
let scroll = window.pageYOffset;



// ----------------------- MAIN -----------------------
    updateNavBar();
// ----------------------------------------------------


items.forEach(item => {
    if (!item.classList.contains('floating')){
        item.classList.add('floating');
    }
    if (item.dataset.src){
        item.style.background = `url('${item.dataset.src}')`;
    }
    item.style.backgroundRepeat = 'no-repeat';
    item.style.backgroundSize = 'cover';
    item.style.backgroundPosition = 'bottom';
    item.style.top = `${((scroll - item.dataset.offset) * item.dataset.ratio)}px`;
});


window.addEventListener('scroll', e => {
    scroll = window.pageYOffset;
    items.forEach(item => {
        item.style.top = `${((scroll - item.dataset.offset) * item.dataset.ratio)}px`;
    });

   updateNavBar();
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