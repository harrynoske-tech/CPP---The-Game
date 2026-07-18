class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    create() {
        const { width, height } = this.scale;

        this.cameras.main.setBackgroundColor("#1a1a1a");

        this.add.text(width / 2, 180, "CLOSE PROTECTION", {
            fontFamily: "Arial",
            fontSize: "52px",
            fontStyle: "bold",
            color: "#ffffff"
        }).setOrigin(0.5);

        const startButton = this.add.text(width / 2, height / 2, "START GAME", {
            fontFamily: "Arial",
            fontSize: "32px",
            backgroundColor: "#2d6cdf",
            color: "#ffffff",
            padding: { left: 20, right: 20, top: 12, bottom: 12 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

        startButton.on("pointerdown", () => {
            this.scene.start("GameScene");
        });
    }
}
