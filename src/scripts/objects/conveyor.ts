
export default class Conveyor extends Phaser.Physics.Arcade.Sprite {

  packages: number[];  

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'conveyor');
    scene.add.existing(this);
    this.setScale(0.6)
    .setInteractive();
    this.packages = [0, 0, 0, 0, 0];
  }

  addPackage(packageType) {
    return ++this.packages[packageType];
  }

  removePackage(packageType) {
    if (this.packages[packageType] > 0){
      return --this.packages[packageType];
    }
    else {
      return null
    }
  }

  getPackages(){
    return this.packages;
  }

  getNumPackages(){
    return this.packages[1] + this.packages[2] + this.packages[3];
  }

  getIndexPackages(belt){
    return this.packages[belt];
  }
}