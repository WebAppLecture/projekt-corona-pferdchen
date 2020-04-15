import { CoronaJump } from "./coronaJump.js";

export class GameEngine {

    constructor(controls, screen) {
        this.controls = controls;
        this.screen = screen;
       // this.menu = new Menu(menu);
        
        this.setupCanvas();
       // this.setupControls();
       // this.showGameSelect();
       this.loadGame();
    }

    loadGame() {
        
        this.game = new CoronaJump();
        this.gameLoop();
    }

    setupCanvas() {
        this.renderContext = this.screen.getContext('2d');
        this.screen.classList.add("on");
    }

    gameLoop() {  
       // if(this.game !== undefined) {
            requestAnimationFrame(this.gameLoop.bind(this));  
            this.renderContext.clearRect(0,0,this.screen.width, this.screen.height);
            this.game.tick(this.renderContext); //ctx
       // }
    }
}