import { _ans8 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level8 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level8' });
    }

    preload(){
        _preloadScene(this, 8);
    }

    create(){
        _createScene(this, 8, 1, 2, 3, _ans8);
    }
}