import 'phaser'
import "regenerator-runtime/runtime";

import MainScreen from './scenes/mainScreen'
import Level1 from './scenes/level1'
import Level2 from './scenes/level2'
import Level3 from './scenes/level3'
import Level4 from './scenes/level4'
import Level5 from './scenes/level5'
import Level6 from './scenes/level6'
import Level7 from './scenes/level7'
import Level8 from './scenes/level8'
import Level9 from './scenes/level9'
import Level10 from './scenes/level10'
import Level11 from './scenes/level11'
import Level12 from './scenes/level12'
import Level13 from './scenes/level13'
import Level14 from './scenes/level14'
import Level15 from './scenes/level15'
import EndScreen from './scenes/endScreen'

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#DCDCDC',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [MainScreen, Level1, Level2, Level3, Level4, Level5, Level6,
  Level7, Level8, Level9, Level10, Level11, Level12, Level13, Level14,
  Level15, EndScreen],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
};

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
