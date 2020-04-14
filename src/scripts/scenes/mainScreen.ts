
export default class MainScreen extends Phaser.Scene {

    constructor() {
        super({ key: 'MainScreen' });
      }
    
    preload() {
        this.load.image('background', 'assets/img/backgroundMain.png');
        this.load.image('play', 'assets/img/playbutton.gif');
    }

    create() {
        var background = this.add.image(0, 0, 'background').setOrigin(0, 0);
        background.setScale(0.5);
        

        var titleText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 3, 'PackIT', {
            fill : 'white',
            font : '70px Impact'
        }).setOrigin(0.5);

        const play = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 1.8, 'play').setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', () => {
            console.log('click');
            this.scene.start('Level1');
        });
        

    }
}