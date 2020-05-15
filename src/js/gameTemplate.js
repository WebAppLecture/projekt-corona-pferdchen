import Config from "./config.js";
import { Counter } from "./counter.js";

export class GameTemplate {

    constructor(inHealthMode,countList) {
        this.won = false;
        this.gameOver = false;
        this.inHealthMode = inHealthMode;
        this.start(inHealthMode);
        this.counter = new Counter(inHealthMode, countList);
    }
    setText(){
        if(!this.won){
            return Config.GAME_OVER_TEXT;
        } if (this.inHealthMode){
            return Config.WON_HEALTH;
        }
        return Config.WON_DARK;
    }

    tick(ctx) {
        if(this.gameOver) {
            if(this.won){
                this.gameOverText = this.wonText;
            }
            this.draw(ctx);
            this.gameOverScreen(ctx);
            return;
        }
        this.update(ctx);
        this.draw(ctx);
    }
    
    gameOverScreen(ctx){
        let text = this.setText();
        let fontSize = 50;
        ctx.fillStyle = Config.TEXT_COLOR;
        ctx.font = fontSize + "px monospace";
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 12;
        let startY = ctx.canvas.height/2 - text.length/2 * fontSize;
        text.forEach((line, i) => {
            ctx.fillText(line, ctx.canvas.width/2, startY + i * fontSize);
        }); 
        ctx.shadowBlur = 0;
    }
    
}
    
    