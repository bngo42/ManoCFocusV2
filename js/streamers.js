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
        name: "JL Guizzi",
        image: "img/streamers/guizzi.jpg",
        twitter: "https://twitter.com/Guizzi_Youtube",
        facebook: "https://www.facebook.com/MamyGuiZzi",
        twitch: "https://www.twitch.tv/guizzi_",
        youtube: "https://www.youtube.com/channel/UCoJ026Oq_sNJr-4UWESW5eg",
        instagram: "https://www.instagram.com/guizzi_"
    }
];

streamerData.sort((a, b) => (a.name > b.name) ? 1 : -1);
streamerData.map(createNewBox);

function createNewBox(data) {
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
    boxAvatar.style.backgroundImage = `url('${data.image}')`;
    boxName.innerHTML = data.name;
    streamerHolder.appendChild(newBox);
    newBox.classList.remove('hide');
}