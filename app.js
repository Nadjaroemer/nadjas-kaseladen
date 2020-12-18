var url = new URLSearchParams(window.location.search);
var offset = url.get("offset") ? url.get("offset") : 0;

var nextOffset, prevOffset;

var nextPage = document.querySelector(".nextPage");
var previousPage = document.querySelector(".previousPage");

//previousPage.remove();
fetch(`https://osteapi-nadja.herokuapp.com/api/v1/cheeses?offset=${offset}`)
    .then(res => res.json())
    .then(function(data) {
        let maxOffset = data.count - (data.count % 5);//Math.ceil runder op til det nærmeste hele tal

        nextOffset = offset >= maxOffset ? maxOffset : parseInt(offset) + 5; //Ternery Operator

        prevOffset = offset <= 0 ? 0 : parseInt(offset) - 5;

        nextPage.href = `?offset=${(nextOffset)}`;
        previousPage.href = `?offset=${(prevOffset)}`
        
        let template = document.querySelector("#products");
        let cheeseList = document.querySelector(".cheeseList");

        data.results.forEach(function(result) {

            let clone = template.content.cloneNode(true);
            clone.querySelector(".cheeses").innerText = result.name;
            clone.querySelector(".cheeses").href = `./cheese.html?id=${result._id}`;
            cheeseList.appendChild(clone);
        })
    })
