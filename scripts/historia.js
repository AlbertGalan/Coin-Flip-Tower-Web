document.addEventListener("DOMContentLoaded", function() {

    const characters = document.getElementsByClassName("character");
    let elementActive = null;

    for (let i = 0; i < characters.length; i++) {
        
        characters[i].addEventListener("click", function() {

            if (characters[i].classList.contains("active")) {
                characters[i].classList.remove("active");
                elementActive = null;
            } else {
                if (elementActive) elementActive.classList.remove("active")
                characters[i].classList.add("active")
                elementActive = characters[i];
            }

        })
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
})