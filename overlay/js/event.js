const url = "http://localhost:8080";

let msgSender = document.querySelector('.msg-sender');
let input = msgSender.querySelector('textarea');
let length = msgSender.querySelector('.length');

let uniqueTweet = document.querySelector('.uniq-tweet');


function enableTweets() {
    request("GET", url + '/tweets/on')
        .then(showResponse)
        .catch(showError);
}

function disableTweets() {
    request("GET", url + '/tweets/off')
        .then(showResponse)
        .catch(showError);
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

function showTweet() {
    if (uniqueTweet.value != "") {
        console.log(uniqueTweet.value);
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