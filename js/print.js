let holder = document.querySelector('.importer');

let importSpeed = 2;
let importerItems = [];
let height = 0;
let importInterval = null;
let importer = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let current = [];

window.addEventListener('keydown', e => {
    if (current.length == importer.length){
        current.shift();
    }
    current.push(e.keyCode);
    if (checkResponse(importer, current) && !importInterval) {
        addImporter(5);
        height = 0;
        importInterval = setInterval(() => {
            importerItems.forEach(item => {
                item.style.top = `${height * (item.dataset.speed * 0.5)}%`;
            });
            height++;
            if (height >= 150) {
                clearInterval(importInterval);
                clearImporter();
                importInterval = null;
            }
        }, 100);
    }
});


function checkResponse(a, b) {
    if (b.length != a.length){
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i])
            return false;
    }
    return true;
}

function addImporter(count) {
    for (let i = 0; i < count; i ++) {
        let imp = document.createElement('img');
        imp.style.position = 'absolute';
        imp.style.transition = "1s";
        imp.style.left = `${rndImporter(0, 100)}%`;
        imp.dataset.speed = rndImporter(1, 5);
        imp.src = 'img/importer.png';
        importerItems.push(imp);
        holder.append(imp);
    }
}

function clearImporter() {
    importerItems.forEach(item => {
        item.remove();
    })
}

function rndImporter(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}