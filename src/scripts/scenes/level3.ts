import { _ans3 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level3 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level3' });
    }

    preload(){
        _preloadScene(this, 3);
    }

    create(){
        _createScene(this, 3, 1, 2, 3, _ans3);
    }
}