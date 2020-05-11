import { GameObject } from "./gameObject.js";
import { CONSTANTS } from "../constants.js"; 

export class OldWhiteMan extends GameObject{
    constructor(x,y, width, facecolor, vx,vy){
        super(x, y, width, facecolor, vx,vy, false);
        this.x = x;
        this.y = y;
        this.width = width;
        this.facecolor = facecolor;
        this.human = true;
        this.met = false;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 4.2, 0.5);
        ctx.fillStyle = CONSTANTS.OWMhairColor;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width-7, 0, 2 * Math.PI);
        ctx.fillStyle = this.facecolor;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.x-12, this.y-6);
        ctx.arc(this.x-12, this.y-6, 8, 5.5, 2.5);
        ctx.fillStyle = CONSTANTS.EyeColor;
        ctx.fill();
        
        ctx.beginPath();
        ctx.strokeStyle= CONSTANTS.EyeColor;
        ctx.moveTo(this.x-8,this.y+10);
        ctx.lineTo(this.x-18,this.y+10);
        ctx.stroke();
    }
    
    meet(){
        if(!this.met){
            let audio = new Audio("../../src/sounds/altermann.wav");
            audio.play();
            this.met = true;
            return "1OWM";
        }
        
    }
    collision(playerx,playery,playerwidth){
        return (playerx>this.x-this.width-playerwidth&&
            playerx<this.x+this.width&&
            playery<this.y+this.width&&
            playery>this.y-playerwidth-this.width);
    }
}