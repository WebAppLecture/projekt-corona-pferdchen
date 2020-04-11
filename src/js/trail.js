import {GameTemplate } from "./gameTemplate.js";
import { GameObject } from "./gameObject.js";

export class CoronaJump extends GameTemplate{
    start(){
        this.initTrail();
    }

    
}


const XBEGINNING = 0,
    TRAILLENGTH = 700;
export class Trail extends GameTemplate{
    
    start(){
        this.trailA = new GameObject(XBEGINNING, 350, TRAILLENGTH, 50, "green", -5, 0);
        this.trailB = new GameObject(750, 350, 650, 50, "black", -5, 0);
    }
    

    draw(ctx){
        this.trailA.draw(ctx);
        this.trailB.draw(ctx);
    }

    update(ctx){ //trails laufen in Schleife abwechselnd durch, mit Loch dazwischen
        [this.trailA, this.trailB].forEach(element => {
            if(element.x <= -TRAILLENGTH){
                element.x = 800;
            } else {
                element.update(ctx);
            }
        });
        
        
    }

    checkTrailGone(){
        
    }



    

}