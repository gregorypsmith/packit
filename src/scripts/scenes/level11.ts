import { _ans11 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level11 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level11' });
    }

    preload(){
        _preloadScene(this, 11);
    }

    create(){
        _createScene(this, 11, 96, 99, 100, _ans11);
    }
}