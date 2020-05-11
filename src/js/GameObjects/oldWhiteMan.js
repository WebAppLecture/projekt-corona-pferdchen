import { TakeObject } from "./gameObject.js";
import { CONSTANTS } from "../constants.js"; 

export class OldWhiteMan extends TakeObject {
    constructor(x,y, width, facecolor, vx,vy){
        super(x, y, width, facecolor, vx,vy);
        this.x = x;
        this.y = y;
        this.width = width;
        this.facecolor = facecolor;
        this.human = true;
        this.infected = false;
        this.met = false;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width+7, 4.2, 0.5);
        ctx.fillStyle = CONSTANTS.OWMhairColor;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        ctx.fillStyle = this.facecolor;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.x-this.width/2, this.y-this.width*0.3);
        ctx.arc(this.x-this.width/2, this.y-this.width*0.3, this.width/3, 5.5, 2.5);
        ctx.fillStyle = CONSTANTS.EyeColor;
        ctx.fill();
        
        ctx.beginPath();
        ctx.strokeStyle= CONSTANTS.EyeColor;
        ctx.moveTo(this.x-this.width*0.9,this.y+this.width/2);
        ctx.lineTo(this.x-this.width*0.3,this.y+this.width/2);
        ctx.stroke();
    }
    infect(){
        this.infected = true;
        this.facecolor = "green";
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