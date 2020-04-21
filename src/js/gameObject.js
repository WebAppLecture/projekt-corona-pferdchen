


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
    static rectangleCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y;
    }
}
export class TakeObject extends GameObject{ //Klasse fuer alle nehmbaren Objekte
    constructor(x,y,width, color, vx,vy,sound,visible){
        super(x, y, width, color, vx, vy, true);
        this.sound = sound;
        this.visible = visible;
    }
    //TODO: Methode für Sound abspielen bei berührung
    //Todo: Toggle visibility
    take(){
        //countsomething
        //playsound
        
        
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

export class Virus extends TakeObject{

    constructor(x, y, width, color,vx,vy,visible){
        super(x,y,width,color,vx,vy,"../../src/sounds/virus.wav", visible);
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
    constructor(x,y,width, vx,vy,visible){
        super(x,y, width,"#999", vx,vy,"../../src/sounds/toiletp.wav",visible);
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
    push(dx, dy){
        super.push(dx,dy);
    }
    update(){
        super.update();
    }
    take(){
        //let tp = document.querySelector(".toiletpaper:first-child");
        
        //tp.classList.remove("disabled");
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