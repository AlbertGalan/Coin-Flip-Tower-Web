document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    let tema = JSON.parse(localStorage.getItem("Tema"));

    if (!tema) {
        body.classList.replace("light", "dark");
    }
})