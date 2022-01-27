"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Fudge Story Template starting");
    Template.dataForSave = {
        nameProtagonist: "",
        points: 0
        // started: false,
        // ended: false
    };
    // Szenenstruktur
    window.addEventListener("load", start);
    function start(_event) {
        // Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.inGameMenu, Template.buttonFunctionalities, "gameMenu");
        // Menü zu Beginn geschlossen halten
        Template.buttonFunctionalities("Close");
        let scenes = [
            // Linear
            // { id: "Einführung", scene: Introduction, name: "Introduction to FS", next: "Ende"},
            { scene: Template.scn_testscene, name: "Test test 123" },
            //{ scene: scn_testscene2, name: "NAY 2 2 2" },
            // { scene: Scene2, name: "Scene Two" }
            // { id: "Ende", scene: End, name: "The End" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    // Animationen
    function fromRightToOutOfCanvas() {
        return {
            start: { translation: Template.ƒS.positionPercent(30, 100) },
            end: { translation: Template.ƒS.positionPercent(120, 100) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromRightToOutOfCanvas = fromRightToOutOfCanvas;
    ;
    function fromRightToLeft() {
        return {
            start: { translation: Template.ƒS.positions.bottomright },
            end: { translation: Template.ƒS.positions.bottomleft },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.fromRightToLeft = fromRightToLeft;
    ;
    function anim_testanim() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0.5) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 8,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.anim_testanim = anim_testanim;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        // music
        backgroundTheme: "./Assets/Music/AUX_Dystopian.ogg",
        // sound
        click: ""
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        narrator: {
            name: ""
        },
        catblob: {
            name: "Mr. Chattington",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Assets/Characters/spr_blob_normal.png",
                sleepy: "./Assets/Characters/spr_blob_sleepy.png",
                energetic: "./Assets/Characters/spr_blob_energetic.png"
            }
        },
        catblob2: {
            name: "catblob2",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Assets/Characters/spr_blob2_normal.png",
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        //1200*720
        BG_01_test: {
            name: "Testroom01",
            background: "./Assets/Backgrounds/BG_PLC_01.png"
        },
        BG_02_test: {
            name: "Testroom02",
            background: "./Assets/Backgrounds/BG_PLC_02.png"
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    //  MENU - Audio functions
    let volume = 1.0;
    function incrementSound() {
        if (volume >= 100)
            return;
        volume += 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        Template.ƒS.Sound.setMasterVolume(volume);
    }
    Template.decrementSound = decrementSound;
    // Menü 
    Template.inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        turnUpVolume: "+",
        turnDownVolume: "-"
        // open: "Open"
    };
    // true = offen; false = geschlossen
    Template.menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.inGameMenu.close:
                Template.gameMenu.close();
                Template.menu = false;
                break;
            case Template.inGameMenu.turnUpVolume:
                incrementSound();
                break;
            case Template.inGameMenu.turnDownVolume:
                decrementSound();
            // case inGameMenu.open:
            //   gameMenu.open();
            //   menu = true;
            //   break;
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts für's Menü
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (Template.menu) {
                    console.log("Close");
                    Template.gameMenu.close();
                    Template.menu = false;
                }
                else {
                    console.log("Open");
                    Template.gameMenu.open();
                    Template.menu = true;
                }
                break;
        }
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    // define transitions
    Template.transitions = {
        puzzle: {
            duration: 3,
            alpha: "./Assets/Transitions/tr_02.png",
            edge: 0.1
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_testscene() {
        console.log("Testszene");
        //hier kommt meine szene rein
        let text = {
            narrator: {
                T0000: "<p>Ich bin der Narrator.</p>",
                T0001: ""
            },
            catblob: {
                T0000: "NYYAHAHAHAHAHAHA",
                T0001: "Nya Toooo1 twos fshgsgsg"
            }
        };
        // test: `test ${123} klappt`
        // Textgeschwindigkeit
        //ƒS.Speech.setTickerDelays(20, 2);
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.2, 0.1, true); //erste zahl lautstärke, zweite t fadein //true = loop
        // let animationDone: Promise<void> = ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToLeft());
        // let animationDone2: Promise<void> = ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToOutOfCanvas());
        //  Name field
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);
        await Template.ƒS.Location.show(Template.locations.BG_01_test);
        await Template.ƒS.update(Template.transitions.puzzle.duration, Template.transitions.puzzle.alpha, Template.transitions.puzzle.edge); //NO TRNSITION YET
        await Template.ƒS.Character.show(Template.characters.catblob, Template.characters.catblob.pose.normal, Template.ƒS.positions.center); //position ƒS.positions.bottomcenter ODER ƒS.positionPercent(30, 100)
        await Template.ƒS.update(1);
        // Animationen parallel abspielen
        await Template.ƒS.Speech.tell(Template.characters.catblob, text.catblob.T0000, true);
        //await ƒS.Speech.tell(characters.catblob, text.catblob.T0000, false); //what iws that false?
        //dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        //console.log(dataForSave.nameProtagonist);
        //await ƒS.Speech.tell(characters.catblob, text.catblob.T0000 + dataForSave.nameProtagonist);
        // LOOP Animations
        // await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToLeft());
        // await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToOutOfCanvas());
        // Inventar
        // ƒS.Inventory.add(items.pen);
        // await ƒS.Inventory.open(); 
        await Template.ƒS.Speech.tell(Template.characters.catblob, "Hi2."); //entweder vordefiniert, oder so hingeschrieben
        // await animationDone;
        // await animationDone2;
        await Template.ƒS.Character.hide(Template.characters.catblob);
        await Template.ƒS.Character.show(Template.characters.catblob2, Template.characters.catblob2.pose.normal, Template.ƒS.positions.bottomcenter); //riem fragen
        let firstDialogueElementOptions = {
            iSayOk: "Cat.",
            iSayYes: "Cats.",
            iSayNo: "Cattsss."
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); //bedeutet:
        //in novel siehst du fenster, kannst elemente klicken, hier iwrd es aufgerufen
        //in css stylen (individualCSSClass)
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.catblob, "Cat is neat.");
                // return "Ende";
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.hide(Template.characters.catblob);
                await Template.ƒS.Location.show(Template.locations.BG_02_test);
                await Template.ƒS.Speech.tell(Template.characters.catblob, "Cats has been chosen.");
                Template.ƒS.Character.animate(Template.characters.catblob, Template.characters.catblob.pose.sleepy, Template.anim_testanim());
                await Template.ƒS.Character.show(Template.characters.catblob2, Template.characters.catblob2.pose.normal, Template.ƒS.positions.bottomleft);
                await Template.ƒS.Speech.tell(Template.characters.catblob, "Shown sleepy blob.");
                break;
            case firstDialogueElementOptions.iSayNo:
                //dataForSave.points += 10;
                await Template.ƒS.Speech.tell(Template.characters.catblob, "We said nay and change the scene");
                await Template.ƒS.Character.hide(Template.characters.catblob2);
                return Template.scn_testscene2();
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.catblob, "Thank you human!");
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 1);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        // if (dataForSave.points === 100) {
        //   return End();
        // }
        // return "Ende";
        // return End();
    }
    Template.scn_testscene = scn_testscene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scn_testscene2() {
        console.log("Testszene2");
        //hier kommt meine szene rein
        let text = {
            narrator: {
                T0000: "<p>Ich bin der Narrator.</p>",
                T0001: ""
            },
            catblob: {
                T0000: "NYYAHAHAHAHAHAHA",
                T0001: "Nya Toooo1 twos fshgsgsg"
            }
        };
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 1);
        await Template.ƒS.Location.show(Template.locations.BG_01_test);
        await Template.ƒS.update(Template.transitions.puzzle.duration, Template.transitions.puzzle.alpha, Template.transitions.puzzle.edge); //NO TRNSITION YET
        await Template.ƒS.Character.show(Template.characters.catblob, Template.characters.catblob.pose.normal, Template.ƒS.positions.center); //position ƒS.positions.bottomcenter ODER ƒS.positionPercent(30, 100)
        await Template.ƒS.update(1);
        // Animationen parallel abspielen
        await Template.ƒS.Speech.tell(Template.characters.catblob, text.catblob.T0000, true);
        //await ƒS.Speech.tell(characters.catblob, text.catblob.T0000, false); //what iws that false?
        //dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        //console.log(dataForSave.nameProtagonist);
        //await ƒS.Speech.tell(characters.catblob, text.catblob.T0000 + dataForSave.nameProtagonist);
        // LOOP Animations
        // await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToLeft());
        // await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToOutOfCanvas());
        // Inventar
        // ƒS.Inventory.add(items.pen);
        // await ƒS.Inventory.open(); 
        await Template.ƒS.Speech.tell(Template.characters.catblob, "Hi2."); //entweder vordefiniert, oder so hingeschrieben
        // await animationDone;
        // await animationDone2;
        await Template.ƒS.Character.hide(Template.characters.catblob);
        let firstDialogueElementOptions = {
            iSayOk: "Cat.",
            iSayYes: "Cats.",
            iSayNo: "Cattsss."
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); //bedeutet:
        //in novel siehst du fenster, kannst elemente klicken, hier iwrd es aufgerufen
        //in css stylen (individualCSSClass)
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await Template.ƒS.Speech.tell(Template.characters.catblob, "Cat is neat.");
                // return "Ende";
                break;
            case firstDialogueElementOptions.iSayYes:
                await Template.ƒS.Character.hide(Template.characters.catblob);
                await Template.ƒS.Location.show(Template.locations.BG_02_test);
                await Template.ƒS.Speech.tell(Template.characters.catblob, "Cats has been chosen.");
                Template.ƒS.Character.animate(Template.characters.catblob, Template.characters.catblob.pose.sleepy, Template.anim_testanim());
                await Template.ƒS.Character.show(Template.characters.catblob2, Template.characters.catblob2.pose.normal, Template.ƒS.positions.bottomleft);
                await Template.ƒS.Speech.tell(Template.characters.catblob, "Shown sleepy blob.");
                break;
            case firstDialogueElementOptions.iSayNo:
                //dataForSave.points += 10;
                await Template.ƒS.Character.show(Template.characters.catblob2, Template.characters.catblob2.pose.normal, Template.ƒS.positions.bottomcenter);
                await Template.ƒS.Speech.tell(Template.characters.catblob, "We said nay and change the scene");
                return scn_testscene2();
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.catblob, "Thank you human!");
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 1);
        Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        // if (dataForSave.points === 100) {
        //   return End();
        // }
        // return "Ende";
        // return End();
    }
    Template.scn_testscene2 = scn_testscene2;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map