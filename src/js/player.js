import { GameObject } from "./gameObject.js";

export class Player extends GameObject{
    constructor(x, y, width, vx, vy,color){
       super(x,y,width,vx,vy);
        this.color = color;
        
    }

    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }
    update(){
        this.x +=this.vx;
        this.y+=this.vy;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
    }
}