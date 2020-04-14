import { _ans15 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level15 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level15' });
    }

    preload(){
        _preloadScene(this, 15);
    }

    create(){
        _createScene(this, 15, 1, 2, 3, _ans15);
    }
}