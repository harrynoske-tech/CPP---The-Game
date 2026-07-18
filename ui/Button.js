class Button extends Phaser.GameObjects.Container {

    constructor(scene, x, y, width, height, text, callback) {

        super(scene, x, y);

        this.callback = callback;

        this.background = scene.add.graphics();

        this.background.fillStyle(Theme.Colors.accent, 1);
        this.background.fillRoundedRect(
            -width / 2,
            -height / 2,
            width,
            height,
            14
        );

        this.label = scene.add.text(0, 0, text, {
            fontFamily: "Arial",
            fontSize: "28px",
            fontStyle: "bold",
            color: Theme.Colors.white
        });

        this.label.setOrigin(0.5);

        this.add(this.background);
        this.add(this.label);

        this.setSize(width, height);

        this.setInteractive(
            new Phaser.Geom.Rectangle(
                -width / 2,
                -height / 2,
                width,
                height
            ),
            Phaser.Geom.Rectangle.Contains
        );

        this.on("pointerover", () => {

            this.setScale(1.03);

        });

        this.on("pointerout", () => {

            this.setScale(1);

        });

        this.on("pointerdown", () => {

            this.setScale(0.96);

        });

        this.on("pointerup", () => {

            this.setScale(1.03);

            if (this.callback) {

                this.callback();

            }

        });

        scene.add.existing(this);

    }

}
