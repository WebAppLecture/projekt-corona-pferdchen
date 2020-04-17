import {GameTemplate } from "./gameTemplate.js";
import { GameObject, Toiletpaper, Mask, Virus, GroundObject } from "./gameObject.js";
import { Player } from "./player.js";



export class CoronaJump extends GameTemplate{
    start(){
        
        this.initObjects();
        this.pushMaps();
    }


    initObjects(){   
        this.player = new Player(200, 250, 30, 0 ,0.5 ,"#a77");
        this.gameOver = false;
    }

    pushMaps(){
        let trailmap = [
            "111_________",
            "11__________",
            "111__3______",
            "11__________",
            "11___4______",
            "111_________",
            "11__________",
            "___3________",
            "___11_______",
            "11___4______",
            "111_________",
            "1112________",
            "111_________",
            "1111________",
            "11___3______",
            "11__________",
            "1111________",
            "11_____2____",
            "___4________",
            "____________",
            "11____4_____",
            "111_________",
            "1111________",
            "112_________",
            "111____2____",
            "11__________",
            "11____4_____",
            "111_________",
            "11_____2____",
            "____1_______",
            "____________",
            "11__________",
            "111_________",
            "111_________",
            "111_________",
            "111_________",
            "11____4_____",
            "11__________",
            "111_________",
            "11_____2____",
            "____________",
            "____________",
            "11__________",
            "111_________",

        ];
        this.trail = [];
        for(let i = 0; i<trailmap.length; i++){
            let reihe = trailmap[i];
            for(let r = 0; r< reihe.length-1; r++){
                let symbol = reihe[r];
                this.symbol = symbol;
                let x = i*50;
                let y = 400-((r+1)*40);
                switch (this.symbol){
                    case "_":
                        break;
                    case "1":
                        this.drawGround(x,y);
                        break;
                    case "2":
                        this.drawMask(x,y);
                        break;
                    case "3":
                        this.drawToiletPaper(x,y);
                        break;
                    case "4":
                        this.drawVirus(x,y);
                        break;
                }
            }
        }
    }
    drawGround(x,y){
        this.trail.push(new GroundObject(x, y, 50, 50 ,-1, 0));
    }
    drawMask(x,y){
        this.trail.push(new Mask(x,y,50,-1,0,true));
    }
    drawToiletPaper(x,y){
        this.trail.push(new Toiletpaper(x,y, 20, -1,0,true));
        
    }
    drawVirus(x,y){
        this.trail.push(new Virus(x,y, 20, "#80FF00",-1,0,true));
    }

    draw(ctx){
        this.player.draw(ctx);
        this.trail.forEach(element => {
            element.draw(ctx);
            
        });
        
    }
    update(ctx){ 
        this.checkGameOver()
            this.updatePlayer(ctx);
            this.updateTrails(ctx);
        
    }
    showGameoverScreen(ctx){
        super.gameOverScreen(ctx);
    }
    updateTrails(ctx){
        
        this.trail.forEach(element => {
            // wenn ein Element player berührt
            if(element.x<this.player.x+this.player.width&&
                element.x>this.player.x-element.width
                &&element.y<this.player.y+this.player.width
                &&element.y>this.player.y-element.width){
                    console.log("ouch! "+element.takeable);
                    if(element.takeable){
                        element.take();
                        this.trail.splice(this.trail.indexOf(element),1);
                    } else if(element.x>=this.player.x+this.player.width-1){
                        this.player.pushAside(-1,0);
                        
                    } else{
                        this.player.stopfalling(element.y);
                        console.log("stopfalling!");
                    }

                    //checken, ob Bodenelement - Schiebt player ins off
                    //oder nehmbares Element - wird unsichtbar, irgendwas gezählt und sound ertönt
            }  if(!element.takeable
                &&element.x<this.player.x+this.player.width&&
                element.x>this.player.x-element.width&&
                this.player.y>=element.y+this.player.width+1&&
                element.y>this.player.y){
                    this.player.stopfalling(element.y);
                    console.log("stopfalling?");
            }
            if(element.x >= -60){
                element.update(ctx);
            }
            //else delete?
        })
    }
    updatePlayer(ctx){
        //if(GameObject.rectangleCollision(this.player, GameObject)){
            this.player.update(ctx);
            
        //}
    }
    jump(){
        this.player.move(0,-1);
    }
    checkGameOver(){
       this.gameOver = this.player.y>=450||this.player.x<=-50;
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

