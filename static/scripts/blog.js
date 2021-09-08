function openFile(file, callback) {
    var requests = new XMLHttpRequest();
    requests.overrideMimeType("application/json");
    requests.open("GET", file, true);
    requests.onreadystatechange = function() {
        if (requests.readyState === 4 && requests.status == "200") {
            callback(requests.responseText);
        }
    }
    requests.send(null);
}

window.onload = function() {
    loadArticles();
    loadArticle(0);
};

function loadArticles() {
    var contentBar = document.getElementById("contentBar");
    var inner = "<h2>Articles</h2>";

    openFile("/static/data/articles.json", function(text) {
        var data = JSON.parse(text);
        for (const [key, value] of Object.entries(data)) {
            inner += `<a onclick="loadArticle(${value["id"]})">${key}</a>`;
        }
    contentBar.innerHTML = inner;
    });
}

function loadArticle(id) {
    var article = document.getElementById("article");
    var inner = "";

    openFile("/static/data/articles.json", function(text) {
        var path;
        var data = JSON.parse(text);

        for (const [key, value] of Object.entries(data)) {
            if (value['id'] == id) {
                path = `article-${id}`
                inner += `<h2>${key}</h2>`
            }
        }

        openFile(`/static/articles/${path}/content.txt`, function(text) {
            article.innerHTML += `${text}`
        });
        article.innerHTML = inner;
    });
}
