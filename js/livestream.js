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
        if (user.name && user.channel){
            let newBtn = liveButton.cloneNode(true);
            newBtn.innerHTML = user.name;
            newBtn.addEventListener('click', e => {
                removeActive();
                let mediaType = getType(user.channel);
                if (mediaType == 'twitch'){
                    updateLiveStream(name);
                } else if (mediaType == 'youtube'){
                    updateYoutubeStream(user.channel);
                }

                e.target.classList.add('active');
            });
            let name = extractTwitchName(user.channel);
            newBtn.classList.remove('hidden');
            if (user.name.toLowerCase() == 'manonolita') {
                newBtn.classList.add('active');
            }
            buttonsHolder.appendChild(newBtn);
        }
    });
}

function getType(url) {
    console.log('url', url);
    if (/twitch/.test(url)) {
        return 'twitch';
    } else if (/youtube/.test(url)) {
        return 'youtube';
    } else {
        return 'no plateform';
    }
}

function extractTwitchName(url) {
    return url.replace("https://www.twitch.tv/", "");
}

updateLiveStream("manonolita");

function removeActive(){
    let active = document.querySelector('.streamers-btn.active');
    if (active){
        active.classList.remove('active');
    }
}

function updateYoutubeStream(url){

    clearChild();

    let embeder = document.createElement('iframe');
    let channelId = url.replace("https://www.youtube.com/channel/", "");
    console.log(channelId);
    embeder.style.width = '100%';
    embeder.style.height = '480px';
    embeder.src = `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1`;
    embeder.frameBorder = '0';
    embeder.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    embeder.allowFullscreen = true;

    liveFeed.appendChild(embeder);
}

function updateLiveStream(channelName){
    clearChild();
    new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: 480,
        channel: channelName,
        layout: "video"
    });
}

function clearChild() {
    if (liveFeed.childElementCount > 0){
        liveFeed.removeChild(liveFeed.firstChild);
    }
}