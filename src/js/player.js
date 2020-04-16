import { GameObject, GroundObject } from "./gameObject.js";

export class Player extends GameObject{
    constructor(x, y, width, vx, vy,color){
       super(x,y,width,color,vx,vy,false);
       this.y=y;
        this.color = color;
        this.gravity = 1;
        this.gravitySpeed = 1;

        
        
    }
//TODO: Kollision mit Bodenkante, runter fallen vom Boden oder wegschieben checken, 
//      x<-50 oder y>400
    // Gravitation, Steuerung - jump - per Mausklick
    pushAside(element,dx, dy){
        if(element.x<150&&element.x>100&&element.y<this.y+this.width
            &&element.y>this.y-element.width){
                console.log("nerviger Klotz");
                this.move(dx,dy);
            }
    }
    jump(){

    }
    stopfalling(){
        this.move(0,0);
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