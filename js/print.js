let importer = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let current = [];

window.addEventListener('keydown', e => {
    if (current.length == importer.length){
        current.shift();
    }
    current.push(e.keyCode);
    if (checkResponse(importer, current)) {
        console.log('Equals !');
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