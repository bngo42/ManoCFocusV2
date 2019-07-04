let spinner = document.querySelector('.spinner');
let tweetBox = document.querySelector('.tweet-list .tweet-box');

let avatar = tweetBox.querySelector('.avatar img'),
    content = tweetBox.querySelector('.tweet-content'),
    username = content.querySelector('.username'),
    text = content.querySelector('.text');

let tweet_feed = [],
    index = 0;

setInterval(() => {
    if (tweet_feed.length == 0 || index >= (tweet_feed.length - 1)) {
        console.log("loading new tweets...");
        retrieveTweet().then(res => {
            if (res.length == 0){
                index = 0;
            }
            for (let i = (res.length - 1); i >= 0; i--) {
                if (!tweet_feed.find(data => { return data.id == res[i].id })){
                    tweet_feed.push(res[i]);
                }
            }
        });
    } else {
        index++;
        if (tweet_feed[index]){
            updateTweet(tweet_feed[index]);
        }
    }

    if (tweet_feed.length > 0 && !spinner.classList.contains("hide")) {
        spinner.classList.add("hide");
    }
    
}, 5000);


function updateTweet(data) {
    if (data) {
        tweetBox.href = `http://twitter.com/${data.user.username}/status/${data.id_str}`;
        avatar.src = replaceUrl(data.user.picture);
        username.innerHTML = `@${data.user.username}`;
        text.innerHTML = data.content;
        tweetBox.classList.remove('hide');
    }
}


function retrieveTweet() {
    return new Promise((resolve, reject) => {
        fetch("https://manocf-server.herokuapp.com/tweets").then(res => {
            res.json().then(resolve);
        }).catch(reject);
    });
}

function replaceUrl(url) {
    return url.replace('normal', '400x400');
}