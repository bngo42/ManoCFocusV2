const url = "http://localhost:8080";

let button = document.querySelector('#testing');


function getState() {
    request("GET", url + '/tweets/active').then(res => {
       console.log(res);
    });
}

function enableTweets() {
    request("GET", url + '/tweets/on').then(res => {
       console.log("tweet enabled");
    });
}

function disableTweets() {
    request("GET", url + '/tweets/off').then(res => {
       console.log("tweet disabled");
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
