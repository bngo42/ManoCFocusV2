let parallaxer = document.querySelector('.parallaxer');
let items = parallaxer.querySelectorAll('.item');
let scroll = window.pageYOffset;


// ----------------------- MAIN -----------------------
    updateNavBar();
// ----------------------------------------------------

if (!isMobile()) {   
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
   
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('touchmove', updateScroll);
}

function updateScroll() {
    scroll = window.pageYOffset;
    if (scroll <= parallaxer.clientHeight) {
        items.forEach(item => {
            item.style.top = `${((scroll - item.dataset.offset) * item.dataset.ratio)}px`;
        });
    }
        
   updateNavBar();
}

function isMobile() {
    return (
        navigator.userAgent.match(/Android/i)
    ||  navigator.userAgent.match(/webOS/i)
    ||  navigator.userAgent.match(/iPhone/i)
    ||  navigator.userAgent.match(/iPad/i)
    ||  navigator.userAgent.match(/iPod/i)
    ||  navigator.userAgent.match(/BlackBerry/i)
    ||  navigator.userAgent.match(/Windows Phone/i)
    );
}