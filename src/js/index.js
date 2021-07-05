import { GameEngine } from "./gameEngine.js";


window.gameEngine = new GameEngine(
    document.querySelector(".button"),
    document.querySelector(".screen"),
    document.querySelector(".menu"),
    document.querySelector(".shoot"),
    document.querySelector(".reset"),
    document.querySelector(".toiletpaper"),
   );
