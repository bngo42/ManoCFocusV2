let list = document.querySelector('.partners-list');

let partners = [
    {
        name: "Just For Game",
        img: "img/partners/logo-justForGames.png",
        url: "https://www.justforgames.com",
        twitter: "https://twitter.com/justforgames_fr",
        facebook: "https://www.facebook.com/justforgamesfrance",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    {
        name: "Smartoys",
        img: "img/partners/logo-smartoys.png",
        url: "https://www.smartoys.be/catalog",
        twitter: "https://twitter.com/smartcharleroi",
        facebook: "https://www.facebook.com/smartcharleroi",
        twitch: "https://www.twitch.tv/smartoys",
        youtube: "",
        instagram: "https://www.instagram.com/smartoys.be"
    },
    {
        name: "Loopstop",
        img: "img/partners/logo-loopstop.png",
        url: "http://www.loop-stop.com",
        twitter: "",
        facebook: "https://www.facebook.com/loopstop",
        twitch: "",
        youtube: "https://www.youtube.com/channel/UClSU4Un6M9laWprb4OBK9PA",
        instagram: "https://www.instagram.com/loopstop"
    },
    {
        name: "CoolerMaster",
        img: "img/partners/logo-coolerMaster.png",
        url: "https://eu.coolermaster.com/fr/",
        twitter: "https://twitter.com/coolermasterfr",
        facebook: "https://www.facebook.com/coolermasterfrance",
        twitch: "",
        youtube: "https://www.youtube.com/coolermasteronline/",
        instagram: "https://www.instagram.com/coolermasterfr"
    },
    {
        name: "KochMedia",
        img: "img/partners/logo-kochmedia.png",
        url: "https://www.kochmedia.com/fr/",
        twitter: "https://twitter.com/kochmediafr",
        facebook: "https://www.facebook.com/kochmediafrance",
        twitch: "",
        youtube: "https://www.youtube.com/user/KochMediaFr",
        instagram: "https://www.instagram.com/kochmediafr/"
    },
    {
        name: "Ludo Trotter",
        img: "img/partners/logo-ludotrotter.png",
        url: "https://jeux-de-societe.be/",
        twitter: "https://twitter.com/Ludotrotter",
        facebook: "https://www.facebook.com/ludotrotter",
        twitch: "",
        youtube: "https://www.youtube.com/channel/UC9ONIsd-7bjoEnOIk9AIDKg",
        instagram: ""
    },
    {
        name: "FragCase",
        img: "img/partners/logo-fragcase.png",
        url: "https://fragcase.com",
        twitter: "https://twitter.com/fragcase",
        facebook: "https://www.facebook.com/fragcase",
        twitch: "",
        youtube: "",
        instagram: "https://www.instagram.com/fragcase"
    },
    {
        name: "Fnac Charleroi",
        img: "img/partners/logo-fnac.png",
        url: "https://www.fnac.be",
        twitter: "https://twitter.com/Fnac_Belgium",
        facebook: "https://www.facebook.com/FnacBelgium",
        twitch: "",
        youtube: "https://www.youtube.com/user/fnac",
        instagram: "https://www.instagram.com/fnac_belgium"
    },
    {
        name: "Jarl",
        img: "img/partners/logo-jarl.png",
        url: "https://jarl.fr",
        twitter: "https://twitter.com/jarlofficial",
        facebook: "https://www.facebook.com/jarlofficial",
        twitch: "",
        youtube: "",
        instagram: "https://www.instagram.com/jarl_official"
    },
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


partners.sort((a , b) => (a.name > b.name) ? 1 : -1);
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