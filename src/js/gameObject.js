import { CONSTANTS } from "./constants.js";



export class GameObject {

    constructor(x, y, width, color, vx, vy, takeable){
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
        this.vx = vx;
        this.vy = vy;
        this.takeable = takeable;
    }

    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }
    update(){
        this.x +=this.vx;
        this.y +=this.vy;
    }
    draw(ctx){
    }

}
export class TakeObject extends GameObject{ //Klasse fuer alle nehmbaren Objekte
    constructor(x,y,width, color, vx,vy){
        super(x, y, width, color, vx, vy, true);
        this.human = false;
    }
    
    take(){
    }
    collision(playerx,playery,playerwidth){
        return (this.x<playerx+playerwidth&&
            this.x>playerx-this.width
            &&this.y<playery+playerwidth+1
            &&this.y>playery-this.width);
        
    }
}


export class GroundObject extends GameObject{

    constructor(x, y, width, color, vx, vy){
        super(x,y,width, color,vx,vy, false);
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
        this.human = false;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.width);
    }
    collision(playerx,playery,playerwidth){
        return (this.x<playerx+playerwidth&&
            this.x>playerx-this.width
            &&this.y<playery+playerwidth+1
            &&this.y>playery-this.width);
        
    }
}
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

export class Virus extends TakeObject{

    constructor(x, y, width, outerColor, innerColor,vx,vy){
        super(x,y,width,innerColor,vx,vy);
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
        ctx.shadowColor = "yellow";
        
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
export class Neighbour extends GameObject{
    constructor(x,y, radius, facecolor, vx,vy){
        super(x, y, radius, facecolor, vx,vy, false);
        this.x = x;
        this.y = y;
        this.width = radius;
        this.facecolor = facecolor;
        this.human = true;
        this.met = false;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        ctx.fillStyle = this.facecolor;
        ctx.fill();

        //let beginHair = 1.4*Math.PI;
        //let endHair = 2*Math.PI;
        //let hair = endHair - beginHair;
        //let part = hair/5;
        
        //let teil = (Math.PI/14);
         //Haare
         
        for(let h = 0; h<6; h++){
            let hairX = this.width*Math.cos((40+(h*4))/9);
            let hairY = this.width*Math.sin((40+(h*4))/9);
            ctx.beginPath();
            ctx.arc(hairX+this.x, hairY+this.y, 10, 0, 2*Math.PI);
            ctx.fillStyle = CONSTANTS.NBhairColor;
            ctx.fill();
        }
        ctx.beginPath();
        ctx.moveTo(this.x-12, this.y-6);
        ctx.arc(this.x-10, this.y-4, 6, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        
        ctx.beginPath();
        ctx.strokeStyle= "black";
        ctx.arc(this.x-15, this.y, 15, 0.2, 0.6 * Math.PI);
        ctx.stroke();

        
    }
    meet(){
        if(!this.met){
            console.log("meet Neighbour");
            this.met = true;
            return "1NB";
        }
        //let audio = new Audio("../../src/sounds/altermann.wav");
        //audio.play();
        
    }
    collision(playerx,playery,playerwidth){
        return (playerx>this.x-this.width-playerwidth&&
            playerx<this.x+this.width&&
            playery<this.y+this.width&&
            playery>this.y-playerwidth-this.width);
    }
}