import { GameObject, GroundObject } from "./GameObjects/gameObject.js";
import {CONSTANTS} from "./constants.js";

export class Player extends GameObject{
    constructor(x, y, width, color, vx, vy){
        super(x,y,width,color,vx,vy,false);
        this.jumping = false;
        this.stoppedfalling = false;
        this.maskOn = false;
        this.to;
        this.oldX = x;
        this.infected = false;
    }

    pushAside(elemX){
        this.x=elemX-this.width;
    }

    jump(){ 
        if(this.jumping===false){
            this.vy+=CONSTANTS.jumpY;
            this.jumping = true;
        }
    }
    
    stopFalling(yelement){
        if(this.vy>0){
            this.y = yelement-this.width;
            this.vy = 0;
            this.jumping = false;
        }
    }
    
    walkfaster(){
        if(this.oldX==this.x && this.x<195){
            this.x+=0.1;
        }
    }

    infect(){
        this.infected = true;
        this.to = setTimeout(() => {this.infected=false}, 5000);
    }
    wearMask(){
        if(this.maskOn){
            clearTimeout(this.to);
            console.log("clearTO");
        }
        this.infected = false;
        this.maskOn = true;
        console.log("maskOn: "+this.maskOn);
        this.to = setTimeout(() => {this.noMask()}, 4000);
    }
    noMask(){
        clearTimeout(this.to);
        this.maskOn = false;
        console.log("noMask");
    }
    update(ctx){
        this.walkfaster();
        this.oldX = this.x;
        this.vy+=CONSTANTS.gravitY;
        super.update(ctx);
    }
    draw(ctx){
        let maskX = this.x+30;
        let maskY = this.y+17;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
        if(this.maskOn){
            ctx.fillStyle = CONSTANTS.maskColor;
            ctx.fillRect(this.x+15, this.y+17, 15, 11);
        }
        if (this.infected){
            let teil = (Math.PI/10);
            for(let i = 0; i<20; i+=2){
                ctx.beginPath();
                let stueck =teil*i;
                ctx.arc(maskX, maskY, 11, stueck, stueck+teil);
                ctx.strokeStyle = CONSTANTS.VouterColor;
                ctx.stroke();
                ctx.fill();
            }
            ctx.shadowBlur = 20;
            ctx.shadowColor = CONSTANTS.VshadowColor;
            
            ctx.beginPath();
            ctx.arc(maskX, maskY, 9, 0, 2 * Math.PI);
            ctx.fillStyle = CONSTANTS.VinnerColor;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
    
}