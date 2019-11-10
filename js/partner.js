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
        name: "Affaires PC",
        img: "img/partners/logo-affaires.png",
        url: "https://www.affairespc.com",
        twitter: "https://twitter.com/AffairesPc",
        facebook: "https://www.facebook.com/affairespc",
        twitch: "",
        youtube: "",
        instagram: "https://www.instagram.com/affairespc"
    },
    {
        name: "Gamesplanet",
        img: "img/partners/logo-gamesplanet.png",
        url: "https://fr.gamesplanet.com/",
        twitter: "https://twitter.com/gamesplanetfr",
        facebook: "https://www.facebook.com/GamesplanetFR",
        twitch: "",
        youtube: "https://www.youtube.com/channel/UC841Ta9UUtsVyVNL5Z4D2dg",
        instagram: ""
    },
    {
        name: "Nintendo",
        img: "img/partners/logo-nintendo.png",
        url: "https://www.nintendo.be",
        twitter: "https://twitter.com/NintendoBE_FR",
        facebook: "https://www.facebook.com/NintendoFR",
        twitch: "https://www.twitch.tv/nintendobelgique",
        youtube: "https://www.youtube.com/channel/UCeXuncmy_GWIdppRhe2jWwg",
        instagram: "https://www.instagram.com/NintendoBE"
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
        name: "Halo FR",
        img: "img/partners/logo-halofr.png",
        url: "https://www.halo.fr",
        twitter: "",
        facebook: "https://www.facebook.com/halo.fr",
        twitch: "",
        youtube: "https://www.youtube.com/user/HaloQG",
        instagram: ""
    },
    {
        name: "Au bazar de Yiruld",
        img: "img/partners/logo-yiruld.png",
        url: "https://www.facebook.com/pages/category/Shopping---Retail/Au-Bazar-de-Yiruld-183034725629696/",
        twitter: "",
        facebook: "https://www.facebook.com/pages/category/Shopping---Retail/Au-Bazar-de-Yiruld-183034725629696/",
        twitch: "",
        youtube: "",
        instagram: ""
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
    },
    {
        name: "MacWay",
        img: "img/partners/logo-macway.png",
        url: "https://www.macway.com/",
        twitter: "https://twitter.com/macway_fr",
        facebook: "https://www.facebook.com/macway",
        twitch: "",
        youtube: "https://www.youtube.com/user/MacWayTV",
        instagram: ""
    },
    {
        name: "SlumberLand BD",
        img: "img/partners/logo-slumberlandbd.png",
        url: "https://www.slumberlandbdworld.com",
        twitter: "",
        facebook: "https://www.facebook.com/sbdwtome11",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    {
        name: "Amalgames Charleroi",
        img: "img/partners/logo-amalgames.png",
        url: "https://www.facebook.com/amalgamescharleroi",
        twitter: "",
        facebook: "https://www.facebook.com/amalgamescharleroi",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    {
        name: "Ubisoft",
        img: "img/partners/logo-ubisoft.png",
        url: "https://www.ubisoft.com/fr-fr",
        twitter: "https://twitter.com/UbisoftFR",
        facebook: "https://www.facebook.com/ubisoft.france",
        twitch: "https://www.twitch.tv/ubisoft",
        youtube: "https://www.youtube.com/user/UbisoftFR",
        instagram: "https://www.instagram.com/ubisoftfr"
    },
    {
        name: "Riot Games",
        img: "img/partners/logo-riot.png",
        url: "https://www.riotgames.com/fr",
        twitter: "https://twitter.com/RiotGamesFrance",
        facebook: "https://www.facebook.com/RiotGames",
        twitch: "https://www.twitch.tv/riotgamesfr",
        youtube: "https://www.youtube.com/channel/UCJEGvSZnQ1pkVfHO8s5G8hA",
        instagram: "https://www.instagram.com/riotgames/"
    },
    {
        name: "Viewsonic",
        img: "img/partners/logo-viewsonic.png",
        url: "https://www.viewsonic.com/fr",
        twitter: "https://twitter.com/viewsonicfr",
        facebook: "https://www.facebook.com/viewsonicfrance",
        twitch: "",
        youtube: "https://www.youtube.com/user/viewsonicglobal",
        instagram: "https://www.instagram.com/viewsonicfrance"
    },
    {
        name: "Uniwan",
        img: "img/partners/logo-uniwan.png",
        url: "https://uniwan.be/",
        twitter: "https://twitter.com/Uniwan",
        facebook: "https://www.facebook.com/uniwan.be",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    {
        name: "Louvard Game",
        img: "img/partners/logo-louvard.png",
        url: "http://www.louvardgame.be",
        twitter: "https://twitter.com/LouvardGame",
        facebook: "https://www.facebook.com/LouvardGame",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    {
        name: "Speed seats",
        img: "img/partners/logo-speedseats.png",
        url: "https://www.speedseats.eu",
        twitter: "https://twitter.com/speedseats",
        facebook: "https://www.facebook.com/Speedseats/",
        twitch: "",
        youtube: "",
        instagram: "https://www.instagram.com/speedseats"
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