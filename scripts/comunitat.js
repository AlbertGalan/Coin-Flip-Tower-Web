let usersPage = 1;
let opinionsPage = 1;
let usuaris = [];
let opinions = [];

document.addEventListener("DOMContentLoaded", function() {

    actualitzarPodium();
    actualitzarOpinions();
    const body = document.body;
    let tema = JSON.parse(localStorage.getItem("Tema"));

    if (!tema) {
        body.classList.replace("light", "dark");
    }
    

    const submitButton = document.getElementById("submit");
    const previousUsersPage = document.getElementById("previous-users-page");
    const nextUsersPage = document.getElementById("next-users-page");
    const previousOpinionsPage = document.getElementById("previous-opinions-page");
    const nextOpinionsPage = document.getElementById("next-opinions-page");

    previousUsersPage.addEventListener("click", function(event) {
        event.preventDefault();
        if (usersPage > 1) {
            usersPage--;
            printUsuaris(usuaris);

            //Comprovam si la pagina anterior és la primera, si ho és retiram el botó
            if (usersPage == 1) {
                previousUsersPage.style.display = "none";
            }
            nextUsersPage.style.display = "block";
        }
    })

    nextUsersPage.addEventListener("click", function(event) {
        event.preventDefault();
        if ((usuaris.data.length / 10) > (usersPage)) {
            usersPage++;
            printUsuaris(usuaris);

            // Comprovam si la seguent pagina és la darrera, si ho és retiram el botó
            if ((usuaris.data.length / 10) < (usersPage)) {
                nextUsersPage.style.display = "none";
            }
            previousUsersPage.style.display = "block";
        }
    })

    previousOpinionsPage.addEventListener("click", function(event) {
        event.preventDefault();
        if (opinionsPage > 1) {
            opinionsPage--;
            printOpinions(opinions);

            //Comprovam si la pagina anterior és la primera, si ho és retiram el botó
            if (opinionsPage == 1) {
                previousOpinionsPage.style.display = "none";
            }
            nextOpinionsPage.style.display = "block";
        }
    })

    nextOpinionsPage.addEventListener("click", function(event) {
        event.preventDefault();
        if ((usuaris.data.length / 10) > (opinionsPage)) {
            opinionsPage++;
            printOpinions(opinions);

            // Comprovam si la seguent pagina és la darrera, si ho és retiram el botó
            if ((usuaris.data.length / 10) < (opinionsPage)) {
                nextOpinionsPage.style.display = "none";
            }
            previousOpinionsPage.style.display = "block";
        }
    })

    submitButton.addEventListener("submit", function(event) {

        event.preventDefault();

        const nom = document.getElementById("nombre");
        const content = document.getElementById("comentario");

        const data = {
            api_token: "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS",
            name: nom.value,
            content: content.value
        }

        nom.value = "";
        content.value = "";

        fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => actualitzarOpinions())
            .catch(error => console.log(error))
    })
})

function actualitzarPodium() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS")
        .then(resposta => resposta.json())
        .then(dades => {
            printUsuaris(dades)
            printPodium(dades);
            usuaris = dades;
        })
        .catch(error => console.log(error));
}

function printUsuaris(usuaris) {

    const players = document.getElementById("player-list");
    let limitUsers = usersPage * 10;
    players.innerHTML = "";

    for (let  i = (limitUsers - 10); (i < limitUsers) && (i < usuaris.data.length); i++) {

        const tr = document.createElement("tr");
        const nom = document.createElement("td");
        const points = document.createElement("td");

        nom.textContent = (i + 1) + ". " + usuaris.data[i].name;
        points.textContent = usuaris.data[i].puntuacion;

        tr.appendChild(nom);
        tr.appendChild(points);

        players.appendChild(tr);
    }
}

function printPodium(usuaris) {

    let top1 = document.getElementById("top1");
    let top2 = document.getElementById("top2");
    let top3 = document.getElementById("top3");
    let tops = [top1, top2, top3];
    tops.forEach((valor, index) => {
        valor.textContent = usuaris.data[index].name
    })
}

function actualitzarOpinions() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS")
        .then(resposta => resposta.json())
        .then(dades => { 
            printOpinions(dades)
            opinions = dades;
        })
        .catch(error => console.log(error));
}

function printOpinions(opinions) {

    const opinionList = document.getElementById("opinion-list");
    let limitOpinions = opinionsPage * 10;
    opinionList.innerHTML = "";

    for (let  i = (limitOpinions - 10); (i < limitOpinions) && (i < opinions.data.length); i++) {

        const div = document.createElement("div");
        const nom = document.createElement("p");
        const content = document.createElement("p");

        nom.textContent = opinions.data[i].name;
        content.textContent = opinions.data[i].content;

        div.appendChild(nom);
        div.appendChild(content);

        div.classList.add("individual-comment");
        
        opinionList.appendChild(div);
    }
}