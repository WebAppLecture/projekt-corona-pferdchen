import { GameEngine } from "./gameEngine.js";


window.gameEngine = new GameEngine(
    document.querySelector(".button"),
    document.querySelector(".screen"),
   // document.querySelector(".menu")
   );


/*
fetch("src/data/data.json") // beispiel daten reinladen
    .then(e => e.json())
    .then(json => {
        let title = document.createElement("h2"),
            content = document.createElement("p"),
            image = document.createElement("img");

        title.innerHTML = json.title;
        content.innerHTML = json.content;
        image.setAttribute("src", "./src/images/sql magic.jpg");

        document.body.appendChild(title);
        document.body.appendChild(content);
        document.body.appendChild(image);
    });*/
