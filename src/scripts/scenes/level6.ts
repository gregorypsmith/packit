import { _ans6 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level6 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level6' });
    }

    preload(){
        _preloadScene(this, 6);
    }

    create(){
        _createScene(this, 6, 2, 18, 20, _ans6);
    }
}