
export default class Package extends Phaser.Physics.Arcade.Sprite {

  packageType: number;

  constructor(scene: Phaser.Scene, x: number, y: number, packageType: number) {
    
    let alias = "package" + packageType;

    super(scene, x, y, alias);
    this.packageType = packageType;
    scene.add.existing(this);

    this.setScale(0.4)
    .setInteractive();
  }
}