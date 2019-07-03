let spinner = document.querySelector('.spinner');
let tweetBox = document.querySelector('.tweet-list .tweet-box');
let tweet_feed = [];
let index = 0;
setInterval(() => {
    if (index == tweet_feed.length) {
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
        updateTweet(tweet_feed[index]);
    }

    if (tweet_feed.length > 0 && !spinner.classList.contains("hide")) {
        spinner.classList.add("hide");
    }
    
}, 5000);


function updateTweet(data) {
    let avatar = tweetBox.querySelector('.avatar img');
    let content = tweetBox.querySelector('.tweet-content');
    let username = content.querySelector('.username');
    let text = content.querySelector('.text');

    tweetBox.href = `http://twitter.com/${data.user.username}/status/${data.id_str}`;
    avatar.src = replaceUrl(data.user.picture);
    username.innerHTML = `@${data.user.username}`;
    text.innerHTML = data.content;
    tweetBox.classList.remove('hide');
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