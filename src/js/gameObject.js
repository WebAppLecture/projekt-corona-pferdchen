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

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    
    }

    update(){
        this.x +=this.vx;
        this.y+=this.vy;
    }
}