document.addEventListener("DOMContentLoaded", function() {

    actualitzarPodium();
    actualizarBlog();
})

function actualitzarPodium() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS/3")
        .then(resposta => resposta.json())
        .then(dades => printUsuaris(dades))
        .catch(error => console.log(error));
}

function actualizarBlog() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS")
        .then(resposta => resposta.json())
        .then(dades => printPosts(dades))
        .catch(error => console.log(error));
}

function printPosts(posts) {

    const postlist = document.getElementById("post-list");

    for (let i = 0; i < 3; i++) {

        let p = document.createElement("p");
        let h4 = document.createElement("h4");
        let div = document.createElement("div");
        let article = document.createElement("article");
        let ampli = false;

        p.classList.add("m-1");
        h4.classList.add("m-1");
        article.classList.add("post-item", "row", "j-start", "a-start", "g-1", "p-1", "m-2");

        p.textContent = `${posts.data[i].content.slice(0, 99)}...` 

        h4.textContent = posts.data[i].title;

        div.appendChild(h4);
        div.appendChild(p);
        article.appendChild(div);

        article.addEventListener("click", function() {
            if (!ampli) {
                p.textContent = posts.data[i].content;
            } else {
                p.textContent = `${posts.data[i].content.slice(0, 99)}...`
            }
            ampli = !ampli;
        })

        postlist.appendChild(article);
    }
}

function printUsuaris(usuaris) {

    let top1 = document.getElementById("top1");
    let top2 = document.getElementById("top2");
    let top3 = document.getElementById("top3");
    let tops = [top1, top2, top3];
    tops.forEach((valor, index) => {
        valor.textContent = usuaris.data[index].name
    })
}