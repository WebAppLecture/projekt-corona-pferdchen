import { GameObject, GroundObject } from "./gameObject.js";

export class Player extends GameObject{
    constructor(x, y, width, vx, vy,color){
       super(x,y,width,color,vx,vy,false);
       this.y=y;
       this.width = width;
        this.color = color;
        this.jumping = false;
        this.stoppedfalling = false;
        this.maskOn = false;
        
    }
//TODO: Kollision mit Bodenkante, runter fallen vom Boden oder wegschieben checken, 
//      x<-50 oder y>400
    // Gravitation, Steuerung - jump - per Mausklick
    pushAside(dx, dy){
        this.x+= dx;
        //console.log("pushAside");
    }
    jump(){
       // console.log("jump");
        if(this.jumping===false){
            
            this.vy-=5;
            this.jumping = true;
            this.stoppedfalling = false;
        }
    }
    toggleMask(){
        this.maskOn=!this.maskOn;
        console.log("toggle"+this.maskOn);
    }
    noMask(){
        this.maskOn = false;
        console.log("noMask"+this.maskOn);
    }
    stopFalling(yelement){
        //if(yelement>this.y){
            this.vy = 0;
            this.jumping = false;
            this.stoppedfalling = true;
            //console.log("stopFalling");
            //window.setTimeout(this.stopfalling = false, 1000);
        //}
    }
    stopJumping(){
        this.vy*= -1;
        this.jumping = false;
        this.stoppedfalling = false;
        //console.log("stopJumping");
    }
    walkfaster(){
        if(this.x<200){
            this.x+=0.1;
        }
    }
    move(dx, dy){
        //this.gravitySpeed+= this.gravity;
        this.x += dx;
        this.y += dy; //+ this.gravitySpeed;
    }
    update(ctx){
        if(!this.stoppedfalling){
            this.vy+=0.1;
        }
        super.update(ctx);
        
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
        if(this.maskOn){
            ctx.fillStyle = "#66FFCC";
            ctx.fillRect(this.x+15, this.y+17, 15, 11);
        }
    }
    /**
     * https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection 
     */
    
}