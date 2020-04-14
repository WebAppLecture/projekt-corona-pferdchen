import {GameTemplate } from "./gameTemplate.js";
import { GameObject, RoundObject } from "./gameObject.js";



export class CoronaJump extends GameTemplate{
    start(){
        this.pushMaps();
    }


    initObjects(){   
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
            "____________",
            "11___4______",
            "111_________",
            "111_________",
            "111_________",
            "111_________",
            "11___3______",
            "11__________",
            "111_________",
            "11_____2____",
            "____________",
            "____________",
            "11__________",
            "111_________",
            "111_________",
            "112_________",
            "111____2____",
            "11__________",
            "11__________",
            "111_________",
            "11_____2____",
            "____1_______",
            "____________",
            "11__________",
            "111_________",
            "111_________",
            "111_________",
            "111_________",
            "11__________",
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
        this.trail.push(new GameObject(x, y, 50, 50, "green" ,-1, 0));
    }
    drawMask(x,y){
        this.trail.push(new GameObject(x,y,50,30,"#66FFCC",-1,0));
    }
    drawToiletPaper(x,y){
        this.trail.push(new RoundObject(x,y, 15, "#999",-1,0));
        
    }
    drawVirus(x,y){
        this.trail.push(new RoundObject(x,y, 20, "#80FF00",-1,0));
    }

    draw(ctx){
        this.trail.forEach(element => {
            element.draw(ctx);
            
        });
    }
    update(ctx){ 
        this.updateTrails(ctx);
        
    }
    updateTrails(ctx){
        this.trail.forEach(element => {
            if(element.x >= -60){
                element.update(ctx);
            }
            //else delete?
        })
    }
    
};

const XBEGINNING = 0,
    TRAILLENGTH = 700;

