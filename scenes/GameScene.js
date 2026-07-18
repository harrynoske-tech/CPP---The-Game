class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }

    create() {

        const width = this.scale.width;
        const height = this.scale.height;

        this.cameras.main.setBackgroundColor(0x2a2a2a);
        const map = new TrainingGround(this);
map.build();

        this.player = this.add.circle(
            width / 2,
            height / 2,
            18,
            0x2ecc71
        );

        this.keys = this.input.keyboard.addKeys({
            up: "W",
            down: "S",
            left: "A",
            right: "D"
        });

        this.speed = 250;
    }

    update(time, delta) {

        const distance = this.speed * (delta / 1000);

        if (this.keys.left.isDown) this.player.x -= distance;
        if (this.keys.right.isDown) this.player.x += distance;
        if (this.keys.up.isDown) this.player.y -= distance;
        if (this.keys.down.isDown) this.player.y += distance;

    }

}
