let streamerBox = document.querySelector('.streamer-box');
let streamerHolder = document.querySelector('#streamers .box-list');

let streamerData = [
    { 
        name: "Manonolita",
        url: "https://www.twitch.tv/manonolita",
        avatar: "img/streamers/manonolita.jpg"
    },
    { 
        name: "Packam",
        url: "https://www.twitch.tv/packam",
        avatar: "img/streamers/packam.jpg"
    }
];

streamerData.sort((a, b) => (a.name > b.name) ? 1 : -1);
streamerData.map(createNewBox);

function createNewBox(data) {
    let newBox = streamerBox.cloneNode(true);
    let boxAvatar = newBox.querySelector('.avatar');
    let boxName = newBox.querySelector('.name');
    
    newBox.addEventListener('click', e => {
        e.stopPropagation();
        window.open(data.url, "_blank");
    });
    boxAvatar.style.backgroundImage = `url('${data.avatar}')`;
    boxName.innerHTML = data.name;
    streamerHolder.appendChild(newBox);
    newBox.classList.remove('hide');
}