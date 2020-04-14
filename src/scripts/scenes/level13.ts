import { _ans13 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level13 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level13' });
    }

    preload(){
        _preloadScene(this, 13);
    }

    create(){
        _createScene(this, 13, 2, 4, 16, _ans13);
    }
}