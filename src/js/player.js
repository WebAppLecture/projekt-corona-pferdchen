import { GameObject, GroundObject } from "./gameObject.js";

export class Player extends GameObject{
    constructor(x, y, width, vx, vy,color){
       super(x,y,width,color,vx,vy,false);
       this.y=y;
        this.color = color;
        this.jumping = false;

        
        
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
            this.move(0, -3);
            
        }
    }
    stopfalling(yelement){
        this.y = yelement-this.width;
        
    }
   /* move(dx, dy){
        //this.gravitySpeed+= this.gravity;
        this.x += dx;
        this.y += dy; //+ this.gravitySpeed;
    }
    /*update(){
        //if(this.x+this.width>=){}
        //(GameObject.rectangleCollision(Player, GroundObject)){
        
        
    }*/
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
    }
    /**
     * https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection 
     */
    
}