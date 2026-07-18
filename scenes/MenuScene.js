class MenuScene extends Phaser.Scene {

    constructor() {

        super("MenuScene");

    }

    create() {

        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor(Theme.Colors.background);

        this.add.text(
            width / 2,
            180,
            "CLOSE PROTECTION",
            Theme.Fonts.title
        ).setOrigin(0.5);

        new Button(

            this,

            width / 2,

            height / 2,

            320,

            70,

            "START GAME",

            () => {

                this.scene.start("GameScene");

            }

        );

    }

}
