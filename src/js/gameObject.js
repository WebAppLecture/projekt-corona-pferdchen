export class GameObject {

    constructor(x, y, width, height, color, vx, vy){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
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
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    
    }

    
}

export class RoundObject {

    constructor(x, y, width, color,vx,vy){
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
        this.vx = vx;
        this.vy = vy;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    update(){
        this.x +=this.vx;
        this.y+=this.vy;
    }
    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }
}