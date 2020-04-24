


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

    constructor(x, y, vx, vy){
        super(x,y,30, "green",vx,vy, false);
        this.x = x;
        this.y = y;
        this.width = 30;
        this.color = "green";
        
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
export class OldWhiteMan extends TakeObject{
    constructor(x,y, width, color, vx,vy){
        super(x, y, width, color, vx,vy);
        this.x = x;
        this.y = y;
        this.width = width;

    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 4.2, 0.5);
        ctx.fillStyle = "#f0ecd1";
        ctx.fill();


        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width-7, 0, 2 * Math.PI);
        ctx.fillStyle = "#fac34d";
        ctx.fill();


        ctx.beginPath();
        ctx.moveTo(this.x-12, this.y-6);
        ctx.arc(this.x-12, this.y-6, 8, 5.5, 2.5);
        ctx.fillStyle = "black";
        ctx.fill();
        
        ctx.beginPath();
        ctx.strokeStyle= "black";
        ctx.moveTo(this.x-8,this.y+10);
        ctx.lineTo(this.x-18,this.y+10);
        ctx.stroke();

        
    }
    take(){
        let audio = new Audio("../../src/sounds/altermann.wav");
        audio.play();
        return "1OWM";
    }
    collision(playerx,playery,playerwidth){
        return (this.x<playerx+playerwidth&&
            this.x>playerx-this.width
            &&this.y<playery+playerwidth+1
            &&this.y>playery-this.width);
        
    }
}

export class Virus extends TakeObject{

    constructor(x, y, width, color,vx,vy){
        super(x,y,width,color,vx,vy,"../../src/sounds/virus.wav");
        this.color = color;
        //sound
    }
    draw(ctx){
        let teil = (Math.PI/10);
        for(let i = 0; i<20; i+=2){
            ctx.beginPath();
            let stueck =teil*i;
            ctx.arc(this.x, this.y, this.width+2, stueck, stueck+teil);
            ctx.strokeStyle = "red";
            ctx.stroke();
            ctx.lineWidth =3;
            ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        //ctx.shadowBlur = 10;
       // ctx.shadowColor = this.color;
        ctx.fill();
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
        super(x,y, width,"#999", vx,vy,"../../src/sounds/toiletp.wav");
        this.width = width;
        this.outerColor = "#bbb";
        
    }
    draw(ctx){
        for(let i= this.width;i>5; i-=4){
            ctx.beginPath();
            ctx.arc(this.x, this.y, i, 0, 2 * Math.PI);
            ctx.fillStyle = this.outerColor;
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#ddd";
            ctx.stroke();
        }
        ctx.beginPath();
            ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "#A98E50";
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