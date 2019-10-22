let streamerBox = document.querySelector('.streamer-box');
let streamerHolder = document.querySelector('#streamers .box-list');

let streamerData = [
    { 
        name: "Manonolita",
        image: "img/streamers/manonolita.jpg",
        twitter: "https://twitter.com/Manonolita14",
        facebook: "https://www.facebook.com/Manonolita/",
        twitch: "https://www.twitch.tv/manonolita",
        channel: "https://www.twitch.tv/manonolita",
        youtube: "https://www.youtube.com/channel/UClspNpF3EziJG9h_JaDTBmQ",
        instagram: "https://www.instagram.com/manonolita/"
    },
    { 
        name: "Packam",
        image: "img/streamers/packam.jpg",
        twitter: "https://twitter.com/LosPackamos",
        facebook: "https://www.facebook.com/Packamily",
        twitch: "https://www.twitch.tv/packam",
        channel: "https://www.twitch.tv/packam",
        youtube: "https://www.youtube.com/user/MrPackam",
        instagram: "https://www.instagram.com/los_packam/"
    },
    { 
        name: "beyAz",
        image: "img/streamers/beyAz.jpg",
        twitter: "https://twitter.com/beyAzCSGO",
        facebook: "",
        twitch: "https://www.twitch.tv/beyazcsgo",
        channel: "https://www.twitch.tv/beyazcsgo",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Dwight",
        image: "img/streamers/dwight.jpg",
        twitter: "https://twitter.com/Dwight44954",
        facebook: "https://www.facebook.com/mrdwight44954",
        twitch: "https://www.twitch.tv/misterdwight",
        channel: "https://www.twitch.tv/misterdwight",
        youtube: "https://www.youtube.com/user/Dwight4954",
        instagram: "https://www.instagram.com/dwight44954/"
    },
    { 
        name: "Aydiin",
        image: "img/streamers/aydiin.jpg",
        twitter: "https://twitter.com/Ayd1in",
        facebook: "",
        twitch: "https://www.twitch.tv/Aydiin",
        channel: "https://www.twitch.tv/Aydiin",
        youtube: "https://www.youtube.com/c/AydiinTV",
        instagram: "https://www.instagram.com/lgdaydiin"
    },    
    { 
        name: "Ordwaitgame",
        image: "img/streamers/ordwait.jpg",
        twitter: "https://twitter.com/ordwaitgame",
        facebook: "https://www.facebook.com/ordwaittwitch",
        twitch: "https://www.twitch.tv/ordwait",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Cruella",
        image: "img/streamers/cruella.jpg",
        twitter: "https://twitter.com/cruelladk",
        facebook: "",
        twitch: "https://www.twitch.tv/cruelladk",
        channel: "https://www.twitch.tv/cruelladk",
        youtube: "https://www.youtube.com/channel/UCp0qQWS1udpRvKcMDPGp96g",
        instagram: "https://www.instagram.com/cruelladk"
    },
    { 
        name: "Ionï",
        image: "img/streamers/ioni.jpg",
        twitter: "https://twitter.com/Ioni_lol",
        facebook: "",
        twitch: "https://www.twitch.tv/ioni_lol",
        channel: "https://www.twitch.tv/ioni_lol",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Taour",
        image: "img/streamers/taour.jpg",
        twitter: "https://twitter.com/Taourrr1030",
        facebook: "https://www.facebook.com/Taour-811826002214398",
        twitch: "https://www.twitch.tv/taourrr1030",
        channel: "https://www.twitch.tv/taourrr1030",
        youtube: "https://www.youtube.com/c/Taourrr1030",
        instagram: ""
    },
    { 
        name: "Tsu",
        image: "img/streamers/tsu.jpg",
        twitter: "https://twitter.com/TsuVideos",
        facebook: "",
        twitch: "https://www.twitch.tv/tsuvideo",
        channel: "https://www.twitch.tv/tsuvideo",
        youtube: "https://www.youtube.com/channel/UCO1ahLP9kaeQUm18wPdNy0A",
        instagram: ""
    },
    { 
        name: "Skykhoqua",
        image: "img/streamers/skykhoqua.jpg",
        twitter: "https://twitter.com/Skykhouqua",
        facebook: "",
        twitch: "https://www.twitch.tv/skykhoqua",
        channel: "https://www.twitch.tv/skykhoqua",
        youtube: "",
        instagram: ""
    },
    { 
        name: "iDex",
        image: "img/streamers/idex.jpg",
        twitter: "https://twitter.com/iDexCsgo",
        facebook: "",
        twitch: "https://www.twitch.tv/iDex",
        channel: "https://www.twitch.tv/iDex",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Lucki",
        image: "img/streamers/lucki.jpg",
        twitter: "",
        facebook: "",
        twitch: "",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Keoz",
        image: "img/streamers/keozz.jpg",
        twitter: "https://twitter.com/KeozBEAST",
        facebook: "",
        twitch: "",
        channel: "",
        youtube: "",
        instagram: "https://www.instagram.com/nicolas_dgus"
    },
    { 
        name: "Sneaky",
        image: "img/streamers/sneaky.jpg",
        twitter: "https://twitter.com/LOSC_Sneaky",
        facebook: "",
        twitch: "https://www.twitch.tv/sneakyfut",
        channel: "https://www.twitch.tv/sneakyfut",
        youtube: "https://www.youtube.com/channel/UClym-4YXoF_fqwxkcLJ_TSg",
        instagram: "https://www.instagram.com/sneaky83"
    },
    { 
        name: "DRG",
        image: "img/streamers/drg.jpg",
        twitter: "https://twitter.com/DRG_FN",
        facebook: "",
        twitch: "https://www.twitch.tv/drg_fn",
        channel: "https://www.twitch.tv/drg_fn",
        youtube: "https://www.youtube.com/channel/UC2lDA_QTFcEKlXcDDNiW0NA",
        instagram: "https://www.instagram.com/vitality_drg"
    },
    { 
        name: "Rayane",
        image: "img/streamers/rayane.jpg",
        twitter: "https://twitter.com/KingOfDurum",
        facebook: "",
        twitch: "https://www.twitch.tv/llrayanell",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Xnick3lz",
        image: "",
        twitter: "https://twitter.com/xnick3lz",
        facebook: "",
        twitch: "https://www.twitch.tv/xnick3lz",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "https://www.youtube.com/channel/UCjFW32uVlr44_0HxiX2hG9w",
        instagram: ""
    },
    { 
        name: "MGM",
        image: "img/streamers/mgm.jpg",
        twitter: "",
        facebook: "",
        twitch: "https://www.twitch.tv/mgmsenium",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Mangore",
        image: "img/streamers/mangore.jpg",
        twitter: "https://twitter.com/MangoreTV",
        facebook: "https://www.facebook.com/MangoreTV",
        twitch: "https://www.twitch.tv/mangore",
        channel: "https://www.twitch.tv/mangore",
        youtube: "https://www.youtube.com/channel/UC5R3UTlkwLqR87e1ZlSPZgg",
        instagram: "https://www.instagram.com/mangorefoodtv"
    },
    { 
        name: "KitchAAAA",
        image: "img/streamers/kitchAAAA.jpg",
        twitter: "https://twitter.com/kitchaaaacsgo",
        facebook: "https://www.facebook.com/kitchaaaaa",
        twitch: "https://www.twitch.tv/KitchAAAA",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Roknar",
        image: "img/streamers/roknar.jpg",
        twitter: "https://twitter.com/roknarr",
        facebook: "https://www.facebook.com/MsRoknar",
        twitch: "https://www.twitch.tv/roknar",
        channel: "https://www.twitch.tv/roknar",
        youtube: "https://www.youtube.com/user/MsRoknar",
        instagram: ""
    },
    { 
        name: "Emiox", 
        image: "img/streamers/emiox.jpg",
        twitter: "https://twitter.com/emioxx",
        facebook: "",
        twitch: "https://www.twitch.tv/emiox",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "TeufeurS", 
        image: "img/streamers/teufeurs.jpg",
        twitter: "https://twitter.com/TeufeurSoff",
        facebook: "",
        twitch: "https://www.twitch.tv/Teuf",
        channel: "https://www.twitch.tv/Teuf",
        youtube: "https://www.youtube.com/channel/UCjak-4N_vAV-TI-yN24nvIA",
        instagram: "https://www.instagram.com/teufeurs_live"
    },
    { 
        name: "JL Guizzi",
        image: "img/streamers/guizzi.jpg",
        twitter: "https://twitter.com/Guizzi_Youtube",
        facebook: "https://www.facebook.com/MamyGuiZzi",
        twitch: "https://www.twitch.tv/guizzi_",
        channel: "https://www.twitch.tv/guizzi_",
        youtube: "https://www.youtube.com/channel/UCoJ026Oq_sNJr-4UWESW5eg",
        instagram: "https://www.instagram.com/guizzi_"
    },
    { 
        name: "Kalinko",
        image: "img/streamers/kalinko.jpg",
        twitter: "https://twitter.com/KalinkoNico",
        facebook: "",
        twitch: "https://www.twitch.tv/nicokalinko",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Scydark",
        image: "img/streamers/scydark.jpg",
        twitter: "https://twitter.com/ScyDark",
        facebook: "",
        twitch: "https://www.twitch.tv/scydark",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Thibuzor",
        image: "img/streamers/thibu.jpg",
        twitter: "https://twitter.com/thibuzor",
        facebook: "",
        twitch: "https://www.twitch.tv/thibuzor",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Exlelite",
        image: "img/streamers/exlelite.jpg",
        twitter: "https://twitter.com/exl_elite06",
        facebook: "",
        twitch: "https://www.twitch.tv/exlelite",
        channel: "https://www.twitch.tv/exlelite",
        youtube: "https://www.youtube.com/c/exlelite06",
        instagram: ""
    },
    { 
        name: "Yoma",
        image: "img/staff/marco.jpg",
        twitter: "https://twitter.com/WastedYoma",
        facebook: "",
        twitch: "https://www.twitch.tv/wastedyoma",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "https://www.youtube.com/user/miniyoma",
        instagram: ""
    },
    { 
        name: "Romanitou",
        image: "img/staff/romain.jpg",
        twitter: "https://twitter.com/RomRomanitou",
        facebook: "https://www.facebook.com/RomRomanitou",
        twitch: "https://www.twitch.tv/romanitou",
        channel: "https://www.twitch.tv/spawnstudio",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Areliann",
        image: "img/streamers/areliann.jpg",
        twitter: "https://twitter.com/areliannn",
        facebook: "https://www.facebook.com/areliann",
        twitch: "https://www.twitch.tv/areliann",
        channel: "https://www.twitch.tv/areliann",
        youtube: "https://www.youtube.com/channel/UChaonIpYNG1TkPVUtzWRjjQ",
        instagram: "https://www.instagram.com/areliannn"
    }
];

streamerData.sort((a, b) => (( a.name.toLowerCase() > b.name.toLowerCase())) ? 1 : -1);
streamerData.map(createNewBox);

function createNewBox(data) {
    if (data.name){
        let newBox = streamerBox.cloneNode(true),
        boxAvatar = newBox.querySelector('.avatar'),
        boxName = newBox.querySelector('.name'),
        socials = newBox.querySelector('.socials-icons'),
        keys = Object.keys(data);
        
        keys.forEach(key => {
            if (key != 'name' && key != 'img') {
                if (data[key] != "") {
                    let link = socials.querySelector(`.fa-${key}`);
                    if (link){
                        link.href = data[key];
                        link.target = "_blank";
                    }
                } else {
                    let link = socials.querySelector(`.fa-${key}`);
                    if (link){
                        link.classList.add('hide');
                    }
                }
            }
        });
        boxAvatar.style.backgroundImage = `url('${data.image ? data.image : "img/default.jpg"}')`;
        boxName.innerHTML = data.name;
        streamerHolder.appendChild(newBox);
        newBox.classList.remove('hide');
    }
}
