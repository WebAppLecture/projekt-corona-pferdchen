import {GameTemplate } from "./gameTemplate.js";
import { GameObject } from "./gameObject.js";
import { FpsControl } from "./FpsControl.js";


export class CoronaJump extends GameTemplate{
    start(){
        this.fpsControl = new FpsControl();
        this.fpsControl.fps = 2;
        
        this.pushMaps();
        
       

    }


    initObjects(){   
    }

    pushMaps(){
        let trailmap = [
            "111_________",
            "112_________",
            "111____2____",
            "11__________",
            "11__________",
            "111_________",
            "11_____2____",
            "____________",
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
            "111_________",
            "112_________",
            "111____2____",
            "11__________",
            "11__________",
            "111_________",
            "11_____2____",
            "____________",
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
        let obMap = new Map([["1", ["green", 50]],["2",["yellow", 30]],["_",["blue", 50]]]);
        for(let i = 0; i<trailmap.length; i++){
            let reihe = trailmap[i];
            
            for(let r = 0; r< reihe.length-1; r++){
                let symbol = reihe[r];
                
                let piece = obMap.get(symbol);
                let piececolor = piece[0]; 
                
                let pieceheight = piece[1];

                this.trail.push(new GameObject(i*50,400-(r*40),50, pieceheight, piececolor ,-1,0));
                
            }
        }
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
            if(element.x >= -20){
               
                element.update(ctx);
            }
            //else delete?
        })
    }
    
};

const XBEGINNING = 0,
    TRAILLENGTH = 700;

