import { GameObject } from "./gameObject.js";

export class Player extends GameObject{
    constructor(x, y, width, vx, vy,color){
       super(x,y,width,vx,vy);
        this.color = color;
        
    }
//TODO: Kollision mit Bodenkante, runter fallen vom Boden oder wegschieben checken, 
//      x<-50 oder y>400
    // Gravitation, Steuerung - jump - per Mausklick
    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }
    update(){
        if(rectangleCollision())
        this.x +=this.vx;
        this.y+=this.vy;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
    }
    /**
     * https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection 
     */
    
}