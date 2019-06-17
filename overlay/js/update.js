const url = "http://localhost:8080";
const refreshRate = 500;

let msgAlert = document.querySelector('.message-alert');

let tweetBox = document.querySelector('.tweet-box');
let tweetUsername = tweetBox.querySelector('.name');
let tweetContent = tweetBox.querySelector('.tweet-content');
let tweetRefresher = null, tweet_feed = [], feed_active = false;

let panel = document.querySelector('.social-panel');
let panelText = panel.querySelector('.text-overlay');
let panelEnabled = false, panelIndex = 0, contentIndex = 0;
let panelDatas = [
    {
        background: "img/discord.png",
        texts : [
            "Rejoignez mon discord !",
            "discord.gg/Ub5emn6"
        ]
    },
    {
        background: "img/twitter.png",
        texts : [
            "Suivez moi sur twitter !",
            "@manonolita14"
        ]
    },
    {
        background: "img/childfocus.png",
        texts : [
            "Faites un don !",
            "Lien dans la description"
        ]
    }
];


refreshTweet();

function refreshTweet() {
    tweetRefresher = setInterval(() => {
        retrieveTweets().then(res => {
            let data = JSON.parse(res);
            if (data.length > 0){
                console.log('join data');
                tweet_feed = tweet_feed.concat(data);
            }
            if (tweet_feed.length > 0 && !feed_active) {
                feed_active = true;
                animateTweets();
                clearInterval(tweetRefresher);
            }
        }).catch(console.error);
    }, 1000);

}

function animateTweets() {
    if (!tweet_feed[0]){
        feed_active = false;
        refreshTweet();
    }
    displayTweet(tweet_feed[0].username, tweet_feed[0].content)
    .then(() => {
        tweet_feed = tweet_feed.shift();
        if (tweet_feed.length == 0) {
                feed_active = false;
                refreshTweet();
            }
            animateTweets();
        });
}

function panelAnimation() {
    updatePanelBackground(panelDatas[panelIndex].background);
    updatePanelText(panelDatas[panelIndex].texts[contentIndex]).then(() => {
        timeout(1500).then(() => {
            contentIndex++;
            if (contentIndex >= panelDatas[panelIndex].texts.length){
                contentIndex = 0;
                panelIndex++;
                if (panelIndex >= panelDatas.length){
                    panelIndex = 0;
                }
            }
            if (panelEnabled)
                fadeOut(panelText).then(panelAnimation);
        });
    });
}


let refresher = setInterval(() => {
    getStates().then(res => {
        let data = JSON.parse(res);
        if (data) {
            updateAlerter(data.showMessage.msg, data.showMessage.state);
            updatePanel(data.showCard);
        }
    }).catch(console.error);
}, refreshRate);

function retrieveTweets() {
    return new Promise((resolve, reject) => {
        request("GET", url + '/tweets')
            .then(resolve)
            .catch(reject);
    });
}

function getStates() {
    return new Promise((resolve, reject) => {
        request("GET", url)
            .then(resolve)
            .catch(reject);
    });
}

function request(method, url, params = {}){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url + '?' + serialize(params), true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200){
                resolve(xhr.responseText);
            }
        };
        xhr.onerror = () => {
            reject();
        };
        xhr.send()
    });
}

function serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}

function displayTweet(username, msg, duration = 1000) {
    return new Promise((resolve, reject) => {
        if (msg == "" || username == "")
            reject("No tweet data provided");
        tweetUsername.innerHTML = username;
        tweetContent.innerHTML = msg;
        fadeIn(tweetBox).then(() => {
            timeout(duration).then(() => {
                fadeOut(tweetBox).then(resolve);
            });
        });
    });
}


function updateAlerter(msg, state) {
    msgAlert.innerHTML = msg;
    if (state) 
        showElement(msgAlert);
    else
        hideElement(msgAlert);
}

function updatePanel(state){
    return new Promise((resolve, reject) => {
        if (state) {
            if (!panelEnabled){
                panelEnabled = true;
                panelAnimation();
            }
            showElement(panel).then(resolve);
        }
        else {
            panelEnabled = false;
            hideElement(panel).then(resolve);
        }
    });
}

function updatePanelText(msg) {
    return new Promise((resolve, reject) => {
        fadeOut(panelText).then(() => {
            panelText.innerHTML = msg;
            fadeIn(panelText).then(resolve);
        })
        .catch(reject);
    });
}

function showElement(elem) {
    return new Promise((resolve, reject) => {
        if (elem) {
            elem.classList.remove('hidden');
            elem.classList.add('show');
            setTimeout(resolve, 1000);
        } else {
            reject("No element specified");
        }
    });
}

function hideElement(elem) {
    return new Promise((resolve, reject) => {
        if (elem) {
            elem.classList.remove('show');
            elem.classList.add('hidden');
            setTimeout(resolve, 1000);
        } else {
            reject("No element specified");
        }
    });
}

function updatePanelBackground(url) {
    return new Promise((resolve, reject) => {
        if (url != "") {
            panel.style.background = `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 45%,rgba(0,0,0,0.2) 75%,rgba(0,0,0,0.2) 100%),url('${url}')`;
            panel.style.backgroundRepeat = "no-repeat";
            panel.style.backgroundPosition = "center";
            panel.style.backgroundSize = "cover";
            timeout(1000).then(resolve);
        } else {
            reject("No background provided");
        }
    });
}
