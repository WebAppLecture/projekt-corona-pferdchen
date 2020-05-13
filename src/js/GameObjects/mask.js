import {TakeObject } from "./gameObject.js";

export class Mask extends TakeObject{
    constructor(x,y,width, height, color,vx){
        super(x, y, width, color, vx);
        this.height = height;
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
    }
}