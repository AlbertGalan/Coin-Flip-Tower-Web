document.addEventListener("DOMContentLoaded", function() {

    let sendButton = document.getElementById("submit");
    const body = document.body;
    let tema = JSON.parse(localStorage.getItem("Tema"));

    if (!tema) {
        body.classList.replace("light", "dark");
    }

    sendButton.addEventListener("submit", function() {

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const text = document.getElementById("text");

        const data = {
            api_token: "uZl9WgoE59y7c3JTN0dyj7KUxkKNP0MpS2NM8msPOZ4eUEtusumqYRHubOGS",
            nombre: name.value,
            email: email.value,
            asunto: subject.value,
            mensaje: text.value
        }

        name.value = "";
        email.value = "";
        subject.value = "";
        text.value = "";

        fetch("https://phpstack-1076337-5399863.cloudwaysapps.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        }
        )
    })
})