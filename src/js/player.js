import { GameObject } from "./GameObjects/gameObject.js";
import Config from "./config.js";

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
            this.vy+=Config.JUMP_Y;
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
        if(this.oldX==this.x && this.x<Config.PLAYER_X-5){
            this.x+=Config.PLAYER_FASTER;
        }
    }

    infect(){
        this.infected = true;
        this.to = setTimeout(() => {this.infected=false}, 5000);
    }
    wearMask(){
        if(this.maskOn){
            clearTimeout(this.to);
        }
        this.infected = false;
        this.maskOn = true;
        this.to = setTimeout(() => {this.noMask()}, 4000);
    }
    noMask(){
        clearTimeout(this.to);
        this.maskOn = false;
    }
    update(ctx){
        this.walkfaster();
        this.oldX = this.x;
        this.vy+=Config.GRAVITY_Y;
        super.update(ctx);
    }
    draw(ctx){
        let maskX = this.x+30;
        let maskY = this.y+17;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
        if(this.maskOn){
            ctx.fillStyle = Config.MASK_COLOR;
            ctx.fillRect(this.x+15, this.y+17, 15, 11);
        }
        if (this.infected){
            let teil = (Math.PI/10);
            for(let i = 0; i<20; i+=2){
                ctx.beginPath();
                let stueck =teil*i;
                ctx.arc(maskX, maskY, 11, stueck, stueck+teil);
                ctx.strokeStyle = Config.V_OUTER_COLOR;
                ctx.stroke();
                ctx.fill();
            }
            ctx.shadowBlur = 20;
            ctx.shadowColor = Config.V_SHADOW_COLOR;
            
            ctx.beginPath();
            ctx.arc(maskX, maskY, 9, 0, 2 * Math.PI);
            ctx.fillStyle = Config.V_INNER_COLOR;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
    
}