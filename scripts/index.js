import { validateBlog, validateUsers } from "../scripts/utilities.js";

document.addEventListener("DOMContentLoaded", function() {

    const coin = document.querySelector(".coin");
    const body = document.body;
    coin.classList.add("fly");
    setTimeout(() => {
        coin.classList.remove("fly")
    }, 1760)
    const header = document.querySelector("header");
    const gourge = document.getElementsByClassName("gourge")[0];

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

<<<<<<< HEAD
    setInterval(() => {
        actualitzarPodium();
    }, 300000);
=======
    createObject(fireZone,-200,150,68.75,"i/Table.png",6);
    createObject(fireZone,-100, 50,46.87, `i/Stool.png`,4);
    createObject(fireZone,-300, 50,46.87, `i/Stool.png`,4);
    startGravity();
    
>>>>>>> 8ac159b (Añadido el script de gravedad para los objetos del fondo en el index, falta decorar bien la pagina con ellos)
})

let balls=[]

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

function createObject(container, x, width, height, color, weight) {
  const el = document.createElement('img');
  el.src=color;
  Object.assign(el.style, {
    position: 'absolute',
    width: `${width}px`,
    height: `${height}px`,
  });

  container.appendChild(el);
  const floor = container.offsetHeight/2 - el.offsetHeight;
  balls.push({
    el,
    container,
    x,
    y: floor,
    vy: 0,
    weight
  });
}

let vy, grav, vgrav, bounce, started = true, iterations;


function resetGravity() {
  balls.forEach(b=>{
    const floor = b.container.offsetHeight/2 - b.el.offsetHeight/2;
    b.vy = 0;
    b.grav = 0.1;
    b.vgrav = 0;
    b.bounce = 0.9/b.weight;
    b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
  })
}

function invertGravity() {
  balls.forEach(b=>{
  b.grav *= -1;
  b.vgrav = 0;
  b.vy = 0;
  })
  iterations = 0;
  startLoop();
}

function stopLoop() {
  started = false;
}

function startLoop() {
  if (!started) {
    started = true;
    requestAnimationFrame(loop);
  }
}

function loop() {

  if (!started){
    return;
    
  }
  iterations++;
  balls.forEach(b=>{
    const floor = b.container.offsetHeight/2 - b.el.offsetHeight/2;
    const ceiling =-floor;

    b.vgrav += b.grav;
    b.y += b.vy + b.vgrav;
    b.vy += b.grav;
    
  
    if (b.y > floor) {
      b.vy = -(b.vy + b.vgrav) * b.bounce;
      b.y = floor;
      b.vgrav*=-b.bounce
    }

    if (b.y < ceiling) {
      b.y = ceiling;
      b.vy = -(b.vy + b.vgrav) * b.bounce;
      b.vgrav*=-b.bounce
    }

    b.el.style.transform = `translate(${b.x}px, ${b.y}px)`;
  })
  requestAnimationFrame(loop);
  
  console.log('loop')
  if (iterations>200){
    stopLoop();
  }
}


function startGravity(){
  resetGravity();
  loop();

}

window.addEventListener("keydown", function(event){
    if (event.key == "g"){
        invertGravity();
    }
} )