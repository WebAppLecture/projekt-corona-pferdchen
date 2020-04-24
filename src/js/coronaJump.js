import {GameTemplate } from "./gameTemplate.js";
import { GameObject, Toiletpaper, Virus, GroundObject, OldWhiteMan } from "./gameObject.js";
import { Player } from "./player.js";
import { Mask } from "./mask.js";
import mep from "./map.js";



export class CoronaJump extends GameTemplate{
    start(){
        
        this.initObjects();
        this.pushMaps();
    }


    initObjects(){   
        this.player = new Player(200, 250, 30, 0 ,0 ,"#a77");
        this.gameOver = false;
        this.trail = [];
    }

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
                        inArray.push(new GroundObject(x, y ,-1, 0));
                        break;
                    case "2":
                        inArray.push(new Mask(x,y,30,-1,0));
                        break;
                    case "3":
                        inArray.push(new Toiletpaper(x,y, 20, -1,0));
                        break;
                    case "4":
                        inArray.push(new Virus(x,y, 20, "#80FF00",-1,0));
                        break;
                    case "5":
                        inArray.push(new OldWhiteMan(x,y,25, "white",-1,0));
                        break;
                }
            }
        }
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
        this.updatePlayer(ctx);
        this.checkCollision();
        this.updateTrails(ctx);  
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

    takeObject(element){//problem:maske wird zweimal aufgenommen?
        let taken = element.take();
        console.log("Object-name: "+taken);
        switch (taken){
            case "1Maske":
                this.player.noMask();
                
                this.player.wearMask();
                setTimeout(() => {this.player.wearMask()}, 3000);
                break;
            case "1Virus":
                if(this.player.maskOn){
                    this.player.noMask();
                } else {
                    this.gameOver = true;
                }
                break;
            case "1TP":
                break;
        }
    }
    
    checkCollision(){
        for (let i = 0; i<this.trail.length; i++){
            let reihe = this.trail[i];
            for(let k = 0; k<reihe.length;k++) {
                let element = reihe[k];
            // wenn ein Element player berührt
                if(element.collision(this.player.x,this.player.y,this.player.width)){
                    if(element.takeable){ //nehmbares Element
                        this.takeObject(element);
                        this.trail[i].splice(this.trail[i].indexOf(element),1);
                    } else{ 
                        if(element.y<this.player.y+this.player.width+1&&
                            element.y>this.player.y-element.width){
                                this.player.stopFalling(element.x, element.y);
                        } if(element.x>=this.player.x+this.player.width-1&&
                            element.y<this.player.y+this.player.width-2&&
                            element.y>this.player.y-element.width){ //not-takeable element is on the side
                                this.player.pushAside(-1);
                        }
                    }
                }
            }
            if(reihe[0]){
                if(reihe[0].x <= -100){
                this.trail.shift();}
            }
            
        }
    }
    updatePlayer(ctx){
        this.player.update(ctx);
    }
    jump(){
        this.player.jump();
    }
    checkGameOver(){
       this.gameOver = this.player.y>=600||this.player.x<=-50;
        if(this.gameOver){
            console.log("Game over, x: "+this.player.x+" y: "+this.player.y);
        }
        
    }
    bindControls(){
        /*this.inputBinding = {
            ""
        }*/
    }
    
};

const XBEGINNING = 0,
    TRAILLENGTH = 700;

