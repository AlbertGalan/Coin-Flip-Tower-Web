document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const track = document.getElementById("track");
    const items = document.querySelectorAll(".carrusel-item");
    const prev = document.querySelector(".carrusel-prev");
    const next = document.querySelector(".carrusel-next");
    let current = 0;
    let tema = JSON.parse(localStorage.getItem("Tema"));

    if (!tema) {
        body.classList.replace("light", "dark");
    }

    window.addEventListener("load", () => goTo(0));

    prev.addEventListener("click", () => goTo(current - 1));
    next.addEventListener("click", () => goTo(current + 1));

    function goTo(index) {
        current = Math.max(0, Math.min(index, items.length - 1));
        const firstOffset = items[0].offsetLeft - track.offsetLeft;
        const offset = items[current].offsetLeft - track.offsetLeft - firstOffset;
        track.style.transform = `translateX(-${offset}px)`;
        checkButtons();
    }

    function checkButtons() {
        prev.style.visibility = current == 0 ? "hidden" : "visible";
        next.style.visibility = current == items.length - 1 ? "hidden" : "visible";
    }


})