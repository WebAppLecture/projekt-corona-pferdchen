import {GameTemplate } from "./gameTemplate.js";
import { Player } from "./player.js";
import {Trail} from "./trail/trail.js";
import Config from "./config.js";



export class CoronaJump extends GameTemplate{

    start(mode){
        this.inHealthMode = mode;
        this.initObjects();
        this.startSoundtrack();
    }

    initObjects(){   
        this.player = new Player(Config.PLAYER_X, Config.PLAYER_Y, Config.PLAYER_WIDTH, 
            Config.PLAYER_COLOR, Config.PLAYER_MOVE_X, Config.PLAYER_MOVE_Y);
        this.trail = new Trail(this.inHealthMode).trail;
    }

    

    draw(ctx){
        this.player.draw(ctx);
        this.trail.forEach(element => {
            element.forEach(innerele => {
                innerele.draw(ctx);
            });
        });   
    }
    update(ctx){
        this.checkGameOver()
        this.player.update(ctx);
        this.checkCollision();
        this.updateTrails(ctx);  
    }

    updateTrails(ctx){
        this.trail.forEach(element => {
            element.forEach(innerele => {
                innerele.update(ctx);
        });
    });}

    takeObject(element){
        let taken = element.take();
        switch (taken){
            case "1Maske":
                this.player.wearMask();
                break;
            case "1Virus":
                if(this.player.maskOn){
                    this.player.noMask();
                } else {
                    this.player.infect();
                }
                break;
            case "1TP":
                this.counter.countUp();
                break;
            case "1OWM":
                this.meetOldMan(element);
                break;
            case "1NB":
                this.meetNeigbour(element);
                break;
        }
    }

    meetOldMan(element){
        if(this.inHealthMode){ //im health-mode tp klauen
            this.counter.countDown(); //im Dark-mode infizieren oder nichts
        } else if(this.player.infected){
            this.counter.countUp();
            element.infect();
        }
        
    }
    meetNeigbour(element){
        if(this.inHealthMode){ 
            this.checkWin(); 
            this.gameOver = true;
            return;
        } else if(this.player.infected){
            this.counter.countUp();
            element.infect();
        } 
        this.checkWin();
    }
    checkWin(){
        if(this.counter.count>4){
            this.won = true;
            let wonaudio = new Audio("../../src/sounds/won.wav");
            wonaudio.play();
            this.gameOver=true;
            this.soundtrack.pause(); 
        }
    }
    
    checkGameOver(){ // Game-over, wenn gewonnen oder Player im Health-Modus infiziert
                        // oder Player fällt / schiebt sich aus dem Spielfeld
        let healthOver = this.inHealthMode && this.player.infected; //Game-over im HealthModus
       this.gameOver = (this.won || healthOver || this.player.y >= 600 || this.player.x <= -50);
        if(this.gameOver){
            this.soundtrack.pause();
        }
    }
    
    checkCollision(){
        for (let i = 0; i<12; i++){
            let reihe = this.trail[i];
            for(let k = 0; k<reihe.length;k++) {
                let element = reihe[k];
                let pRightSide = this.player.x+this.player.width;
                let pBottom = this.player.y+this.player.width;
            // wenn ein Element player berührt
                if(element.collision(this.player.x,this.player.y,this.player.width)){
                    if(element.takeable){ //nehmbares Element
                        this.takeObject(element);
                        if(!element.human){ // ist Element nicht menschlich, verschwindet es, wird "genommen"
                            this.trail[i].splice(this.trail[i].indexOf(element),1);
                        }
                    } 
                    else{ //ist ein Ground-Element (nicht takeable) unter Player, landet Player dort
                        if(element.y<=pBottom+1&& element.y>this.player.y-element.width
                            && element.x <pRightSide-2){
                                this.player.stopFalling(element.y);
                        } if(element.x>=pRightSide-2 && element.y<pBottom &&
                            element.y>this.player.y-element.width){ //ist es neben Player, wird er weggeschoben
                                this.player.pushAside(element.x);
                        }
                    }
                }
            }
            if(reihe[0]){ //Elemente außerhalb des Spielfeldes werden gelöscht
                if(reihe[0].x <= -100){
                this.trail.shift();}
            }          
        }
    }

    clicked(){
        if(!this.gameOver){
            this.player.jump(); //wenn Spiel läuft, bei click hüpfen
        } else {
            location.reload(); //bei Game over reload
        }  
    }
    shoot(){
        let shootAudio = new Audio("../../src/sounds/cough.wav");
        shootAudio.play();
    }
    
    startSoundtrack(){
        this.soundtrack = new Audio("../../src/sounds/background2.wav");
        this.soundtrack.loop = true;
        this.soundtrack.play();
    }
}

