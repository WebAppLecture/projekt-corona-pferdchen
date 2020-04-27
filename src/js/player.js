import { GameObject, GroundObject } from "./gameObject.js";
import {CONSTANTS} from "./constants.js";

export class Player extends GameObject{
    constructor(x, y, width, color, vx, vy){
       super(x,y,width,color,vx,vy,false);
       this.y=y;
       this.width = width;
        this.color = color;
        this.jumping = false;
        this.stoppedfalling = false;
        this.maskOn = false;
        this.to;
    }
//TODO: Kollision mit Bodenkante, runter fallen vom Boden oder wegschieben checken, 
//      x<-50 oder y>400
    // Gravitation, Steuerung - jump - per Mausklick
    pushAside(dx){
        this.x+= dx;
    }
    jump(){ 
        if(this.jumping===false){
            this.vy+=CONSTANTS.jumpY;
            this.jumping = true;
            this.stoppedfalling = false;
        }
    }
    wearMask(){
        if(this.maskOn){
            clearTimeout(this.to);
        }
        this.maskOn = true;
        this.to = setTimeout(() => {this.noMask()}, 3500);
    }
    noMask(){
        this.maskOn = false;
    }
    stopFalling(yelement){
        if(this.vy>0){
            this.y = yelement-this.width;
            this.vy = 0;//!!!!
            this.jumping = false;
            this.stoppedfalling = true;
        }
    }
    /*stopJumping(){
        ///this.vy*= -1;
        this.jumping = false;
        this.stoppedfalling = false;
        //console.log("stopJumping");
    }*/
    walkfaster(){
        if(this.x<200){
           // this.x+=0.1;
        }
    }
    move(dx, dy){
        //this.gravitySpeed+= this.gravity;
        this.x += dx;
        this.y += dy; //+ this.gravitySpeed;
    }
    update(ctx){
       // if(!this.stoppedfalling){
            this.vy+=CONSTANTS.gravitY;
       // }
        super.update(ctx);
        
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
        if(this.maskOn){
            ctx.fillStyle = CONSTANTS.maskColor;
            ctx.fillRect(this.x+15, this.y+17, 15, 11);
        }
    }
    /**
     * https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection 
     */
    
}