import { CoronaJump } from "./coronaJump.js";

export class GameEngine {

    constructor(controls, screen, menu, shoot, reset) {
        this.controls = controls;
        this.screen = screen;
        this.menu = menu;
        this.shoot = shoot;
        this.reset = reset;
        //this.game;
        this.setupCanvas();
        //this.setupControls();
        this.showGameSelect();

        
    }

    loadGame(mode) {
        this.game = new CoronaJump(mode);
        this.hideMenu();
        //Bilder ausblenden
        this.screen.addEventListener("mousedown", ()=> this.game.jump());
        
        this.gameLoop();
        this.activateButtons();

    }
    resetGame(){ //!!!????
        location.reload();/*
        delete this.game;
        this.renderContext.clearRect(0,0,this.screen.width, this.screen.height);
        delete this.gameLoop();
        
        this.showMenu();
        this.showGameSelect();*/
    }

    showGameSelect(){
        let modes = this.menu.children; //Bilder Game-Objekte einblenden
        for (let i = 0; i<modes.length; i++){
            let name = modes[i].id;
            modes[i].addEventListener("click", () => this.loadGame(name));
        }
    }
    setupCanvas() {
        this.renderContext = this.screen.getContext('2d');
        this.screen.classList.add("on");
        
    }
    activateButtons(){
        this.reset.addEventListener("click", () => this.resetGame());
        this.shoot.addEventListener("click", () => this.game.shoot());
    }

    hideMenu(){

        this.menu.classList.add("hidden");
    }

    showMenu() {
        this.menu.classList.remove("hidden");
    }
    
    gameLoop() {  
       if(this.game!== undefined){
        requestAnimationFrame(this.gameLoop.bind(this));  
        this.renderContext.clearRect(0,0,this.screen.width, this.screen.height);
        this.game.tick(this.renderContext); //ctx
       }
    }
}