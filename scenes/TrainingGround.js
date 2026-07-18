class TrainingGround {

    constructor(scene) {
        this.scene = scene;
    }

    build() {

        // Grass
        this.scene.add.rectangle(
            1500,
            1500,
            3000,
            3000,
            0x4f7d4a
        );

        // Horizontal roads
        for (let y = 500; y <= 2500; y += 500) {

            this.scene.add.rectangle(
                1500,
                y,
                3000,
                180,
                0x3d3d3d
            );

        }

        // Vertical roads
        for (let x = 500; x <= 2500; x += 500) {

            this.scene.add.rectangle(
                x,
                1500,
                180,
                3000,
                0x3d3d3d
            );

        }

    }

}
