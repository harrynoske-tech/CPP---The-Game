const gameConfig = {
    type: Phaser.AUTO,

    backgroundColor: "#111111",

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720
    },

    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },

    scene: [
        BootScene,
        PreloadScene,
        MenuScene,
        GameScene,
        PauseScene,
        SettingsScene,
        ShopScene,
        VictoryScene,
        GameOverScene
    ]
};
