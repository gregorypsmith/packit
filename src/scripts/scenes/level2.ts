import { _ans2 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level2 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level2' });
    }

    preload(){
        _preloadScene(this, 2);
    }

    create(){
        _createScene(this, 2, 1, 2, 3, _ans2);
    }
}