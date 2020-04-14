import { _ans5 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level5 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level5' });
    }

    preload(){
        _preloadScene(this, 5);
    }

    create(){
        _createScene(this, 5, 12, 35, 80, _ans5);
    }
}