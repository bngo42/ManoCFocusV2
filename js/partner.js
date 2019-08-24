let list = document.querySelector('.partners-list');

let partners = [
    {
        name: "Materiel.net",
        img: "img/partners/logo-materiel-net.png",
        url: "https://www.materiel.net",
        twitter: "https://twitter.com/materielnet",
        facebook: "https://www.facebook.com/Materiel.net",
        twitch: "https://www.twitch.tv/materielnetlive",
        youtube: "https://www.youtube.com/channel/UCA25ZdZZF5XE6ihPE5pwfnw",
        instagram: ""
    },
    {
        name: "Spawn bar Esport Charleroi",
        img: "img/partners/logo-spawn.png",
        url: "https://www.facebook.com/SPAWNCharleroi",
        twitter: "https://twitter.com/SpawnCharleroi",
        facebook: "https://www.facebook.com/SPAWNCharleroi/",
        twitch: "https://www.twitch.tv/spawnstudio",
        youtube: "https://www.youtube.com/channel/UCJ2dx9U_TNT97iiEd6KYjtA",
        instagram: "https://www.instagram.com/spawnbarcharleroi/"
    },
    {
        name: "Derive Figurine",
        img: "img/partners/logo-DeriveFigurine.png",
        url: "https://www.derivefigurine.com/fr",
        twitter: "https://twitter.com/DeriveFigurine",
        facebook: "https://www.facebook.com/DeriveFigurine",
        twitch: "",
        youtube: "",
        instagram: "https://www.instagram.com/derivefigurine/?hl=fr"
    }
];


partners.forEach(partner => {
    let box = createBox(partner);
    list.append(box);
});

function createBox(datas) {
    let box = list.querySelector('.partner-box'),
        newBox = box.cloneNode(true),
        imgLink = newBox.querySelector('.img-link'),
        img = newBox.querySelector('img'),
        keys = Object.keys(datas);

    if (datas.img){
        img.src = datas.img;
        imgLink.href = datas.url;
    }
    keys.forEach(key => {
        if (key != 'name' && key != 'img' && key != 'url') {
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
