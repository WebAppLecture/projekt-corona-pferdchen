export class GameObject {

    constructor(x, y, width, vx, vy){
        this.x = x;
        this.y = y;
        this.width = width;
        this.vx = vx;
        this.vy = vy;
    }

    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }
    update(){
        this.x +=this.vx;
        this.y+=this.vy;
    }
    draw(ctx){
        
        
    }
}

export class SquareObject extends GameObject{

    constructor(x, y, width, height, color, vx, vy){
        super(x,y,width,vx,vy);
        this.height = height;
        this.color = color;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export class RoundObject extends GameObject{ //Virus!

    constructor(x, y, width, color,vx,vy){
        super(x,y,width,vx,vy);
        this.color = color;
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
        ctx.fill();
    }
}

export class Toiletpaper extends GameObject{
    constructor(x,y,width,vx,vy){
        super(x,y,"#999",vx,vy);
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
            ctx.strokeStyle = "#999";
            ctx.stroke();
        }
        ctx.beginPath();
            ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "#A98E50";
            ctx.fill();
        
    }
    move(dx, dy){
        super.move(dx,dy);
    }
    update(){
        super.update();
    }
}