import { GameObject } from "./gameObject.js";
import Config from "../config.js";


export class Neighbour extends GameObject{
    constructor(x,y, radius, facecolor, vx){
        super(x, y, radius, facecolor, vx, 0, true);
        this.width = radius;
        this.facecolor = facecolor;
        this.human = true;
        this.met = false;
        this.infected = false;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        ctx.fillStyle = this.facecolor;
        ctx.fill();
        for(let h = 0; h<6; h++){
            let hairX = this.width*Math.cos((40+(h*4))/9);
            let hairY = this.width*Math.sin((40+(h*4))/9);
            ctx.beginPath();
            ctx.arc(hairX+this.x, hairY+this.y, 10, 0, 2*Math.PI);
            ctx.fillStyle = Config.NB_HAIR_COLOR;
            ctx.fill();
        }
        ctx.beginPath();
        ctx.moveTo(this.x-12, this.y-6);
        ctx.arc(this.x-10, this.y-4, 6, 0, 2 * Math.PI);
        ctx.fillStyle = Config.EYE_COLOR;
        ctx.fill();
        
        ctx.beginPath();
        ctx.strokeStyle= Config.EYE_COLOR;
        if(this.infected){
            ctx.arc(this.x-this.width*0.5, this.y+this.width, this.width*0.6, 4.2, 5.5);
        } else {
            ctx.arc(this.x-this.width/2, this.y+this.width*0.1, this.width*0.6, 0.2, 0.6 * Math.PI);
        }
        ctx.stroke();

        
    }
    take(){ //abfrage - nur einmal treffen
        if(!this.met){
            this.met = true;
            return "1NB";
        }
    }
    infect(){
        this.infected = true;
        this.facecolor = Config.NB_I_FACE;
    }
    collision(playerx,playery,playerwidth){
        return (playerx>this.x-this.width-playerwidth&&
            playerx<this.x+this.width&&
            playery<this.y+this.width&&
            playery>this.y-playerwidth-this.width);
    }
}