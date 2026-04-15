document.addEventListener("DOMContentLoaded", function() {

    actualitzarPodium();
})

function actualitzarPodium() {

    fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/uZl9WgoE59y7c3JTN0dyj7KUxkKNP0MpS2NM8msPOZ4eUEtusumqYRHubOGS/3")
        .then(resposta => resposta.json())
        .then(dades => printUsuaris(dades))
        .catch(error => console.log(error));
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