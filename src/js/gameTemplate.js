export class GameTemplate {

    constructor(mode) {
        this.gameOverText = ["Game Over", "play again:"];
        this.fillStyle = "#000";
       // this.applyMode(mode);
        this.start();
        this.bindControls();
    }

    start(){}

    tick(ctx) {
        if(this.gameOver) {
            
            this.gameOverScreen(ctx);
            
            return;
        }
        this.update(ctx);
        this.draw(ctx);
    }
    update() {}

    draw() {}
    gameOverScreen(ctx){
        let fontSize = 30;
        ctx.fillStyle = this.fillStyle;
        ctx.font = fontSize + "x monospace";
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";

        let startY = ctx.canvas.height/2 - this.gameOverText.length/2 * fontSize;
        this.gameOverText.forEach((line, i) => {
            ctx.fillText(line, ctx.canvas.width/2, startY + i * fontSize);
        }); 
    }
    input(type, active) {
        if(this.gameOver && type === "primary") {
            this.start();   
            this.bindControls();  
        }
        if(this.inputBinding.hasOwnProperty(type)) {
            this.inputBinding[type](active);
        }
    }
}