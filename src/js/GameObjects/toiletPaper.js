import { TakeObject } from "./gameObject.js";
import Config from "../config.js";


export class Toiletpaper extends TakeObject{
    constructor(x,y,width, vx){
        super(x,y, width,Config.TP_OUTER_COLOR, vx);
    }
    draw(ctx){
        for(let i= this.width;i>5; i-=4){
            ctx.beginPath();
            ctx.arc(this.x, this.y, i, 0, 2 * Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.lineWidth = 0.7;
            ctx.strokeStyle = Config.TP_LINE_COLOR;
            ctx.stroke();
        }
        ctx.beginPath();
            ctx.arc(this.x, this.y, 6, 0, 2 * Math.PI);
            ctx.fillStyle = Config.TP_INNER_COLOR;
            ctx.fill();
        
    }
    /*push(dx, dy){
        super.push(dx,dy);
    }*/
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