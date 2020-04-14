
export default class RunButton extends Phaser.Physics.Arcade.Sprite {

    conveyors;
    ans;
    level;
  
    constructor(scene: Phaser.Scene, x: number, y: number, level: number, conveyors, ans) {
  
        super(scene, x, y, 'run');
        scene.add.existing(this);

        this.conveyors = conveyors;
        this.ans = ans;
        this.level = level;
  
        this.setScale(0.45)
        .setInteractive()
        .on('pointerover', () => {
            this.setTint(0xFFDF00);
            if(scene.input.activePointer.isDown) {
                this.y += 2;
            }
        })
        .on('pointerout', () => {
            if (scene.input.activePointer.isDown) {
                this.y -= 2;
                if (this.checkAnswer(conveyors, ans)) {
                    scene.add.image(680, 360, 'success').setOrigin(0.5)
                    .setScale(0.3);
    
                    setTimeout(function() {
                        scene.cameras.main.fadeOut();
                    }, 1000);
                    let levelStr = 'Level' + String(this.level + 1);
                    if (this.level == 15){
                        levelStr = 'EndScreen'
                    }
                    setTimeout(function () {
                        scene.scene.start(levelStr);
                      }, 2500);
                }
                else{
                    let failure = scene.add.image(680, 360, 'failure').setOrigin(0.5)
                    .setScale(0.5);
                    setTimeout(function () {
                        failure.destroy();
                      }, 2500);
                    this.clearTint();
                }
            }
        })
        .on('pointerdown', () => {
            this.y += 2;
        })
        .on('pointerup', () => {
            this.y -= 2;
            if (this.checkAnswer(conveyors, ans)) {
                scene.add.image(680, 360, 'success').setOrigin(0.5)
                .setScale(0.3);

                setTimeout(function() {
                    scene.cameras.main.fadeOut();
                }, 1000);
                let levelStr = 'Level' + String(this.level + 1);
                if (this.level == 15){
                    levelStr = 'EndScreen'
                }
                setTimeout(function () {
                    scene.scene.start(levelStr);
                  }, 2500);
            }
            else {
                let failure = scene.add.image(680, 360, 'failure').setOrigin(0.5)
                .setScale(0.5);
                setTimeout(function () {
                    failure.destroy();
                  }, 2500);
                this.clearTint();
            }
        });
    }

    checkAnswer(belts, ans){
        for (let i = 1; i <= 3; i++)
            for (let j = 1; j <= 4; j++){
                if (belts[i].getIndexPackages(j) != ans[i][j]) {
                    return false;
            }
        }
        return true;
    }

    checkBelts(belts, ans){
        var correct = [true, true, true, true]
        for (let i = 1; i <= 3; i++)
            for (let j = 1; j <= 4; j++){
                if (belts[i].getIndexPackages(j) != ans[i][j]) {
                    correct[i] = false;
            }
        }
        return correct;
    }
}