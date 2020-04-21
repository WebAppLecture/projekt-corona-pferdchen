import { GameObject, GroundObject } from "./gameObject.js";

export class Player extends GameObject{
    constructor(x, y, width, vx, vy,color){
       super(x,y,width,color,vx,vy,false);
       this.y=y;
        this.color = color;
        this.jumping = false;
        this.stopfalling = false;
        
        
    }
//TODO: Kollision mit Bodenkante, runter fallen vom Boden oder wegschieben checken, 
//      x<-50 oder y>400
    // Gravitation, Steuerung - jump - per Mausklick
    pushAside(dx, dy){
        this.move(dx,dy);
    }
    jump(){
        console.log("jump");
        if(this.jumping===false){
            this.jumping = true;
            this.vy-=12;
            

        }
    }
    stopfalling(yelement){
        if(yelement>this.y){
            this.vy=0;
        }
    }
    walkfaster(){
        
    }
   /* move(dx, dy){
        //this.gravitySpeed+= this.gravity;
        this.x += dx;
        this.y += dy; //+ this.gravitySpeed;
    }*/
    update(ctx){
        if(!this.stopfalling){
            this.vy+=0.2;
        }
        
        if(this.x<200){
            this.vx=0.1;
        }
        super.update(ctx);
        
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
    }
    /**
     * https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection 
     */
    
}