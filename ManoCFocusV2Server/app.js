const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.DEV_PORT || 8080;

app.use(cors());
app.listen(port);

//Global Parameters
let showTweets = false;
let showMessage = {state: false, msg: "", duration: 1000};
let showCard = false;


app.get('/', (req, res) => {
    res.send({showTweets, showMessage, showCard});
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
