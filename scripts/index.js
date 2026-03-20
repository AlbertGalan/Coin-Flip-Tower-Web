document.addEventListener("DOMContentLoaded", function() {

    actualitzarPodium();
    actualizarBlog();
})

function actualitzarPodium() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS/3")
        .then(resposta => resposta.json())
        .then(dades => pintarUsuaris(dades))
        .catch(error => console.log(error));
}

function actualizarBlog() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS")
        .then(resposta => resposta.json())
        .then(dades => pintarPosts(dades))
        .catch(error => console.log(error));
}

function pintarPosts(posts) {

    const postlist = document.getElementById("post-list");

    console.log(posts);

    for (let i = 0; posts.data.length; i++) {
        
        //Estructura HTML


    }
}

function pintarUsuaris(usuaris) {

    let top1 = document.getElementById("top1");
    let top2 = document.getElementById("top2");
    let top3 = document.getElementById("top3");
    let tops = [top1, top2, top3];
    tops.forEach((valor, index) => {
        valor.textContent = usuaris.data[index].name
    })
}