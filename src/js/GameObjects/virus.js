import { GameObject } from "./gameObject.js";
import Config from "../config.js";

export class Virus extends GameObject{

    constructor(x, y, width, outerColor, innerColor,vx){
        super(x,y,width,innerColor,vx, 0, true);
        this.outerColor = outerColor;
        this.innerColor = innerColor;
    }
    draw(ctx){
        
        let teil = (Math.PI/10);
        for(let i = 0; i<20; i+=2){
            
            ctx.beginPath();
            let stueck =teil*i;
            ctx.arc(this.x, this.y, this.width+2, stueck, stueck+teil);
            ctx.strokeStyle = this.outerColor;
            ctx.stroke();
            ctx.lineWidth =3;
            ctx.fill();
        }
        ctx.shadowBlur = 50;
        ctx.shadowColor = Config.V_SHADOW_COLOR;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        ctx.fillStyle = this.innerColor;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
    collision(playerx,playery,playerwidth){
        return (playerx>this.x-this.width-playerwidth&&
            playerx<this.x+this.width&&
            playery<this.y+this.width&&
            playery>this.y-playerwidth-this.width);
    }
    take(){
        let audio = new Audio("../../src/sounds/virus.wav");
        audio.play();
        return "1Virus";
    }
}