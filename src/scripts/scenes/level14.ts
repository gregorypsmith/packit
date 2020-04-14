import { _ans14 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level14 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level14' });
    }

    preload(){
        _preloadScene(this, 14);
    }

    create(){
        _createScene(this, 14, 1, 2, 3, _ans14);
    }
}