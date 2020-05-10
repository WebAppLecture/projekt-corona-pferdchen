import { GameObject, GroundObject } from "./gameObject.js";
import {CONSTANTS} from "./constants.js";

export class Player extends GameObject{
    constructor(x, y, width, color, vx, vy){
        super(x,y,width,color,vx,vy,false);
        this.jumping = false;
        this.stoppedfalling = false;
        this.maskOn = false;
        this.to;
        this.oldX = x;
    }

    pushAside(elemX){
        this.x=elemX-this.width;
        console.log("push");
    }

    jump(){ 
        if(this.jumping===false){
            this.vy+=CONSTANTS.jumpY;
            this.jumping = true;
            //this.stoppedfalling = false;
        }
    }
    
    stopFalling(yelement){
        if(this.vy>0){
            this.y = yelement-this.width;
            this.vy = 0;//!!!!
            this.jumping = false;
            //this.stoppedfalling = true;
        }
    }
    
    walkfaster(){
        if(this.oldX==this.x && this.x<195){
            this.x+=0.1;
            console.log("playerWalk");
        }
    }

    wearMask(){
        if(this.maskOn){
            clearTimeout(this.to);
        }
        this.maskOn = true;
        this.to = setTimeout(() => {this.noMask()}, 4000);
    }
    noMask(){
        this.maskOn = false;
    }
    update(ctx){
        this.walkfaster();
        this.oldX = this.x;
        this.vy+=CONSTANTS.gravitY;
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
    
}