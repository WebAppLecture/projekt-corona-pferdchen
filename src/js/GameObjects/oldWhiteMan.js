import { GameObject } from "./gameObject.js";
import Config from "../config.js";

export class OldWhiteMan extends GameObject {
    constructor(x,y, width, facecolor, vx){
        super(x, y, width, facecolor, vx, 0, true);
        this.facecolor = facecolor;
        this.human = true;
        this.infected = false;
        this.met = false;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width+7, 4.2, 0.5);
        ctx.fillStyle = Config.OWM_HAIR_COLOR;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        ctx.fillStyle = this.facecolor;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.x-this.width/2, this.y-this.width*0.3);
        ctx.arc(this.x-this.width/2, this.y-this.width*0.3, this.width/3, 5.5, 2.5);
        ctx.fillStyle = Config.EYE_COLOR;
        ctx.fill();
        
        ctx.beginPath();
        ctx.strokeStyle= Config.EYE_COLOR;
        ctx.moveTo(this.x-this.width*0.9,this.y+this.width/2);
        ctx.lineTo(this.x-this.width*0.3,this.y+this.width/2);
        ctx.stroke();
    }
    infect(){
        this.infected = true;
        this.facecolor = Config.OWM_I_FACE;
    }
    take(){
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