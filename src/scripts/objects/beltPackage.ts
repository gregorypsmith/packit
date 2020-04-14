
export default class BeltPackage extends Phaser.Physics.Arcade.Sprite {

    packageType: number;
  
    constructor(scene: Phaser.Scene, x: number, y: number, packageType: number) {
      let alias = "package" + packageType;
      super(scene, x, y, alias);
      scene.add.existing(this);
      this.setScale(0.3)
      .setInteractive();
      this.packageType = packageType;
    }
  }