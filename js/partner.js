let list = document.querySelector('.partners-list');

let partners = [
    {
        name: "Materiel.net",
        img: "img/partners/logo-materiel-net.png",
        twitter: "https://twitter.com/materielnet",
        facebook: "https://www.facebook.com/Materiel.net",
        twitch: "https://www.twitch.tv/materielnetlive",
        youtube: "https://www.youtube.com/channel/UCA25ZdZZF5XE6ihPE5pwfnw"
    },
    {
        name: "Instant Gaming",
        img: "img/partners/instant-gaming.png",
        twitter: "https://twitter.com/InstantGamingFR",
        facebook: "https://www.facebook.com/Instant.Gaming.fr",
        twitch: "https://www.twitch.tv/instantgamingfr",
        youtube: "https://www.youtube.com/channel/UCX7Mo1cDgCpMIMvn7HDrBLw"
    }
];


partners.forEach(partner => {
    let box = createBox(partner);
    list.append(box);
});

function createBox(datas) {
    let box = list.querySelector('.partner-box'),
        newBox = box.cloneNode(true),
        img = newBox.querySelector('img'),
        keys = Object.keys(datas);

    if (datas.img){
        img.src = datas.img;
    }
    keys.forEach(key => {
        if (key != 'name' && key != 'img') {
            if (datas[key] != "") {
                let link = newBox.querySelector(`.fa-${key}`);
                link.href = datas[key];
                link.target = "_blank";
            } else {
                let link = newBox.querySelector(`.fa-${key}`);
                link.classList.add('hide');
            }
        }
    });
    newBox.classList.remove('hide');

    return newBox;
}
