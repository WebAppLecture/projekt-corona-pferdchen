export class GameTemplate {

    constructor(mode) {
        this.won = false;
        this.wonText = ["Juhu!", "Thank you for", "the toiletpaper!", "click to", "play again"]
        this.gameOverText = ["Game Over", "", "click to", "play again"];
        this.fillStyle = "#000";
        
        this.start(mode);
        //this.bindControls();
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
        let fontSize = 50;
        ctx.fillStyle = "#000"; //this.fillStyle;
        ctx.font = fontSize + "px monospace";
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";

    
        let startY = ctx.canvas.height/2 - this.gameOverText.length/2 * fontSize;
        this.gameOverText.forEach((line, i) => {
            ctx.fillText(line, ctx.canvas.width/2, startY + i * fontSize);
        }); 
        
    }
    
}
    
    