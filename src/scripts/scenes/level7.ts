import { _ans7 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level7 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level7' });
    }

    preload(){
        _preloadScene(this, 7);
    }

    create(){
        _createScene(this, 7, 1, 2, 3, _ans7);
    }
}