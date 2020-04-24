import { CoronaJump } from "./coronaJump.js";

export class GameEngine {

    constructor(controls, screen, menu) {
        this.controls = controls;
        this.screen = screen;
        this.menu = menu;
        
        this.setupCanvas();
        //this.setupControls();
        this.showGameSelect();

        
    }

    loadGame(mode) {
        this.hideMenu();
        window.addEventListener("mousedown", ()=> this.game.jump());
        this.game = new CoronaJump(mode);
        this.gameLoop();

    }
    showGameSelect(){
        let modes = this.menu.children; //nur zwei modi, ohne for-schleife vielleicht schöner
        for (let i = 0; i<modes.length; i++){
            let name = modes[i].id;
            console.log(name);
            modes[i].addEventListener("click", () => this.loadGame(name));
        }
    }
    setupCanvas() {
        this.renderContext = this.screen.getContext('2d');
        this.screen.classList.add("on");
        
    }

    hideMenu(){

        this.menu.classList.add("hidden");
    }

    show() {
        this.menu.classList.remove("hidden");
    }
    
    gameLoop() {  
       
        requestAnimationFrame(this.gameLoop.bind(this));  
        this.renderContext.clearRect(0,0,this.screen.width, this.screen.height);
        this.game.tick(this.renderContext); //ctx
       
    }
}