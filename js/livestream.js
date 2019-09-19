let liveFeed = document.querySelector('#twitch-embed'),
    buttonsHolder = document.querySelector('.streamers-list'),
    liveButton = document.querySelector(".streamers-btn"),
    isListed = false;

  
let inter = setInterval(() => {
    if (streamerData && !isListed){
        updateStreamerList();
        clearInterval(inter);
    }
}, 500);


function updateStreamerList() {
    streamerData.forEach(user => {
        if (user.name && user.twitch){
            let newBtn = liveButton.cloneNode(true);
            newBtn.innerHTML = user.name;
            newBtn.addEventListener('click', e => {
                removeActive();
                updateLiveStream(name);
                e.target.classList.add('active');
            });
            let name = extractName(user.twitch);
            newBtn.classList.remove('hidden');
            if (user.name.toLowerCase() == 'manonolita') {
                newBtn.classList.add('active');
            }
            buttonsHolder.appendChild(newBtn);
        }
    });
}

function extractName(url) {
    return url.replace("https://www.twitch.tv/", "");
}

updateLiveStream("manonolita");

function removeActive(){
    let active = document.querySelector('.streamers-btn.active');
    if (active){
        active.classList.remove('active');
    }
}

function updateLiveStream(channelName){
    if (liveFeed.childElementCount > 0){
        liveFeed.removeChild(liveFeed.firstChild);
    }
    new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: 480,
        channel: channelName,
        layout: "video"
    });
}