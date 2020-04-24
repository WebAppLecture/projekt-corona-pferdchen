import {TakeObject } from "./gameObject.js";
import { Player } from "./player.js";

export class Mask extends TakeObject{
    constructor(x,y,width,vx,vy){
        super(x, y, width, "#66FFCC", vx, vy,"../../src/sounds/mask.wav");
        this.height = 20;
        this.x = x;
        this.y = y;
        this.width = width;
        
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    collision(playerx,playery,playerwidth){
        return (this.x<playerx+playerwidth&&
            this.x>playerx-this.width
            &&this.y<playery+playerwidth+1
            &&this.y>playery-this.height);
        
    }
    take(){
        let audio = new Audio("../../src/sounds/mask.wav");
        audio.play();
        return "1Maske";
        //Player.drawMask();
    }
}