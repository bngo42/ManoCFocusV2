const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.DEV_PORT || 8080;

app.use(cors());
app.listen(port);

//Global Parameters
let showTweets = false;
let showMessage = {state: false, msg: "", duration: 1000};


app.get('/', (req, res) => {
    res.send("Hello World !");
});

app.get('/message/update', (req, res) => {
    let state = req.query.state;
    let msg = req.query.msg;
    let duration = req.query.duration;
    
    showMessage.state = state;
    if (duration)
        showMessage.msg = duration;
    if (msg)
        showMessage.msg = msg;
    
    if (state){
        timeout(showMessage.duration).then(() => {
            showMessage.state = false;
        });
    }
});


app.get ('/tweets/active', (req, res) => {
    res.send(showTweets ? 'Tweets are enabled' : 'Tweets are disabled');
});

app.get('/tweets/:state', (req, res) => {
    let state = req.params.state;

    if (state && state == 'on'){
        showTweets = true;
    } else if (state && state == 'off') {
        showTweets = false;
    }
    res.send('OK' || 'error');
});


function timeout(duration) {
    return new Promise((resolve, reject) => {
        let timer = setTimeout(() => {
            clearInterval(timer);
            resolve();
        }, duration);
    });
}
