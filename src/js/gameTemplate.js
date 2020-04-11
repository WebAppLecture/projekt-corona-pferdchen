export class GameTemplate {

    constructor(mode) {
       // this.gameOverText = ["GAME OVER", "Restart: A"];
        this.fillStyle = "#6bd26b";
       // this.applyMode(mode);
        this.start();
      //  this.bindControls();
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
}