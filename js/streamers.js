let streamerBox = document.querySelector('.streamer-box');
let streamerHolder = document.querySelector('#streamers .box-list');

let streamerData = [
    { 
        name: "Manonolita",
        image: "img/streamers/manonolita.jpg",
        twitter: "https://twitter.com/Manonolita14",
        facebook: "https://www.facebook.com/Manonolita/",
        twitch: "https://www.twitch.tv/manonolita",
        youtube: "https://www.youtube.com/channel/UClspNpF3EziJG9h_JaDTBmQ",
        instagram: "https://www.instagram.com/manonolita/"
    },
    { 
        name: "Packam",
        image: "img/streamers/packam.jpg",
        twitter: "https://twitter.com/LosPackamos",
        facebook: "https://www.facebook.com/Packamily",
        twitch: "https://www.twitch.tv/packam",
        youtube: "https://www.youtube.com/user/MrPackam",
        instagram: "https://www.instagram.com/los_packam/"
    },
    { 
        name: "aMythïcs",
        image: "img/streamers/amythics.jpg",
        twitter: "https://twitter.com/anthonymacaigne",
        facebook: "https://www.facebook.com/mythicsStream",
        twitch: "https://www.twitch.tv/amythics",
        youtube: "",
        instagram: ""
    },
    
    { 
        name: "Ordwaitgame",
        image: "img/streamers/ordwait.jpg",
        twitter: "https://twitter.com/ordwaitgame",
        facebook: "https://www.facebook.com/ordwaittwitch",
        twitch: "https://www.twitch.tv/ordwait",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Cruella",
        image: "img/streamers/cruella.jpg",
        twitter: "https://twitter.com/cruelladk",
        facebook: "",
        twitch: "https://www.twitch.tv/cruelladk",
        youtube: "https://www.youtube.com/channel/UCp0qQWS1udpRvKcMDPGp96g",
        instagram: "https://www.instagram.com/cruelladk"
    },
    { 
        name: "Lonï",
        image: "img/streamers/loni.jpg",
        twitter: "https://twitter.com/Ioni_lol",
        facebook: "",
        twitch: "https://www.twitch.tv/ioni_lol",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Taour",
        image: "img/streamers/taour.jpg",
        twitter: "https://twitter.com/Taourrr1030",
        facebook: "https://www.facebook.com/Taour-811826002214398",
        twitch: "https://www.twitch.tv/taourrr1030",
        youtube: "https://www.youtube.com/c/Taourrr1030",
        instagram: ""
    },
    { 
        name: "Tsu",
        image: "img/streamers/tsu.jpg",
        twitter: "https://twitter.com/TsuVideos",
        facebook: "",
        twitch: "https://www.twitch.tv/tsuvideo",
        youtube: "https://www.youtube.com/channel/UCO1ahLP9kaeQUm18wPdNy0A",
        instagram: ""
    },
    { 
        name: "Skykhouqua",
        image: "img/streamers/skykhouqua.jpg",
        twitter: "https://twitter.com/Skykhouqua",
        facebook: "",
        twitch: "https://www.twitch.tv/skykhoqua",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Misutaaa",
        image: "img/streamers/misutaaa.jpg",
        twitter: "https://twitter.com/misutaaacsgo",
        facebook: "",
        twitch: "https://www.twitch.tv/misutaaa",
        youtube: "https://www.youtube.com/channel/UCCs3ONPa7D5pLSUJVzIaxJw",
        instagram: "https://www.instagram.com/misutaaaCSGO"
    },
    { 
        name: "iDex",
        image: "img/streamers/idex.jpg",
        twitter: "https://twitter.com/iDexCsgo",
        facebook: "",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    { 
        name: "beyAz",
        image: "img/streamers/beyAz.jpg",
        twitter: "https://twitter.com/beyAzCSGO",
        facebook: "",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Ex6TenZ",
        image: "img/streamers/ex6tenzzz.jpg",
        twitter: "https://twitter.com/Ex6TenZZZ",
        facebook: "",
        twitch: "",
        youtube: "",
        instagram: "https://www.instagram.com/ex6tenz1337"
    },
    { 
        name: "maleK",
        image: "img/streamers/malek.jpg",
        twitter: "https://twitter.com/malekCSGO",
        facebook: "",
        twitch: "https://www.twitch.tv/malek_csgo",
        youtube: "https://www.youtube.com/maleKCSGO",
        instagram: "https://www.instagram.com/malek_csgo"
    },
    { 
        name: "Lucki",
        image: "",
        twitter: "",
        facebook: "",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Rayane",
        image: "img/streamers/rayane.jpg",
        twitter: "",
        facebook: "",
        twitch: "",
        youtube: "",
        instagram: ""
    },
    { 
        name: "MGM",
        image: "",
        twitter: "",
        facebook: "",
        twitch: "https://www.twitch.tv/mgmsenium",
        youtube: "",
        instagram: ""
    },
    { 
        name: "CélestinRL",
        image: "img/streamers/célestinRL.jpg",
        twitter: "https://twitter.com/CelestinRL",
        facebook: "",
        twitch: "https://www.twitch.tv/CelestinRL",
        youtube: "",
        instagram: ""
    },
    { 
        name: "KitchAAAA",
        image: "img/streamers/kitchAAAA.jpg",
        twitter: "https://twitter.com/kitchaaaacsgo",
        facebook: "https://www.facebook.com/kitchaaaaa",
        twitch: "https://www.twitch.tv/KitchAAAA",
        youtube: "",
        instagram: ""
    },
    { 
        name: "Roknar",
        image: "img/streamers/roknar.jpg",
        twitter: "https://twitter.com/roknarr",
        facebook: "https://www.facebook.com/MsRoknar",
        twitch: "https://www.twitch.tv/roknar",
        youtube: "https://www.youtube.com/user/MsRoknar",
        instagram: ""
    },
    { 
        name: "Emie", 
        image: "img/streamers/emie.jpg",
        twitter: "https://twitter.com/Emieandco",
        facebook: "https://www.facebook.com/EmieOfficiel",
        twitch: "https://www.twitch.tv/emieandco",
        youtube: "https://www.youtube.com/emieandco",
        instagram: "https://www.instagram.com/emieandco"
    },
    
    { 
        name: "JL Guizzi",
        image: "img/streamers/guizzi.jpg",
        twitter: "https://twitter.com/Guizzi_Youtube",
        facebook: "https://www.facebook.com/MamyGuiZzi",
        twitch: "https://www.twitch.tv/guizzi_",
        youtube: "https://www.youtube.com/channel/UCoJ026Oq_sNJr-4UWESW5eg",
        instagram: "https://www.instagram.com/guizzi_"
    }
];

streamerData.sort((a, b) => ((b.name.toLowerCase() == 'manonolita' || a.name.toLowerCase() > b.name.toLowerCase())) ? 1 : -1);
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