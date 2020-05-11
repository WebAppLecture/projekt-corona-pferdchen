import { CONSTANTS } from "../constants.js";
import { TakeObject } from "./gameObject.js";


export class Toiletpaper extends TakeObject{
    constructor(x,y,width, vx,vy){
        super(x,y, width,CONSTANTS.TPouterColor, vx,vy);
        this.width = width;
    }
    draw(ctx){
        for(let i= this.width;i>5; i-=4){
            ctx.beginPath();
            ctx.arc(this.x, this.y, i, 0, 2 * Math.PI);
            ctx.fillStyle = CONSTANTS.TPouterColor;
            ctx.fill();
            ctx.lineWidth = 0.7;
            ctx.strokeStyle = CONSTANTS.TPlineColor;
            ctx.stroke();
        }
        ctx.beginPath();
            ctx.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            ctx.fillStyle = CONSTANTS.TPinnerColor;
            ctx.fill();
        
    }
    push(dx, dy){S
        super.push(dx,dy);
    }
    update(){
        super.update();
    }
    take(){
        
        let audio = new Audio("../../src/sounds/toiletp.wav");
        audio.play();
        return "1TP";
        
    }
    collision(playerx,playery,playerwidth){
        return (playerx>this.x-this.width-playerwidth&&
            playerx<this.x+this.width&&
            playery<this.y+this.width&&
            playery>this.y-playerwidth-this.width);
    }
}