import { _ans9 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level9 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level9' });
    }

    preload(){
        _preloadScene(this, 9);
    }

    create(){
        _createScene(this, 9, 1, 2, 3, _ans9);
    }
}