let liveFeed = document.querySelector('#twitch-embed');
let liveButtons = document.querySelectorAll(".streamers-btn");

updateLiveStream("manonolita");
liveButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        removeActive();
        updateLiveStream(e.target.dataset.name);
        e.target.classList.add('active');
    });
}); 

function removeActive(){
    let active = document.querySelector('.streamers-btn.active');
    active.classList.remove('active');
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