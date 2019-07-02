setInterval(() => {
    fetch("https://manocf-server.herokuapp.com/tweets").then(res => {
        res.json().then(datas => {
            console.log(datas);
        });
    }).catch(console.error);
}, 10500)