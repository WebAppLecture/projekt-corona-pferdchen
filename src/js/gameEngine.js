import { CoronaJump } from "./coronaJump.js";
import { CONSTANTS } from "./constants.js";
import { OldWhiteMan } from "./GameObjects/oldWhiteMan.js";
import { Neighbour } from "./GameObjects/neigbour.js";

export class GameEngine {

    constructor(controls, screen, menu, shoot, reset,tplist) {
        this.controls = controls;
        this.screen = screen;
        this.menu = menu;
        this.shoot = shoot;
        this.reset = reset;
        this.tplist = tplist;
        this.setupCanvas();
        //this.setupControls();
        this.showGameSelect();
        
        
    }

    loadGame(healthyMode) {
        this.game = new CoronaJump(healthyMode);
        this.hideMenu();
        this.screen.addEventListener("mousedown", ()=> this.game.clicked());
        this.changeScreen(healthyMode);
        this.gameLoop();
        this.activateButtons();

    }
    resetGame(){
        location.reload();
    }
    changeScreen(mode){
        if(!mode){
            this.screen.classList.add("dark");
            for(let i=0; i<this.tplist.children.length; i++){
                this.tplist.children[i].classList.add("people");
            }
        }
    }

    showGameSelect(){
        let modes = this.menu.children;
        modes[0].addEventListener("click", () => this.loadGame(true));
        modes[1].addEventListener("click", () => this.loadGame(false));
        
        let opi = new OldWhiteMan(680,270, 30, CONSTANTS.OWMfaceColor,0,0);
        opi.draw(this.renderContext);
        let omi = new Neighbour(170, 170, 30, CONSTANTS.NBfaceColor, 0,0);
        omi.draw(this.renderContext);
        

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