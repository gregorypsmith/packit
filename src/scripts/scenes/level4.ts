import { _ans4 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level4 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level4' });
    }

    preload(){
        _preloadScene(this, 4);
    }

    create(){
        _createScene(this, 4, 5, 15, 24, _ans4);
    }
}