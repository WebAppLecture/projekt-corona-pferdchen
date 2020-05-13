
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
    constructor(x,y,width, color, vx){
        super(x, y, width, color, vx, 0, true);
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
    constructor(x, y, width, color, vx){
        super(x,y,width, color,vx, 0, false);
        this.x = x;
        this.y = y;
        this.width = width;
        this.color = color;
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