import { _ans12 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level12 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level12' });
    }

    preload(){
        _preloadScene(this, 12);
    }

    create(){
        _createScene(this, 12, 3, 9, 13, _ans12);
    }
}