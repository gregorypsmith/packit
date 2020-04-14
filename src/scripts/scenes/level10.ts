import { _ans10 } from '../extras/answers'
import { _preloadScene } from "../extras/levelCode"
import { _createScene } from "../extras/levelCode"

export default class Level10 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level10' });
    }

    preload(){
        _preloadScene(this, 10);
    }

    create(){
        _createScene(this, 10, 1, 2, 3, _ans10);
    }
}