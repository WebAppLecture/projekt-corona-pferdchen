import { CoronaJump } from "./coronaJump.js";
import { CONSTANTS } from "./constants.js";
import { OldWhiteMan } from "./GameObjects/oldWhiteMan.js";
import { Neighbour } from "./GameObjects/neigbour.js";

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
        this.screen.addEventListener("mousedown", ()=> this.game.clicked());
        
        this.gameLoop();
        this.activateButtons();

    }
    resetGame(){
        location.reload();
    }

    showGameSelect(){
        let modes = this.menu.children;
        for (let i = 0; i<modes.length; i++){
            let name = modes[i].id;
            modes[i].addEventListener("click", () => this.loadGame(name));
        }
        let ctx = this.renderContext;
        let opi = new OldWhiteMan(680,270, 30, CONSTANTS.OWMfaceColor,0,0);
        opi.draw(ctx);
        let omi = new Neighbour(170, 170, 30, CONSTANTS.NBfaceColor, 0,0);
        omi.draw(ctx);
        //this.drawOmi(ctx);

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
    
    drawOmi(ctx){
        
        ctx.beginPath();
        ctx.arc(180, 170, 30, 0, 2 * Math.PI);
        ctx.fillStyle = CONSTANTS.NBfaceColor;
        ctx.fill();

        for(let h = 0; h<6; h++){
            let hairX = -30*Math.cos((40+(h*4))/9);
            let hairY = 30*Math.sin((40+(h*4))/9);
            ctx.beginPath();
            ctx.arc(hairX+180, hairY+170, 10, 0, 2*Math.PI);
            ctx.fillStyle = CONSTANTS.NBhairColor;
            ctx.fill();
        }
        ctx.beginPath();
        ctx.moveTo(180+12, 170-6);
        ctx.arc(180+10, 170-4, 6, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        
        ctx.beginPath();
        ctx.strokeStyle= "black";
        ctx.arc(180+15, 175, 15, 1, 3);
        ctx.stroke();
    }
}