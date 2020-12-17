var url = new URLSearchParams(window.location.search);

if (url.has("id")) {
    console.log(url.get("id"));
    fetch(`https://osteapi-nadja.herokuapp.com/api/v1/cheeses/${url.get("id")}`)
        .then(res => res.json())
        .then(function(data) {
            //console.log(data);
            document.querySelector(".name").innerText = data.name;
            document.querySelector(".weight").innerText = data.weight + "g";
            document.querySelector(".strength").innerText = data.strength;
            document.querySelector(".brand").innerText = data.brand;
        })
    };