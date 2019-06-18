const express = require('express');
const cors = require('cors');
const twitter = require('node-tweet-stream');
const app = express();
const port = process.env.DEV_PORT || 8080;

app.use(cors());
app.listen(port);

const search_limit = 20;
const trackedWord = 'putain';

let search_count = 0;
let tweets = new twitter({
    consumer_key: process.env.consumer_key || '2g2I3k9IigJPDW2fSg6gDGagw',
    consumer_secret: process.env.consumer_secret || '8WgDHbcfk3NVWiXtJFdHEnekqYSRdE55VCC5qfGo2DgRPdCQzA',
    token: process.env.token || '62844479-4KAdVjdocQlah9RklJDltoKNQ7EgjcnkpQxRU7qhu',
    token_secret: process.env.token_secret || 'Fje4ipPlxCZX28Oi0moqOI3JZIb4wFP4RUDR6ZILBpn4m'
});
let tweets_feed = [];
let tweets_stack = [];


tweets.untrackAll();
tweets.language('fr');
tweets.track(trackedWord);
tweets.on('tweet', tweet => {
    search_count++;
    if (search_count >= search_limit){
        tweets.untrack(trackedWord);
        console.log(`Stop tracking ${trackedWord}`);
        timeout(30000).then(() => {
            tweets.track(trackedWord);
            search_count = 0;
            console.log(`Started tracking ${trackedWord}`);
        });
    }
    if (!tweet.retweeted_status){
        console.log("Getting tweet !");
        tweets_feed.push({
            username: tweet.user.screen_name,
            content: tweet.text
        });
    }
});

//Global Parameters
let showTweets = false;
let showMessage = {state: false, msg: "", duration: 1000};
let showCard = false;


app.get('/', (req, res) => {
    res.send({
        showTweets,
        showMessage,
        showCard,
        tweets: JSON.stringify(tweets_stack)
    });
    if (tweets_stack.length > 0) { tweets_stack = []; }
});

app.get('/tweets', (req, res) => {
    res.send(tweets_feed);
    tweets_feed = [];
});

app.get('/tweets/stack', (req, res) => {
    let username = req.query.username;
    let content = req.query.content;

    if (username && content) {
        tweets_stack.push({username, content});
        console.log(tweets_stack);
        res.send("data added !");
    }
});

app.get('/message/update', (req, res) => {
    if (!showMessage.state) {
        let state = req.query.state;
        let msg = req.query.msg;
        let duration = parseInt(req.query.duration) * 1000;
        
        showMessage.state = state;
        if (duration > 0)
        showMessage.duration = duration;
        if (msg)
        showMessage.msg = msg;
        
        if (state && msg != ""){
            timeout(showMessage.duration).then(() => {
                showMessage.state = false;
                timeout(1000).then(() => { showMessage.msg = "" });
            });
            res.send('Message sent');
        }
    } else {
        res.send("Already displaying message");
    }
});

app.get('/panel/:state', (req, res) => {
    let state = req.params.state;

    if (state && state == 'on'){
        showCard = true;
    } else if (state && state == 'off') {
        showCard = false;
    }
    res.send(`Panel ${(showCard) ? 'Activé' : 'Désactivé'}` || 'error');
});

app.get('/tweets/:state', (req, res) => {
    let state = req.params.state;

    if (state && state == 'on'){
        showTweets = true;
    } else if (state && state == 'off') {
        showTweets = false;
    }
    res.send(`Tweets ${(showTweets) ? 'Activés' : 'Désactivés'}` || 'error');
});


function timeout(duration) {
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            clearInterval(timer);
            resolve();
        }, duration);
    });
}
