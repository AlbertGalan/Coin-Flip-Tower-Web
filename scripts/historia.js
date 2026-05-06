document.addEventListener("DOMContentLoaded", function() {

    const characters = document.getElementsByClassName("character");
    const body = document.body;
    let elementActive = characters[0];
    let tema = JSON.parse(localStorage.getItem("Tema"));

    //JS del carousel
    const track = document.querySelector('.carousel-track');
    const buttons = document.querySelector('.character-btn');
    const cards = document.querySelectorAll('.carousel-track .character');
    const prev = document.querySelector('.carousel-prev');
    const next = document.querySelector('.carousel-next');
    let current = 0;

    window.addEventListener("load", () => goTo(0));
    prev.addEventListener("click", () => goTo(current - 1));
    next.addEventListener("click", () => goTo(current + 1));    

    function goTo(index) {
        try {
            checkButtons(index);
            current = Math.max(0, Math.min(index, cards.length - 1));
            const firstCardOffset = cards[0].offsetLeft - track.offsetLeft;
            const offset = cards[current].offsetLeft - track.offsetLeft - firstCardOffset;
            track.style.transform = `translateX(-${offset}px)`;
            elementActive.classList.remove("active");
            characters[index].classList.add("active");
            elementActive = characters[index];
        } catch (error) {
            if (index == -1) {
                index++;
            } else {
                index--;
            }
            elementActive.classList.remove("active");
            characters[index].classList.add("active");
            elementActive = characters[index];
        }
    }

    if (!tema) {
        body.classList.replace("light", "dark");
    }

    const pagesButtons = document.getElementsByClassName("rerefons-button")
    const pages = document.getElementsByClassName("rerefons-page");
    if (pagesButtons.length == pages.length) {

        let actualPage = pages[0];

        for (let i = 0; i < pagesButtons.length; i++) {

            pagesButtons[i].addEventListener("click", function(event) {
                event.preventDefault();
                actualPage.classList.remove("rerefons-page-active");
                pages[i].classList.add("rerefons-page-active");
                actualPage = pages[i]
            })

        }
    } else {
        console.error("El nombre de botons no coincideix amb el nombre de pagines")
    }

    function checkButtons(index) {
        if (index - 1 < 0) {
            prev.style.visibility = "hidden";
        } else {
            prev.style.visibility = "visible";
        }
        if (index + 1 > characters.length - 1) {
            next.style.visibility = "hidden";
        } else {
            next.style.visibility = "visible";
        }
    }
})