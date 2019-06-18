const url = "http://localhost:8080";

let msgSender = document.querySelector('.msg-sender');
let input = msgSender.querySelector('textarea');
let length = msgSender.querySelector('.length');

let uniqueTweet = document.querySelector('.uniq-tweet');

function retrieveTweets() {
    return new Promise((resolve, reject) => {
        let req_headers = new Headers({
            'Access-Control-Allow-Origin': '*'
        });

        let options = {
            headers : req_headers,
            method: 'GET',
            mode: 'cors'
        };

        fetch(url + '/tweets', options)
            .then(resolve)
            .catch(reject);
    });
}

function enableSocialPanel() {
    request("GET", url + '/panel/on')
        .then(showResponse)
        .catch(showError);
}

function disableSocialPanel() {
    request("GET", url + '/panel/off')
        .then(showResponse)
        .catch(showError);
}

function updateMessage(msg, duration) {
    request("GET", url + '/message/update', {state: true, msg, duration})
        .then(showResponse)
        .catch(showError);
}

function sendMessage() {
    if (input.value != "" && length.value > 0){
        updateMessage(input.value, length.value);
        input.value = "";
    }
}

setInterval(() => {
    retrieveTweets().then(response => {
        response.json().then(res => {
            if (res.length > 0)
                res.forEach(addTweet);
        });
    }).catch(console.error);
}, 1000);

function addTweet(data) {

    let username = data.username;
    let msg = data.content;

    if (username && msg) {
        let tweetBox = document.querySelector('.tweet-item');
        let newBox = tweetBox.cloneNode(true);

        if (newBox) {
            let name = newBox.querySelector('.tweet-item-name');
            let content = newBox.querySelector('.tweet-item-content');
            let holder = document.querySelector('.tweets-holder');

            name.innerHTML = '@' + username;
            content.innerHTML = msg;

            newBox.onclick = () => {
                console.log(data);
                request('GET', url + '/tweets/stack', {username, content: data.content})
                    .then(res => {
                        newBox.remove();
                    })
                    .catch(console.error);
            };
            newBox.classList.remove('hidden');
            holder.append(newBox);
        }
    }
}

function showResponse(res) {
    showAlert(res, "success");
}

function showError(err) {
    showAlert(err, "error");
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
