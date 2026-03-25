document.addEventListener("DOMContentLoaded", function() {

    actualitzarPodium();
    actualitzarOpinions();

    const submitButton = document.getElementById("submit");

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
        .then(dades => printUsuaris(dades))
        .catch(error => console.log(error));
}

function printUsuaris(usuaris) {

    const players = document.getElementById("player-list");
    players.innerHTML = "";

    usuaris.data.forEach((usuari) => {

        const tr = document.createElement("tr");
        const nom = document.createElement("td");
        const points = document.createElement("td");

        nom.textContent = usuari.name;
        points.textContent = usuari.puntuacion;

        tr.appendChild(nom);
        tr.appendChild(points);

        players.appendChild(tr);
    })
}

function actualitzarOpinions() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/comments/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS")
        .then(resposta => resposta.json())
        .then(dades => printOpinions(dades))
        .catch(error => console.log(error));
}

function printOpinions(opinions) {

    const opinionList = document.getElementById("opinion-list");
    opinionList.innerHTML = "";

    opinions.data.forEach((opinio) => {

        const div = document.createElement("div");
        const nom = document.createElement("p");
        const content = document.createElement("p");

        nom.textContent = opinio.name;
        content.textContent = opinio.content;

        div.appendChild(nom);
        div.appendChild(content);
        
        opinionList.appendChild(div);
    })
}