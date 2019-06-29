let parallaxer = document.querySelector('.parallaxer');
let items = parallaxer.querySelectorAll('.item');
let offset = 100;
let scroll = window.pageYOffset;

items.forEach(item => {
    if (!item.classList.contains('floating')){
        item.classList.add('floating');
    }
    item.style.background = `url('${item.dataset.src}')`;
    item.style.backgroundRepeat = 'no-repeat';
    item.style.backgroundSize = 'contain';
    item.style.backgroundPosition = 'center';
    item.style.top = `${((scroll - offset) * item.dataset.ratio)}px`;
});


window.addEventListener('scroll', e => {
    scroll = window.pageYOffset;
    items.forEach(item => {
        item.style.top = `${((scroll - offset) * item.dataset.ratio)}px`;
    });
});