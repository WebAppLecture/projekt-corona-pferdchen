import {GameTemplate } from "./gameTemplate.js";
import { GameObject } from "./gameObject.js";


export class CoronaJump extends GameTemplate{
    start(){
        this.initTrail();
        this.pushMaps();
        
       

    }
    initTrail(){
        this.trailA = new GameObject(XBEGINNING, 370, TRAILLENGTH, 30, "green", -5, 0);
        this.trailB = new GameObject(750, 370, 650, 30, "black", -5, 0);
    }

    initObjects(){
        
        
    }

    pushMaps(){
        let trailmap = [
            "1____________",
            "1_2__________",
            "1_______2____"];
        let mapping = [["1", ["green", 50]],["2",["#99FFCC", 50]],["_",["blue", 50]]];
        let obMap = new Map(mapping);
        for(let i = 0; i<trailmap.length; i++){
            let reihe = trailmap[i];
            for(let r = reihe.length; r>0; r--){
                let symbol = reihe[i];
                let piece = obMap.get(symbol);
                let piececolor = piece[0];
                let pieceheight = piece[1];
                this.pieceTrail = new GameObject(750,r*30,50, pieceheight, piececolor ,-4,0);
                
            }
        }
    }

    draw(ctx){
        this.trailA.draw(ctx);
        this.trailB.draw(ctx);
        this.pieceTrail.draw(ctx);
    }
    update(ctx){ //trails laufen in Schleife abwechselnd durch, mit Loch dazwischen
        this.updateTrails(ctx);
        
        
        
    }
    updateTrails(ctx){
        [this.trailA, this.trailB].forEach(element => {
            if(element.x <= -TRAILLENGTH){
                element.x = 800;
            } else {
                element.update(ctx);
            }
        });
    }
    
};

const XBEGINNING = 0,
    TRAILLENGTH = 700;

