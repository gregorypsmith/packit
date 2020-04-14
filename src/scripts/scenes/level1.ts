import { _ans1 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level1 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level1' });
    }

    preload(){
        _preloadScene(this, 1);
    }

    create(){
        _createScene(this, 1, 1, 2, 3, _ans1);
    }
}