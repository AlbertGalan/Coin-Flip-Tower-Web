import { validateBlog, validateUsers } from "../scripts/utilities.js";

document.addEventListener("DOMContentLoaded", function() {

    const coin = document.querySelector(".coin");
    const body = document.body;

    //Obtenir tema de la pagina i actualitzar-lo
    let clicked = false;
    let tema = JSON.parse(localStorage.getItem("Tema"));

    if (!tema) {
        body.classList.replace("light", "dark");
    }
    //NAHUEL HAZ QUE LA MONEDA GIRE AL CARGAR LA PAGINA
    coin.addEventListener("click", function() {
        if (clicked) return;
        clicked = true;
        
        
        coin.classList.add("fly");
        setTimeout(() => {
            if (body.classList.contains("light")) {
                body.classList.replace("light", "dark");
                localStorage.setItem("Tema", JSON.stringify(false))
            } else {
                body.classList.replace("dark", "light");
                localStorage.setItem("Tema", JSON.stringify(true))
            }
            coin.classList.remove("fly");
            clicked = false;
        }, 1760)
    })

    actualitzarPodium();
    actualizarBlog();

    setInterval(() => {
        actualitzarPodium();
    }, 300000);
})

function actualitzarPodium() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/uZl9WgoE59y7c3JTN0dyj7KUxkKNP0MpS2NM8msPOZ4eUEtusumqYRHubOGS/3")
        .then(resposta => resposta.json())
        .then(dades => {
            validateUsers(dades);
            printUsuaris(dades);
        })
        .catch(error => console.log(error));
}

function actualizarBlog() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/posts/uZl9WgoE59y7c3JTN0dyj7KUxkKNP0MpS2NM8msPOZ4eUEtusumqYRHubOGS")
        .then(resposta => resposta.json())
        .then(dades => {
            validateBlog(dades);
            printPosts(dades);
        })
        .catch(error => console.log(error));
}

function printPosts(posts) {

    const postlist = document.getElementById("post-list");

    for (let i = 0; (i < 3) && (i < posts.data.length); i++) {

        let divText = document.createElement("div");
        let h4 = document.createElement("h4");
        let div = document.createElement("div");
        let article = document.createElement("article");
        let ampli = false;

        divText.classList.add("m-1");
        h4.classList.add("m-1");
        article.classList.add("post-item", "row", "j-start", "a-start", "g-1", "p-1", "m-2");

        divText.innerHTML = `${posts.data[i].content.slice(0, 99)}...` 

        h4.textContent = posts.data[i].title;

        div.appendChild(h4);
        div.appendChild(divText);
        article.appendChild(div);

        article.addEventListener("click", function() {
            if (!ampli) {
                divText.innerHTML = posts.data[i].content;
            } else {
                divText.innerHTML = `${posts.data[i].content.slice(0, 99)}...`
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