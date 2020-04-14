import Package from '../objects/package'
import Conveyor from '../objects/conveyor';
import BeltPackage from '../objects/beltPackage';
import RunButton from '../objects/runButton';

export function _preloadScene(scene, levelNum){
    let codeImgName = 'level' + String(levelNum) + 'text';
    scene.load.image('backgroundLevel', 'assets/img/backgroundLevel.jpg');
    scene.load.image('topBar', 'assets/img/top-bar.jpg');
    scene.load.image('package0', 'assets/img/package0.png');
    scene.load.image('package1', 'assets/img/package1.png');
    scene.load.image('package2', 'assets/img/package2.png');
    scene.load.image('package3', 'assets/img/package3.png');
    scene.load.image('package4', 'assets/img/package4.png');
    scene.load.image('conveyor', 'assets/img/conveyor.png');
    scene.load.image('run', 'assets/img/run-button.png');
    scene.load.image('remove', 'assets/img/remove-package.png');
    scene.load.image(codeImgName, 'assets/img/' + codeImgName + '.png');
    scene.load.image('success', 'assets/img/success.png');
    scene.load.image('failure', 'assets/img/failure.png');
    scene.load.image('hintbutton', 'assets/img/hint.png');
    scene.load.image('correctbelt', 'assets/img/correctbelt.png');
    scene.load.image('wrongbelt', 'assets/img/remove-package.png');
    scene.load.image('progressbar', 'assets/img/progressbar.png');
    scene.load.image('options', 'assets/img/options.png');
    scene.load.image('progresslast', 'assets/img/progresslast.png');
    scene.load.image('flag', 'assets/img/checkeredflag.png');
    scene.load.image('greenarrow', 'assets/img/greenarrow.png');
    scene.load.image('black', 'assets/img/black.png');
    for (let i = 1; i <= 10; i++){
        let introtext = 'introtext' + i;
        scene.load.image(introtext, 'assets/img/' + introtext + '.png');
    }
    for (let i = 1; i <= 3; i++){
        let biggerpicturetext = 'biggerpicturetext' + i;
        scene.load.image(biggerpicturetext, 'assets/img/' + biggerpicturetext + '.png');
    }
    for (let i = 1; i <= 3; i++){
        let bigpicturetext = 'bigpicturetext' + i;
        scene.load.image(bigpicturetext, 'assets/img/' + bigpicturetext + '.png');
    }
    for (let i = 1; i <= 3; i++){
        let detailorientedtext = 'detailorientedtext' + i;
        scene.load.image(detailorientedtext, 'assets/img/' + detailorientedtext + '.png');
    }
    for (let i = 1; i <= 6; i++){
        let helloworldtext = 'helloworldtext' + i;
        scene.load.image(helloworldtext, 'assets/img/' + helloworldtext + '.png');
    }
    for (let i = 1; i <= 4; i++){
        let level2text = 'level2text' + i;
        scene.load.image(level2text, 'assets/img/' + level2text + '.png');
    }
    for (let i = 1; i <= 3; i++){
        let nestednightmaretext = 'nestednightmaretext' + i;
        scene.load.image(nestednightmaretext, 'assets/img/' + nestednightmaretext + '.png');
    }
}

function loadScene(scene, level, first, second, third){
    let levelStr = '';
    if (level <= 3){
        levelStr = "\"Hello World\""; }
    else if (level <= 6){
        levelStr = "\"The Big Picture\""; }
    else if (level <= 10){
        levelStr = "\"Detail Oriented\""; }
    else if (level <= 13){
        levelStr = "\"The Bigger Picture\""; }
    else {
        levelStr = "\"Nested Nightmare\"";
    }

    let scaleNum = 0.855;
    if (level == 2 || level == 3 || level == 7 || level == 8){
        scaleNum = 0.79;
    }
    if (level >= 4 && level <= 6){
        scaleNum = 0.63;
    }
    if (level == 9 || level == 11 || level == 12 || level == 14){
        scaleNum = 0.68;
    }
    if (level == 13 || level == 15){
        scaleNum = 0.69;
    }
    if (level == 10){
        scaleNum = 0.63;
    }

    scene.add.image(0, 0, 'backgroundLevel').setOrigin(0, 0);
    scene.add.image(0, 0, 'topBar').setOrigin(0, 0);
    scene.add.image(0, 180, 'level' + level + 'text').setOrigin(0, 0)
    .setScale(scaleNum);
    scene.add.image(5, 110, 'progressbar').setOrigin(0, 0).setScale(1.2);
    scene.add.text(25, 10, 'Level ' + level, {fontfamily: 'Courier New', fontSize: '30px'}).setOrigin(0, 0);
    scene.add.text(10, 45, levelStr, {fontfamily: 'Courier New', fontSize: '25px'}).setOrigin(0, 0);
    scene.add.text(565, 220, 'belts[]', {fontfamily: 'Courier New', fontSize: '20px'}).setOrigin(0.5);
    scene.add.text(565, 280, first, {fontfamily: 'Courier New', fontSize: '25px'}).setOrigin(0.5);
    scene.add.text(565, 460, second, {fontfamily: 'Courier New', fontSize: '25px'}).setOrigin(0.5);
    scene.add.text(565, 640, third, {fontfamily: 'Courier New', fontSize: '25px'}).setOrigin(0.5);
    scene.add.text(350, 70, 'HINT').setOrigin(0.5);
    scene.add.text(440, 70, 'OPTIONS').setOrigin(0.5);
    scene.add.text(1200, 160, 'RUN', {fontfamily: 'Courier New', fontSize: '25px'}).setOrigin(0.5);
}

function createConveyors(scene){
    var conveyor1 = new Conveyor(scene, 985, 280);
    var conveyor2 = new Conveyor(scene, 985, 460);
    var conveyor3 = new Conveyor(scene, 985, 640);
    return [conveyor1, conveyor1, conveyor2, conveyor3];
}

export function _createScene(scene, levelNum, firstConv, secondConv, thirdConv, ans){

    loadScene(scene, levelNum, firstConv, secondConv, thirdConv);
    let conveyors = createConveyors(scene);
    var runButton = new RunButton(scene, 1200, 80, levelNum, conveyors, ans);

    var optionsButton = scene.add.image(440, 35, 'options')
    .setScale(0.76);

    var hintButton = scene.add.image(350, 35, 'hintbutton')
    .setInteractive()
    .setScale(0.9)
    .on('pointerdown', () => {
        let correct = runButton.checkBelts(conveyors, ans);
        let belt1Img;
        let belt2Img;
        let belt3Img;
        let imgs = [0, belt1Img, belt2Img, belt3Img];
        
        for (let i = 1; i <= 3; i++){
            if (!correct[i]){
                imgs[i] = scene.add.image(565, 280 + (180 * (i-1)), 'wrongbelt');
            }
            else {
                imgs[i] = scene.add.image(565, 280 + (180 * (i-1)), 'correctbelt');
            }
            setTimeout(function () {
                imgs[i].destroy();
              }, 2500);
        }
    });

    for (let i = 1; i <= levelNum; i++){
        let rect = scene.add.rectangle(29, 138, 26 * i, 18).setOrigin(0, 0);
        rect.setFillStyle(0x00ff00);

        if (i == levelNum){
            scene.add.image(29 + 26 * i, 138, 'progresslast')
            .setOrigin(0, 0);
            scene.add.image(71 + 26*3, 125, 'flag').setScale(0.8);
            scene.add.image(71 + 26*6, 125, 'flag').setScale(0.8);
            scene.add.image(71 + 26*10, 125, 'flag').setScale(0.8);
            scene.add.image(71 + 26*12, 125, 'flag').setScale(0.8);
            scene.add.image(71 + 26*15, 125, 'flag').setScale(0.8);
        }
    }

    

    /* for testing purposes  */
    scene.add.text(10, 81, '<< Prev')
    .setInteractive()
    .on('pointerdown', () => {
        if (levelNum != 1){
            scene.scene.start('Level' +  String(levelNum - 1));
        }
    });
    scene.add.text(100, 81, 'Next >>')
    .setInteractive()
    .on('pointerdown', () => {
        if (levelNum != 15){
            scene.scene.start('Level' +  String(levelNum + 1));
        }
        else{
            scene.scene.start('EndScreen');
        }
    });

    var zone1 = scene.add.zone(940, 240, 680, 120).setRectangleDropZone(680, 120);
    var zone2 = scene.add.zone(940, 420, 680, 120).setRectangleDropZone(680, 120);
    var zone3 = scene.add.zone(940, 600, 680, 120).setRectangleDropZone(680, 120);


    var package1 = new Package(scene, scene.cameras.main.width / 2 - 40, 85, 1);

    if (levelNum < 4 || levelNum == 7 || levelNum == 8){
        for (let i = 1; i <= 3; i++){
            scene.add.image((scene.cameras.main.width / 2 - 40) + (140 * i), 85, 'package0')
            .setScale(0.4);
        }
    }
    else{
        let package2 = new Package(scene, scene.cameras.main.width / 2 + 100, 85, 2);
        let package3 = new Package(scene, scene.cameras.main.width / 2 + 240, 85, 3);
        let package4 = new Package(scene, scene.cameras.main.width / 2 + 380, 85, 4);

        scene.input.setDraggable(package2)
        .on('pointerdown', () => {
        var clone = new Package(scene, scene.cameras.main.width / 2 + 100, 85, 2)
        scene.input.setDraggable(clone);
        });

        scene.input.setDraggable(package3)
        .on('pointerdown', () => {
        var clone = new Package(scene, scene.cameras.main.width / 2 + 240, 85, 3)
        scene.input.setDraggable(clone);
        });

        scene.input.setDraggable(package4)
        .on('pointerdown', () => {
        var clone = new Package(scene, scene.cameras.main.width / 2 + 380, 85, 4)
        scene.input.setDraggable(clone);
        });
    }
    scene.input.setDraggable(package1)
    .on('pointerdown', () => {
        var clone = new Package(scene, scene.cameras.main.width / 2 - 40, 85, 1)
        scene.input.setDraggable(clone);
    });


    scene.input.on('dragenter', (pointer, gameObject, zone) => {
        let zoneNum = 0;
        if (zone == zone1) { zoneNum = 1; }
        else if (zone == zone2) { zoneNum = 2; }
        else if (zone == zone3) { zoneNum = 3; }  
        if (zoneNum > 0){
            if (conveyors[zoneNum].getNumPackages() > 6){
                conveyors[zoneNum].setTint(0xff2424);
            }
            else {
                conveyors[zoneNum].setTint(0x00FF00);
            }
        }
    })
    .on('dragleave', (pointer, gameObject, zone) => {
        let zoneNum = 0;
        if (zone == zone1) { zoneNum = 1; }
        else if (zone == zone2) { zoneNum = 2; }
        else if (zone == zone3) { zoneNum = 3; }  
        if (zoneNum > 0){
            conveyors[zoneNum].clearTint();
        }
    });

    var allPacks = [[false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false]]

    scene.input.on('drop', (pointer, gameObject, zone) => {
        
        let zoneNum = 0;
        if (zone == zone1) { zoneNum = 1; }
        else if (zone == zone2) { zoneNum = 2; }
        else if (zone == zone3) { zoneNum = 3; }
        conveyors[zoneNum].clearTint();
        console.log('zone num = ' + zoneNum);

        if (zoneNum > 0 && conveyors[zoneNum].getNumPackages() < 7){
            let packIndex = 0;
            for (let i = 0; i < 7; i++){
                if (!allPacks[zoneNum - 1][i]){
                    allPacks[zoneNum - 1][i] = true;
                    packIndex = i;
                    conveyors[zoneNum].addPackage(gameObject.packageType);
                    break;
                }
            }

            let packageList = conveyors[zoneNum].getPackages();
            var removeButton;
            var beltPackage = new BeltPackage(scene, 700 + packIndex * 85, 50 + zoneNum * 180, gameObject.packageType)
            .on('pointerover', () => {
                removeButton = scene.add.image(720 + packIndex * 85, 20 + zoneNum * 180, 'remove')
                .setScale(0.4)
                .setInteractive()
                .on('pointerdown', () => {
                    conveyors[zoneNum].removePackage(beltPackage.packageType);
                    allPacks[zoneNum-1][packIndex] = false;
                    beltPackage.destroy();
                    removeButton.destroy();
                })
            })
            .on('pointerout', () => {
                removeButton.destroy();
            });
            console.log(packageList[beltPackage.packageType]);
        }
    });

    scene.input.on('dragstart', function (pointer, gameObject) {
        gameObject.alpha = 0.7
    });

    scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    });

    scene.input.on('dragend', function (pointer, gameObject) {
        gameObject.destroy();
    });

    if (levelNum == 1){
        runIntro(scene);
    }

    if (levelNum == 2){
        runLevel2(scene);
    }

    if (levelNum == 4){
        runHelloWorld(scene);
    }

    if (levelNum == 7){
        runBigPicture(scene);
    }

    if (levelNum == 11) {
        runDetailOriented(scene);
    }

    if (levelNum == 14){
        runBiggerPicture(scene);
    }
}

function runIntro(scene) {
    let intronum = 1;
    let introbox = scene.add.image(640, 360, 'introtext' + intronum).setOrigin(0.5, 0.5)
    .setScale(0.7);
    let started = false;

    var boxesRect = scene.add.rectangle(540, 25, 540, 120).setOrigin(0, 0);
    boxesRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    var beltsRect = scene.add.rectangle(540, 250, 50, 420).setOrigin(0, 0);
    beltsRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    var apiRect = scene.add.rectangle(2, 183, 485, 180).setOrigin(0, 0);
    apiRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    var firstLineRect = scene.add.rectangle(2, 390, 485, 40).setOrigin(0, 0);
    firstLineRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    var dragArrow = scene.add.image(630, 190, 'greenarrow').setOrigin(0.5, 0.5)
    .setScale(0.5);
    dragArrow.visible = false;

    var removeRect = scene.add.rectangle(2, 292, 485, 70).setOrigin(0, 0);
    removeRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    var hintRect = scene.add.rectangle(314, 8, 70, 70).setOrigin(0, 0);
    hintRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    var runRect = scene.add.rectangle(1130, 17, 140, 155).setOrigin(0, 0);
    runRect.setStrokeStyle(3, 0x80c904, 1).visible = false;


    scene.input.on('pointerdown', () =>{
        started = true;
    })
    scene.input.on('pointerup', () => {
        if (started){
            introbox.destroy();
            intronum++;
            if (intronum > 10){
                return
            }

            if (intronum == 2){
                introbox = scene.add.image(320, 180, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                boxesRect.visible = true;
            }
            if (intronum == 3){
                introbox = scene.add.image(900, 430, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                boxesRect.visible = false;
                beltsRect.visible = true;

            }
            if (intronum == 4){
                introbox = scene.add.image(720, 250, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                beltsRect.visible = false;
                apiRect.visible = true;
            }
            if (intronum == 5){
                introbox = scene.add.image(300, 170, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                apiRect.visible = false;
                firstLineRect.visible = true;
                dragArrow.visible = true;
            }
            if (intronum == 6){
                introbox = scene.add.image(720, 250, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                firstLineRect.visible = false;
                dragArrow.visible = false;
                removeRect.visible = true;

            }
            if (intronum == 7){
                introbox = scene.add.image(360, 250, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                removeRect.visible = false;
            }
            if (intronum == 8){
                introbox = scene.add.image(300, 200, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                hintRect.visible = true;
            }
            if (intronum == 9){
                introbox = scene.add.image(1050, 290, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                hintRect.visible = false;
                runRect.visible = true;
            }
            if (intronum == 10){
                introbox = scene.add.image(640, 360, 'introtext' + intronum).setOrigin(0.5, 0.5)
                .setScale(0.7);
                runRect.visible = false;
            }
        }
    });
}

function runLevel2(scene){
    let seqnum = 1;
    let seqbox = scene.add.image(640, 360, 'level2text' + seqnum).setOrigin(0.5, 0.5)
    .setScale(0.7);
    let started = false;

    var apiRect = scene.add.rectangle(2, 183, 485, 161).setOrigin(0, 0);
    apiRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    scene.input.on('pointerdown', () => {
        started = true;
    });

    scene.input.on('pointerup', () => {
        if (started){
            seqbox.destroy();
            seqnum++;
        }
        if (seqnum > 3){
            return
        }
        if (seqnum == 2){
            seqbox = scene.add.image(720, 250, 'level2text' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
            apiRect.visible = true;
        }
        if (seqnum == 3){
            seqbox = scene.add.image(640, 360, 'level2text' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
            apiRect.visible = false;
        }
    });
}

function runHelloWorld(scene){
    let seqnum = 1;
    let seqbox = scene.add.image(640, 360, 'helloworldtext' + seqnum).setOrigin(0.5, 0.5)
    .setScale(0.7);
    let started = false;

    var boxesRect = scene.add.rectangle(540, 25, 540, 120).setOrigin(0, 0);
    boxesRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    var apiRect = scene.add.rectangle(2, 183, 485, 132).setOrigin(0, 0);
    apiRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    var beltsRect = scene.add.rectangle(540, 250, 50, 420).setOrigin(0, 0);
    beltsRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    scene.input.on('pointerdown', () => {
        started = true;
    });

    scene.input.on('pointerup', () => {
        if (started){
            seqbox.destroy();
            seqnum++;
        }
        if (seqnum > 6){
            return
        }
        if (seqnum == 2){
            seqbox = scene.add.image(320, 180, 'helloworldtext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
            boxesRect.visible = true;
        }
        if (seqnum == 3){
            seqbox = scene.add.image(720, 250, 'helloworldtext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
            boxesRect.visible = false;
            apiRect.visible = true;
        }
        if (seqnum == 4){
            seqbox = scene.add.image(720, 250, 'helloworldtext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
        }
        if (seqnum == 5){
            seqbox = scene.add.image(900, 430, 'helloworldtext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
            apiRect.visible = false;
            beltsRect.visible = true;
        }
        if (seqnum == 6){
            seqbox = scene.add.image(640, 360, 'helloworldtext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
            beltsRect.visible = false;
        }
    });
}

function runBigPicture(scene){
    let seqnum = 1;
    let seqbox = scene.add.image(640, 360, 'bigpicturetext' + seqnum).setOrigin(0.5, 0.5)
    .setScale(0.7);
    let started = false;

    var apiRect = scene.add.rectangle(2, 183, 485, 161).setOrigin(0, 0);
    apiRect.setStrokeStyle(3, 0x80c904, 1).visible = false;

    scene.input.on('pointerdown', () => {
        started = true;
    });

    scene.input.on('pointerup', () => {
        if (started){
            seqbox.destroy();
            seqnum++;
        }
        if (seqnum > 3){
            return
        }
        if (seqnum == 2){
            seqbox = scene.add.image(720, 250, 'bigpicturetext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
            apiRect.visible = true;
        }
        if (seqnum == 3){
            seqbox = scene.add.image(640, 360, 'bigpicturetext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
            apiRect.visible = false;
        }
    })
}

function runDetailOriented(scene){
    let seqnum = 1;
    let seqbox = scene.add.image(640, 360, 'detailorientedtext' + seqnum).setOrigin(0.5, 0.5)
    .setScale(0.7);
    let started = false;

    scene.input.on('pointerdown', () => {
        started = true;
    });

    scene.input.on('pointerup', () => {
        if (started){
            seqbox.destroy();
            seqnum++;
        }
        if (seqnum > 3){
            return
        }
        if (seqnum == 2){
            seqbox = scene.add.image(640, 360, 'detailorientedtext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
        }
        if (seqnum == 3){
            seqbox = scene.add.image(640, 360, 'detailorientedtext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
        }
    })
}

function runBiggerPicture(scene){
    let seqnum = 1;
    let seqbox = scene.add.image(640, 360, 'biggerpicturetext' + seqnum).setOrigin(0.5, 0.5)
    .setScale(0.7);
    let started = false;

    scene.input.on('pointerdown', () => {
        started = true;
    });

    scene.input.on('pointerup', () => {
        if (started){
            seqbox.destroy();
            seqnum++;
        }
        if (seqnum > 3){
            return
        }
        if (seqnum == 2){
            seqbox = scene.add.image(640, 360, 'biggerpicturetext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
        }
        if (seqnum == 3){
            seqbox = scene.add.image(640, 360, 'biggerpicturetext' + seqnum).setOrigin(0.5, 0.5)
            .setScale(0.7);
        }
    })
}

