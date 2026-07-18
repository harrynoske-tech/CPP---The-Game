class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        const { width, height } = this.scale;

        this.cameras.main.setBackgroundColor("#2b2b2b");

        this.add.text(width / 2, height / 2, "GAME SCENE", {
            fontFamily: "Arial",
            fontSize: "42px",
            color: "#ffffff"
        }).setOrigin(0.5);
    }
}
