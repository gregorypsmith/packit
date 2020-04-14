
export default class EndScreen extends Phaser.Scene {

    constructor() {
        super({ key: 'EndScreen' });
      }
    
    preload() {
        this.load.image('backgroundLevel', 'assets/img/backgroundLevel.png');
        for (let i = 1; i <= 3; i++){
            let nestednightmaretext = 'nestednightmaretext' + i;
            this.load.image(nestednightmaretext, 'assets/img/' + nestednightmaretext + '.png');
        }
    }

    create() {
        var background = this.add.image(0, 0, 'backgroundLevel').setOrigin(0, 0);

        let seqnum = 1;
        let seqbox = this.add.image(640, 360, 'nestednightmaretext' + seqnum).setOrigin(0.5, 0.5)
        .setScale(0.7);
        let started = false;

        this.input.on('pointerdown', () => {
            started = true;
        });

        this.input.on('pointerup', () => {
            if (started){
                seqbox.destroy();
                seqnum++;
            }
            if (seqnum > 3){
                this.scene.start('MainScreen');
            }
            if (seqnum == 2){
                seqbox = this.add.image(640, 360, 'nestednightmaretext' + seqnum).setOrigin(0.5, 0.5)
                .setScale(0.7);
            }
            if (seqnum == 3){
                seqbox = this.add.image(640, 360, 'nestednightmaretext' + seqnum).setOrigin(0.5, 0.5)
                .setScale(0.7);
            }
        })
    }
}