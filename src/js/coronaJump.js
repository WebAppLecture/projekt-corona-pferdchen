import {GameTemplate } from "./gameTemplate.js";
import { Neighbour, Toiletpaper, Virus, GroundObject, OldWhiteMan } from "./gameObject.js";
import { Player } from "./player.js";
import { Mask } from "./mask.js";
import {CONSTANTS} from "./constants.js";
import mep from "./map.js";



export class CoronaJump extends GameTemplate{
    start(){
        this.initObjects();
        
        this.startSoundtrack();
        this.tpCounter = 0;
        this.trail = [];
        this.pushMaps();
    }


    initObjects(){   
        this.player = new Player(200, 250, CONSTANTS.playerWidth, 
            CONSTANTS.playerColor, CONSTANTS.playerMoveX, CONSTANTS.playerMoveY);
        this.gameOver = false;
        this.audio;
    }
    /*deleteGame(){
        delete this.trail;
        delete this.tick();
        delete this;
    }*/

    pushMaps(){
        
        let trailmap = mep;
        for(let i = 0; i<trailmap.length; i++){
            let reihe = trailmap[i];
            let inArray = [];
            this.trail.push(inArray);
            for(let r = 0; r< reihe.length; r++){
                let symbol = reihe[r];
                this.symbol = symbol;
                let x = i*30;
                let y = 400-((r+1)*30);
                switch (this.symbol){
                    case "_":
                        break;
                    case "1":
                        inArray.push(new GroundObject(x, y, CONSTANTS.groundwidth,
                            CONSTANTS.groundColor,CONSTANTS.speedTrailX, 0));
                        break;
                    case "2":
                        inArray.push(new Mask(x,y,CONSTANTS.maskWidth, CONSTANTS.maskHeight,
                            CONSTANTS.maskColor,CONSTANTS.speedTrailX,0));
                        break;
                    case "3":
                        inArray.push(new Toiletpaper(x,y, CONSTANTS.TPradius,
                             CONSTANTS.speedTrailX, 0));
                        break;
                    case "4":
                        inArray.push(new Virus(x,y, CONSTANTS.Vradius, CONSTANTS.VouterColor,
                            CONSTANTS.VinnerColor,CONSTANTS.speedTrailX, 0));
                        break;
                    case "5":
                        inArray.push(new OldWhiteMan(x,y,CONSTANTS.OWMradius,
                            CONSTANTS.OWMfaceColor ,CONSTANTS.speedTrailX, 0));
                        break;
                    case "6":
                        inArray.push(new Neighbour(x,y,CONSTANTS.NBradius,
                            CONSTANTS.NBfaceColor, CONSTANTS.speedTrailX, 0));
                }
            }
        }
    }
    shoot(){
        let shootAudio = new Audio("../../src/sounds/cough.wav");
        shootAudio.play();
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
        console.log("u");
    }

    showGameoverScreen(ctx){
        super.gameOverScreen(ctx);
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
                    this.gameOver = true;
                }
                break;
            case "1TP":
                this.addTP();
                break;
        }
    }
    addTP(){
        if(this.tpCounter<6){
            let list = document.querySelector(".toiletpaper");
            let tp = list.children[this.tpCounter];
            tp.classList.add("taken");
            this.tpCounter++;
        }
    }
    stealTP(){
        if(this.tpCounter>0){
            this.tpCounter--;
            let list = document.querySelector(".toiletpaper");
            let tp = list.children[this.tpCounter];
            tp.classList.remove("taken");
        }
    }
    
    checkCollision(){
        for (let i = 0; i<12; i++){
            let reihe = this.trail[i];
            for(let k = 0; k<reihe.length;k++) {
                let element = reihe[k];
            // wenn ein Element player berührt
                if(element.collision(this.player.x,this.player.y,this.player.width)){
                    if(element.takeable){ //nehmbares Element
                        this.takeObject(element);
                        this.trail[i].splice(this.trail[i].indexOf(element),1);
                    } 
                    else{ 
                        if(element.y<this.player.y+this.player.width+1&&
                            element.y>this.player.y-element.width){
                                this.player.stopFalling(element.y);
                        } if(element.x>=this.player.x+this.player.width-1&&
                            element.y<this.player.y+this.player.width-2&&
                            element.y>this.player.y-element.width){ //not-takeable element is on the side
                                this.player.pushAside(-1);
                        }
                        this.checkhumanCollision(element);
                    }
                }
            }
            if(reihe[0]){
                if(reihe[0].x <= -100){
                this.trail.shift();}
            }
            
        }
    }
    checkhumanCollision(element){
        if(element.human){
            let wtf = element.meet();
            if(wtf=="1OWM"){
                this.stealTP();
            } else if(wtf=="1NB"){
                this.checkWin();
            }
        }
    }
    jump(){
        this.player.jump();
    }
    checkWin(){
        if(this.tpCounter>=5){
            this.won = true;
            
        }
        this.audio.pause();
        this.gameOver = true;
    }
    checkGameOver(){
       this.gameOver = (this.player.y >= 600 || this.player.x <= -50);
        if(this.gameOver){
            this.audio.pause();
            
        }
        
    }
    /*bindControls(){
    }*/
    startSoundtrack(){
        this.audio = new Audio("../../src/sounds/background2.wav");
        this.audio.loop = true;
        this.audio.play();
    }
    
};

