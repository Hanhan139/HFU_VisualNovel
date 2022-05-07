"use strict";
var VNamespace;
(function (VNamespace) {
    VNamespace.ƒ = FudgeCore;
    VNamespace.ƒS = FudgeStory;
    console.log("Fudge Story Template starting");
    VNamespace.dataForSave = {
        nameProtagonist: "",
        points: 0,
        scoreeyyy: 9,
        varHadTea: false,
        // started: false,
        // ended: false
    };
    // **** CREDITS ****
    function showCredits() {
        VNamespace.ƒS.Text.setClass("class2");
        VNamespace.ƒS.Text.print("Creditssssss");
    }
    VNamespace.showCredits = showCredits;
    // **** MENÜ ****
    // Buttons
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    // true = offen; false = geschlossen
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await VNamespace.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await VNamespace.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                showCredits();
        }
    }
    // Shortcuts für's Menü
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case VNamespace.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await VNamespace.ƒS.Progress.save();
                break;
            case VNamespace.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await VNamespace.ƒS.Progress.load();
                break;
            case VNamespace.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    // Szenenstruktur
    window.addEventListener("load", start);
    function start(_event) {
        // Menü
        gameMenu = VNamespace.ƒS.Menu.create(VNamespace.inGameMenu, buttonFunctionalities, "gameMenu");
        // Menü zu Beginn geschlossen halten
        buttonFunctionalities("Close");
        let scenes = [
            { scene: VNamespace.scn_Title_1, name: "A new day, a new try." },
            //{ scene: scn_testscene, name: "Test test 123" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        VNamespace.dataForSave = VNamespace.ƒS.Progress.setData(VNamespace.dataForSave, uiElement);
        // start the sequence
        VNamespace.ƒS.Progress.go(scenes);
    }
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    VNamespace.Scene = Scene;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    VNamespace.text = {
        narrator: {
            T0000: "<p>Ich bin der Narrator.</p>",
            T0001: ""
        },
        catblob: {
            T0000: "NYYAHAHAHAHAHAHA",
            T0001: "Nya Toooo1 twos fshgsgsg"
        }
    };
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    // Animationen
    function fromRightToOutOfCanvas() {
        return {
            start: { translation: VNamespace.ƒS.positionPercent(30, 100) },
            end: { translation: VNamespace.ƒS.positionPercent(120, 100) },
            duration: 1,
            playmode: VNamespace.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    VNamespace.fromRightToOutOfCanvas = fromRightToOutOfCanvas;
    ;
    function fromRightToLeft() {
        return {
            start: { translation: VNamespace.ƒS.positions.bottomright },
            end: { translation: VNamespace.ƒS.positions.bottomleft },
            duration: 1,
            playmode: VNamespace.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    VNamespace.fromRightToLeft = fromRightToLeft;
    ;
    function anim_testanim() {
        return {
            start: { translation: VNamespace.ƒS.positions.bottomleft, rotation: -20, scaling: new VNamespace.ƒS.Position(0.5, 1.5), color: VNamespace.ƒS.Color.CSS("white", 0.5) },
            end: { translation: VNamespace.ƒS.positions.bottomright, rotation: 20, scaling: new VNamespace.ƒS.Position(1.5, 0.5), color: VNamespace.ƒS.Color.CSS("red") },
            duration: 8,
            playmode: VNamespace.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    VNamespace.anim_testanim = anim_testanim;
    ;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    VNamespace.sound = {
        // music
        backgroundTheme: "./Assets/Music/AUX_Dystopian.ogg",
        // sound
        click: ""
    };
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    VNamespace.characters = {
        narrator: {
            name: ""
        },
        catblob: {
            name: "Mr. Chattington",
            origin: VNamespace.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Assets/Characters/spr_blob_normal.png",
                sleepy: "./Assets/Characters/spr_blob_sleepy.png",
                energetic: "./Assets/Characters/spr_blob_energetic.png"
            }
        },
        catblob2: {
            name: "catblob2",
            origin: VNamespace.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Assets/Characters/spr_blob2_normal.png",
            }
        }
    };
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    VNamespace.locations = {
        //1200*720
        BG_01_test: {
            name: "Testroom01",
            background: "./Assets/Backgrounds/BG_PLC_01.png"
        },
        BG_02_test: {
            name: "Testroom02",
            background: "./Assets/Backgrounds/BG_PLC_02.png"
        },
        //Structure screens
        BG_Title1: {
            name: "Title1",
            background: "./Assets/Backgrounds/BG_Title_1.png"
        },
        BG_Title2: {
            name: "Title2",
            background: "./Assets/Backgrounds/BG_Title_2.png"
        },
        //Day 01 + Endings
        BG_Day1_1: {
            name: "Day1_1",
            background: "./Assets/Backgrounds/BG_Day1_1.png"
        },
        BG_Day1_C: {
            name: "Day1_C",
            background: "./Assets/Backgrounds/BG_Day1_C.png"
        },
        BG_Day1_H: {
            name: "Day1_H",
            background: "./Assets/Backgrounds/BG_Day1_H.png"
        },
        BG_Day1_M: {
            name: "Day1_M",
            background: "./Assets/Backgrounds/BG_Day1_M.png"
        },
        //Day 02
        BG_Day2y: {
            name: "Day2y",
            background: "./Assets/Backgrounds/BG_Day2_y.png"
        },
        BG_Day2n: {
            name: "Day2n",
            background: "./Assets/Backgrounds/BG_Day2_n.png"
        },
        //Day 03
        BG_Day3yy: {
            name: "Day3yy",
            background: "./Assets/Backgrounds/BG_Day3_yy.png"
        },
        BG_Day3yn: {
            name: "Day3yn",
            background: "./Assets/Backgrounds/BG_Day3_yn.png"
        },
        BG_Day3nn: {
            name: "Day3nn",
            background: "./Assets/Backgrounds/BG_Day3_nn.png"
        },
        //OTHER
        BG_PC_FUDGE: {
            name: "Day3nn",
            background: "./Assets/Backgrounds/BG_FUD_General.png"
        },
        BG_Canvas: {
            name: "Canvas",
            background: "./Assets/Backgrounds/BG_Canvas2.png"
        },
    };
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    //  MENU - Audio functions
    let volume = 1.0;
    function incrementSound() {
        if (volume >= 100)
            return;
        volume += 0.5;
        VNamespace.ƒS.Sound.setMasterVolume(volume);
    }
    VNamespace.incrementSound = incrementSound;
    function decrementSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        VNamespace.ƒS.Sound.setMasterVolume(volume);
    }
    VNamespace.decrementSound = decrementSound;
    // Menü 
    VNamespace.inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        turnUpVolume: "+",
        turnDownVolume: "-"
        // open: "Open"
    };
    // true = offen; false = geschlossen
    VNamespace.menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case VNamespace.inGameMenu.save:
                await VNamespace.ƒS.Progress.save();
                break;
            case VNamespace.inGameMenu.load:
                await VNamespace.ƒS.Progress.load();
                break;
            case VNamespace.inGameMenu.close:
                VNamespace.gameMenu.close();
                VNamespace.menu = false;
                break;
            case VNamespace.inGameMenu.turnUpVolume:
                incrementSound();
                break;
            case VNamespace.inGameMenu.turnDownVolume:
                decrementSound();
            // case inGameMenu.open:
            //   gameMenu.open();
            //   menu = true;
            //   break;
        }
    }
    VNamespace.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts für's Menü
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case VNamespace.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await VNamespace.ƒS.Progress.save();
                break;
            case VNamespace.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await VNamespace.ƒS.Progress.load();
                break;
            case VNamespace.ƒ.KEYBOARD_CODE.M:
                if (VNamespace.menu) {
                    console.log("Close");
                    VNamespace.gameMenu.close();
                    VNamespace.menu = false;
                }
                else {
                    console.log("Open");
                    VNamespace.gameMenu.open();
                    VNamespace.menu = true;
                }
                break;
        }
    }
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    // define transitions
    VNamespace.transitions = {
        puzzle: {
            duration: 3,
            alpha: "./Assets/Transitions/tr_02.png",
            edge: 0.1
        }
    };
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    VNamespace.scoresss = 1;
    function func_RandomNumber() {
        return func_RandomNumberRange(0, 10);
        // let x = (Math.random()*100);
        // return x | 0;
    }
    VNamespace.func_RandomNumber = func_RandomNumber;
    ;
    //absolutely copied from https://www.codegrepper.com/code-examples/javascript/random+number+generator+in+typescript - I dunno how it does what it does, but it does
    function func_RandomNumberRange(r_min, r_max) {
        r_min = Math.ceil(r_min);
        r_max = Math.floor(r_max);
        return Math.floor(Math.random() * (r_max - r_min + 1)) + r_min;
    }
    VNamespace.func_RandomNumberRange = func_RandomNumberRange;
    ;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    VNamespace.RPGcharacters = {
        text: {
            name: ""
        },
        champion: {
            name: "You"
        },
        amie: {
            name: "Amie",
            origin: VNamespace.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                default: "./Assets/Characters/Amie/Amie_Default.png",
                sleepy: "./Assets/Characters/spr_blob_sleepy.png",
                energetic: "./Assets/Characters/spr_blob_energetic.png"
            }
        },
        arturia: {
            name: "Aturia",
            origin: VNamespace.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Assets/Characters/spr_blob_normal.png",
                sleepy: "./Assets/Characters/spr_blob_sleepy.png",
                energetic: "./Assets/Characters/spr_blob_energetic.png"
            }
        },
    };
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    //Dialogue Companions at Camp
    VNamespace.RPGdia_Camp = {
        default: {
            T_default: "O w O"
        },
        description01: {
            T_00000: "Your gaze wanders over your campsite.",
            T_00001: "Three tents nest in safe distance to a cozy communal campfire. Its warm, flickering light a welcome change of pace to the constant, blood red gloom from the skies above you.",
            T_00003: "The vast plains don't offer much in the ways of cover, and the dark forest looms in the distance, an impenetrable thicket. Not disclosing what creatures could have set their sights on you.",
            T_00005: "It might feel a little unsafe to set up base on entirely open terrain. With the giant, loudly buzzing portal next to the camp, you aren't exactly hard to spot.",
            T_00006: "...Not that that is of any concern to you. After all, no enemies have been added to the code.",
            T_00008: "...",
            T_00009: "...yet.",
        },
        description02: {
            T_00000: "Your gaze wanders over your campsite.",
            T_00001: "Three tents circle a cozy communal campfire. Its warm, flickering light a welcome change of pace to the constant gloom of the blood red skies above you.",
            T_00002: "Red skies, a one-way portal, strangely forthcoming companions who just trust you despite your lack of experience...",
            T_00003: "Something about this plot seems familiar, but if it doesn't, you get the feeling you shouldn't look it up. It is better this way. Trust me.",
        },
        description03: {
            T_00000: "Your gaze wanders over your campsite.",
            T_00001: "A little lost in thought, you take a closer look at the .ts files.",
            T_00002: "You noticed that the descriptions of the camp change on occasion. That is because a randomized value between 1 and 3 is generated each time you enter this scene.",
            T_00004: "Using that value, the code alters through the three pre-prepared dialogues, using a switch case.",
            T_00006: "There's probably a badgillion better ways to solve this, but eh. Go and test things yourself, google some typescript stuff, experiment, and have fun!",
            T_00008: "...and hey, if you like my sketches, consider commissioning me for a sketched headshot or two! Shameless self plug here, I know, hehehehe. Anyways, camp! Here, have your dialogue choice options:",
        },
        presence: {
            goneAturia: {
                T_at_gone_0000: "Aturia's tent is empty, and she doesn't seem to be on the training grounds.Her monstrous battleaxe isn't anywhere to be seen either. She must have ventured out for some practice.",
                T_at_gone_0002: "You aren't too worried about it though. The energetic dullahan is pretty good at keeping her head.",
                T_at_gone_0004: "...most of the time.",
            },
            homeAturia: {
                T_at_home_0000: "To your left you spot Aturia on the dusty training grounds, throwing punches at some imaginary foe with a prideful grin.",
                T_at_home_0001: "She seems too absorbed in her training to notice you. Or to converse with you. Or to even get more dialog lines.",
            },
            goneAmie: {
                T_am_gone_0000: "It's a little lonely around the campfire without the diligent ratfolk, but she'll probably return soon. Maybe you should check back later.",
                T_am_gone_0001: "...that means you should DEFINITELY check back. It's a random encounter with a 50/50 chance, you'll get here eventually champ.",
            },
            homeAmie: "Your attention caught by the warm scents of roasted chestnuts, you spot Amie tending to the campfire - And her dinner.",
        },
        companionDialogue: {
            amie: {
                greeting: {
                    T0000: "Oh! Hi! Did you want to join me around the campfire?",
                    T0001: "Please, sit down. Can I help you with something?",
                },
                talk: {
                    T0000: "You want to talk a bit? Of course~ What do you want to talk about?",
                    T0001: "Is there something else? Don't feel shy~",
                },
                howareyou: {
                    T0000: "I'm doing fine, thank you!",
                    T0001: "...although, my head is being a bit fuzzy lately. I have these strange thoughts...",
                    T0002: "Call me crazy, but...",
                    T0003: "I sometimes feel like all of this, us, everything, is just a reference to something else.",
                    T0004: "Have you ever wondered: 'What if all of this isn't real'?",
                    T0005: "What if all of this was just made in an engine that is still in development called FUDGE story,",
                    T0006: "using suspciious runes and devilish languages like Typescriptan, Hypertextmarkupian, and Cascadingstylesheetsch,",
                    T0007: "poorly executed by a novice to finish this by some doomsday date set by a higher entity while",
                    T0008: "preparing their thesis and still trying to make something somewhat decent or helpful?",
                    T0009: "...",
                    T0010: "...on a computer that crashes randomly mid coding, writing or drawing, without warning, and no one can fix it?",
                },
                work: {
                    T0000: "Most of this scene is running in a while loop.",
                    T0001: "Once we finished going through one dialogue tree, it starts over almost at the top.",
                    T0002: "Just almost. Things like my greeting, me entry animation, and everything I am only supposed to do once in the beginning, is written above the loop.",
                    T0003: "That means you can reread each option infinitely, but more importantly...",
                    T0004: "...it means you can look it up in the code if this is something you'd need.",
                    T0005: "It's all very basic, but since we have so many students with different background, it's good to give some basic options too.",
                    T0006: "It can be incredibly hard to find your way through all of this if you are new to coding. But you can do it!",
                },
                commissions: {
                    T0000: "Ah, let me pitch myself through this innocent NPC with another shameless self promotional dialogue!",
                    T0001: "Fyoriosity, pleasure to meet you. I am naugt but your usual overly distractable wannabe-artist with a",
                    T0002: "TASTE FOR CHAOS AND BLOOD! THE UNIVERSE WAS BUILT IN MY NAME, THE LORD OF THE EDGE!!!!",
                    T0003: "I am also pretty much always buried in a mess, having at least 3 cups on my table. ..I should clean. Urgh.",
                    T0004: "Anyways! If you feel like offering me a few bucks for a sketched headshot, check out my commission page or deviantart!",
                    T0005: "My commission page is erm... still a bit rough around the edges.",
                    T0006: "You could say it's fittingly chaotic. Or you could say it is bad, hard to navigate, and in need of some more fun stuff.",
                    T0007: "Anyways, here: https://fyoriosity.weebly.com",
                    T0008: "Hehehhehheehhehe, you tried clicking that link right now, didn't you. So, that aside, back to your regularly scheduled program:",
                    T0009: "...",
                    T0010: "Ooof.....my head...",
                    T0011: "Must be the lack of hydration. Have you been drinking some water today already?",
                },
            }
        },
    };
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    function func_RPGRandomNumber() {
        return VNamespace.func_RandomNumberRange(0, 10);
    }
    VNamespace.func_RPGRandomNumber = func_RPGRandomNumber;
    ;
    //absolutely copied from https://www.codegrepper.com/code-examples/javascript/random+number+generator+in+typescript - I dunno how it does what it does, but it does
    function func_RPGRandomNumberRange(r_min, r_max) {
        r_min = Math.ceil(r_min); //Math.ceil rounds stuff up
        r_max = Math.floor(r_max); //Guess what Math.floor does XD
        return Math.floor(Math.random() * (r_max - r_min + 1)) + r_min; //Some suspicious math, but you end up with random numbers so ONWARD!
    }
    VNamespace.func_RPGRandomNumberRange = func_RPGRandomNumberRange;
    ;
    async function fun_AwaitSpeech(charpath = "???", insert = "...") {
        await VNamespace.ƒS.Speech.tell(charpath, insert, true);
    }
    VNamespace.fun_AwaitSpeech = fun_AwaitSpeech;
    ;
    async function fun_PrintBlockKeys(keys = VNamespace.RPGdia_Camp.default) {
        for (const t in keys) {
            await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, t);
        }
    }
    VNamespace.fun_PrintBlockKeys = fun_PrintBlockKeys;
    ;
    async function fun_PrintBlockSpeech(path = VNamespace.RPGdia_Camp.default) {
        for (let diaSequence of Object.values(path)) {
            await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, diaSequence);
        }
        ;
    }
    VNamespace.fun_PrintBlockSpeech = fun_PrintBlockSpeech;
    ;
    //ANIMATION PRESETS
    function anim_CharJoin() {
        return {
            start: { translation: VNamespace.ƒS.positionPercent(150, 100) },
            end: { translation: VNamespace.ƒS.positionPercent(70, 100) },
            duration: 3,
            playmode: VNamespace.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    VNamespace.anim_CharJoin = anim_CharJoin;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_RPG_camp() {
        console.log("RPG CAMP");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_PC_FUDGE);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 2);
        let r = VNamespace.func_RPGRandomNumberRange(1, 3);
        switch (r) {
            case 1:
                for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.description01)) {
                    await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, diaSequence); //Hi Jirka! So funktioniert das mit dem mehrere Sachen ausgeben;
                    //aber eigentlich will ich diese zwei zeilen zusammen fassen, und später noch etwas mehr in die funktion einfügen wenn das funktioniert.
                }
                ;
                break;
            //Die funktion mit der das aber gehen soll ist in DefinitionsRPG/def_RPGfunctions.ts
            //fun_PrintBlockSpeech(); Funktioniert, verwendet die default werte
            //Aber ich kann der Funktion nicht sagen, welchen Pfad sie verwenden soll, wenn ich z.B. description03 anstelle 1 haben wollen würde
            //fun_PrintBlockSpeech(RPGdia_Camp.description03)
            case 2:
                for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.description02)) {
                    await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, diaSequence);
                }
                ;
                break;
            case 3:
                for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.description03)) {
                    await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, diaSequence);
                }
                ;
                break;
            default:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        }
        ;
        let DecisionButtons = {
            dec_portal: "Portal",
            dec_companions: "Companions",
            dec_sleep: "Sleep",
            dec_leave: "Explore",
        };
        let Decision = await VNamespace.ƒS.Menu.getInput(DecisionButtons, "individualCSSClass");
        switch (Decision) {
            case DecisionButtons.dec_portal:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Yep. You check on the portal. It's still as swirly, menacing, and unyielding as before.");
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Really doesn't want to let you through. Not much you can do about it, except maybe menacingly roast some chestnuts to fill your stomach.");
                break;
            case DecisionButtons.dec_companions:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "You decide to check on your companions, which you totally remember.");
                return VNamespace.scn_RPG_comp();
                break;
            case DecisionButtons.dec_sleep:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "You take a well deserved nap. It's not even past Midnight! You'll adapt good sleeping habits like this if you aren't careful.");
                return scn_RPG_camp();
                break;
            case DecisionButtons.dec_leave:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "You bravely venture out to explore the wilderness. It gets you about fifty feet away from camp until you remember nothing outside the camp has been coded. Oh well. Worth a try.");
                break;
            default:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        }
        ;
        let Button_BACK = {
            dec_BACK: "Back",
        };
        await VNamespace.ƒS.Menu.getInput(Button_BACK, "individualCSSClass");
        return scn_RPG_camp();
        //ASK RIEM FOR SOMETHING MORE EFFICIENT
        // await ƒS.Speech.tell(RPGcharacters.text, "IN BETWWEN LIIINE", true);
        //WE GOT THE KEY
        // for (const t in RPGdia_Camp.description01) {
        //     await ƒS.Speech.tell(RPGcharacters.text, t);
        //     }
        // for (let diaSequence of Object.values(RPGdia_Camp.description01) ) {
        //     await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
        // }; 
        //THIS OWRKS; THIS GOOD
        // await ƒS.Speech.tell(RPGcharacters.text, RPGdia_Camp.description01.T_00000, true);
        // return scn_Title_M();
    }
    VNamespace.scn_RPG_camp = scn_RPG_camp;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_RPG_compAmie() {
        console.log("RPG COMPANIONS - AMIE");
        let AmieGreeted = false;
        let loop = true;
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_02_test);
        await VNamespace.ƒS.update(2, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Character.show(VNamespace.RPGcharacters.amie, VNamespace.RPGcharacters.amie.pose.default, VNamespace.ƒS.positionPercent(200, 100));
        await VNamespace.ƒS.Character.animate(VNamespace.RPGcharacters.amie, VNamespace.RPGcharacters.amie.pose.default, VNamespace.anim_CharJoin());
        await VNamespace.ƒS.update(2);
        for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.companionDialogue.amie.greeting)) {
            await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.amie, diaSequence);
        }
        ;
        //Talking to Amelie
        while (loop) {
            //Greeting/In between
            if (!AmieGreeted) {
                await VNamespace.fun_AwaitSpeech("Amie", VNamespace.RPGdia_Camp.companionDialogue.amie.talk.T0000);
                AmieGreeted = true;
            }
            else {
                await VNamespace.fun_AwaitSpeech("Amie", VNamespace.RPGdia_Camp.companionDialogue.amie.talk.T0001);
            }
            ;
            let DecisionButtons2 = {
                dec_1: "Hi Amelie. How are you doing?",
                dec_2: "How does this scene work?",
                dec_3: "Drawing commissions!",
                dec_BACK: "Back",
            };
            let Decision = await VNamespace.ƒS.Menu.getInput(DecisionButtons2, "individualCSSClass");
            switch (Decision) {
                case DecisionButtons2.dec_1:
                    for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.companionDialogue.amie.howareyou)) {
                        await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.amie, diaSequence);
                    }
                    ;
                    let Button_BACK = {
                        dec_BACK: "That sounded oddly specific.",
                    };
                    await VNamespace.ƒS.Menu.getInput(Button_BACK, "individualCSSClass");
                    break;
                case DecisionButtons2.dec_2:
                    for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.companionDialogue.amie.work)) {
                        await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.amie, diaSequence);
                    }
                    ;
                    break;
                case DecisionButtons2.dec_3:
                    for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.companionDialogue.amie.commissions)) {
                        await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.amie, diaSequence);
                    }
                    ;
                    break;
                case DecisionButtons2.dec_BACK:
                    VNamespace.ƒS.Character.hideAll();
                    return VNamespace.scn_RPG_camp();
                    break;
                default:
                    await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                    break;
            }
            ;
        }
        ;
    }
    VNamespace.scn_RPG_compAmie = scn_RPG_compAmie;
    ;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_RPG_comp() {
        console.log("RPG COMPANIONS");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Canvas);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 2);
        // --- Camp presence --- (Gone/Home)
        //Artugia at camp
        let r = VNamespace.func_RPGRandomNumberRange(0, 1);
        switch (r) {
            case 0:
                for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.presence.goneAturia)) {
                    await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, diaSequence);
                }
                ;
                break;
            case 1:
                for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.presence.homeAturia)) {
                    await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, diaSequence);
                }
                ;
                break;
            default:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        }
        ;
        //Amie at camp
        r = VNamespace.func_RPGRandomNumberRange(0, 1);
        switch (r) {
            case 0:
                for (let diaSequence of Object.values(VNamespace.RPGdia_Camp.presence.goneAmie)) {
                    await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, diaSequence);
                }
                ;
                break;
            case 1:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, VNamespace.RPGdia_Camp.presence.homeAmie);
                // for (let diaSequence of Object.values(RPGdia_Camp.presence.homeAmie)) {
                //     await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
                // };
                let DecisionButtons2 = {
                    dec_amie: "Amie",
                    dec_BACK: "Back",
                };
                let Decision = await VNamespace.ƒS.Menu.getInput(DecisionButtons2, "individualCSSClass");
                switch (Decision) {
                    case DecisionButtons2.dec_amie:
                        await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "You make your way to the campfire, giving the auburn furred ratfolk a friendly smile as you approach.");
                        return VNamespace.scn_RPG_compAmie();
                        break;
                    case DecisionButtons2.dec_BACK:
                        await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Nothing better to do, you walk a few rounds around the tents in hopes it will change any of the dialog.");
                        return VNamespace.scn_RPG_camp();
                        break;
                    default:
                        await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                        break;
                }
                ;
                break;
            default:
                await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        }
        ;
        let Button_BACK = {
            dec_BACK: "Back",
        };
        await VNamespace.ƒS.Speech.tell(VNamespace.RPGcharacters.text, "Nothing better to do, you walk a few rounds around the tents in hopes it will change any of the dialog.");
        await VNamespace.ƒS.Menu.getInput(Button_BACK, "individualCSSClass");
        return VNamespace.scn_RPG_camp();
    }
    VNamespace.scn_RPG_comp = scn_RPG_comp;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_RPG_explore() {
        console.log("RPG CAMP");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day3yn);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Day 03ny.");
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "MIXED ending. Who you are is unclear. Redirecting you.");
        return VNamespace.scn_Title_M();
    }
    VNamespace.scn_RPG_explore = scn_RPG_explore;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_RPG_intro() {
        console.log("RPG INTROOOOOOOO");
        // await ƒS.Location.show(locations.BG_PC_FUDGE);
        // await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        // await ƒS.Speech.tell(RPGcharacters.text, "You enter a portal. Swoosh. it only goes one way. Welcome to a quick self contained tutorial. The code for this is in the RPG_Example folder.");
        // await ƒS.Speech.tell(RPGcharacters.text, "I split my files into the actual scenes, and into the resources, or definitions as I called them.");
        // await ƒS.Speech.tell(RPGcharacters.text, "You don't have to. You, in theory, can have all of that stuff in one file.");
        // await ƒS.Speech.tell(RPGcharacters.text, "You can also do so in practice. In fact, a buncha people do so in practice.");
        // await ƒS.Speech.tell(RPGcharacters.text, "I've SEEN mains...so long...brrrrr. I just sort stuff. Personal preference. But, no matter how, it's always a good idea to keep your code clean and understandable for you.");
        // await ƒS.Speech.tell(RPGcharacters.text, "Try using comments and notes in your code to remind you what certain things do.");
        // //THIS is a comment. Hiiii. No one said it was a useful comment though. Really, I could have written anything else.
        // await ƒS.Speech.tell(RPGcharacters.text, "So, let's start this mostly self-contained little RPG example that should help you a bit with switching scenes and choices and that stuff. ADVENTURE!!!");
        return VNamespace.scn_RPG_camp();
    }
    VNamespace.scn_RPG_intro = scn_RPG_intro;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day1_1() {
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day1_1);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        console.log("Scene Day 01");
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Day 01 bgtest.");
        VNamespace.dataForSave.scoreeyyy += 1;
        let z = 0;
        let y = 10;
        while (y > 0) {
            z = VNamespace.func_RandomNumber();
            console.log(z);
            y -= 1;
            //ignore this this just me printing a buncha numbers to test n see what I get; Z ends up being a number with two digits and a bunch of .4z2i525673ssssss
        }
        ;
        switch (z) {
            case 0:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "EYOOOO 0");
                break;
            case 1:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "We are number one.                                              HEY!");
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Over 9(thousand)");
                break;
            default:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.narrator, "Well it gonna be hard to get INTo those cases with a float, eh?");
                break;
        }
        ;
        let firstDialogueElementOptions = {
            dia_Yes: "Yes.",
            dia_No: "No."
        };
        let firstDialogueElement = await VNamespace.ƒS.Menu.getInput(firstDialogueElementOptions, "CssChoices"); //bedeutet:
        //await ƒS.Speech.tell(characters.narrator, dataForSave.scoreeyyy);
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_Yes:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Choice yes.");
                return VNamespace.scn_Day2_y();
                break;
            case firstDialogueElementOptions.dia_No:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Choice no. Scene change initiated.");
                return VNamespace.scn_Day2_n();
                //return scn_Day2_n();
                break;
        }
    }
    VNamespace.scn_Day1_1 = scn_Day1_1;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day1_C() {
        console.log("Ending C");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day1_C);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "CONSUMED.");
        return VNamespace.scn_Title_1();
    }
    VNamespace.scn_Day1_C = scn_Day1_C;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day1_H() {
        console.log("Ending H");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day1_H);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "HONEST.");
        return VNamespace.scn_Title_1();
    }
    VNamespace.scn_Day1_H = scn_Day1_H;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day1_M() {
        console.log("Ending M");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day1_M);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "MIXED.");
        return VNamespace.scn_Title_1();
    }
    VNamespace.scn_Day1_M = scn_Day1_M;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day2_n() {
        console.log("Testszene2");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day2n);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Day 02n.");
        //BRANCHING PATH
        let firstDialogueElementOptions = {
            dia_Yes: "Yes.",
            dia_No: "No."
        };
        let firstDialogueElement = await VNamespace.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_Yes:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Choice yes.");
                return VNamespace.scn_Day3_ny();
                break;
            case firstDialogueElementOptions.dia_No:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Choice no.");
                return VNamespace.scn_Day3_nn();
                //return scn_Day2_n();
                break;
        }
    }
    VNamespace.scn_Day2_n = scn_Day2_n;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day2_y() {
        console.log("Day 02 Y");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day2y);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Day 02y.");
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Waiting for next decision.");
        //hier kommt meine szene rein
        let firstDialogueElementOptions = {
            dia_Yes: "Yes.",
            dia_No: "No."
        };
        let firstDialogueElement = await VNamespace.ƒS.Menu.getInput(firstDialogueElementOptions, "CssChoices");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_Yes:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Yes.");
                return VNamespace.scn_Day3_yy();
                break;
            case firstDialogueElementOptions.dia_No:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "No.");
                return VNamespace.scn_Day3_ny();
                break;
        }
    }
    VNamespace.scn_Day2_y = scn_Day2_y;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day3_nn() {
        console.log("Day 03 nn");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day3nn);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Day 03nn.");
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "NO no no no.... HONEST ending. I don't want this, I don't want you, i don't want her i don't...");
        return VNamespace.scn_Title_H();
    }
    VNamespace.scn_Day3_nn = scn_Day3_nn;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day3_ny() {
        console.log("Day 03 ny");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day3yn);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Day 03ny.");
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "MIXED ending. Who you are is unclear. Redirecting you.");
        return VNamespace.scn_Title_M();
    }
    VNamespace.scn_Day3_ny = scn_Day3_ny;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Day3_yy() {
        console.log("Day 03 yy");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Day3yy);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Day 03yy.");
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Yes. Yes I do. Yes I need to. I should. Everyone else can. CONSUMED ending. Who you are is unclear. Redirecting you.");
        return VNamespace.scn_Title_C();
    }
    VNamespace.scn_Day3_yy = scn_Day3_yy;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Title_1() {
        //DEBUG MENU START ---------------------
        let DiaDebug = {
            // dia_Continue: "Continue the normal Days.",
            // dia_CurrentTest: "Currently being tested:",
            // dia_Testscene: "Testscene. The one with the cats.",
            dia_CampCamp: "RPG FUDGE BOOTCAMP!",
        };
        let firstDiaDebug = await VNamespace.ƒS.Menu.getInput(DiaDebug, "CssChoices");
        switch (firstDiaDebug) {
            // case DiaDebug.dia_Continue:
            //   await ƒS.Speech.tell(characters.catblob, "Continuing to main Files.");
            //   return scn_Day1_1();
            //   break;
            // case DiaDebug.dia_CurrentTest:
            //   await ƒS.Speech.tell(characters.catblob, "Choice no. Scene change initiated.");
            //   return scn_Fud01_Inst(); //CURRENTLY TESTED SCENE HERE <- <- <-<.<.<..<.<.<<.<.<.<.<<.<
            //   break;
            // case DiaDebug.dia_Testscene:
            //   return scn_testscene();
            //   break;
            case DiaDebug.dia_CampCamp:
                return VNamespace.scn_RPG_intro();
                break;
            default:
                return VNamespace.scn_Day1_1();
        }
        //DEBUG MENU END ---------------------
        console.log("Title C");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Title1);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "See you tomorrow~ <3");
        let firstDialogueElementOptions = {
            dia_SeeU: "See you tomorrow",
        };
        let firstDialogueElement = await VNamespace.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_SeeU:
                break;
        }
        return VNamespace.scn_Day1_1();
    }
    VNamespace.scn_Title_1 = scn_Title_1;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Title_C() {
        console.log("Title C");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Title2);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Consumed. Consumed. Consumed. You. Need. To. Work. You don't have any time for this. It is nonsense. Just function. Just focus. Just do it.");
        return VNamespace.scn_Day1_C();
    }
    VNamespace.scn_Title_C = scn_Title_C;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Title_H() {
        console.log("Title H");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Title2);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Be honest with yourself. You are aware of it all. It will go on like this. Maybe you can push it a little one direction or the other, but it's the same old song since grade school- it's always the same. An endless loop. Have fun trying to make something out of it.");
        return VNamespace.scn_Day1_H();
    }
    VNamespace.scn_Title_H = scn_Title_H;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Title_M() {
        console.log("Title M");
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_Title2);
        await VNamespace.ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Well, just a day like any other.");
        return VNamespace.scn_Day1_M();
    }
    VNamespace.scn_Title_M = scn_Title_M;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
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
        // Textgeschwindigkeit
        VNamespace.ƒS.Speech.setTickerDelays(20, 2);
        VNamespace.ƒS.Sound.fade(VNamespace.sound.backgroundTheme, 0.2, 0.1, true); //erste zahl lautstärke, zweite t fadein //true = loop
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_01_test);
        await VNamespace.ƒS.update(VNamespace.transitions.puzzle.duration, VNamespace.transitions.puzzle.alpha, VNamespace.transitions.puzzle.edge); //NO TRNSITION YET
        await VNamespace.ƒS.Character.show(VNamespace.characters.catblob, VNamespace.characters.catblob.pose.normal, VNamespace.ƒS.positions.center); //position ƒS.positions.bottomcenter ODER ƒS.positionPercent(30, 100)
        await VNamespace.ƒS.update(1);
        // Animationen parallel abspielen
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, text.catblob.T0000, true);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Hi2."); //entweder vordefiniert, oder so hingeschrieben
        // await animationDone;
        // await animationDone2;
        await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob);
        await VNamespace.ƒS.Character.show(VNamespace.characters.catblob2, VNamespace.characters.catblob2.pose.normal, VNamespace.ƒS.positions.bottomcenter); //riem fragen
        let firstDialogueElementOptions = {
            iSayOk: "Cat.",
            iSayYes: "Cats.",
            iSayNo: "Cattsss."
        };
        let firstDialogueElement = await VNamespace.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); //bedeutet:
        //in novel siehst du fenster, kannst elemente klicken, hier iwrd es aufgerufen
        //in css stylen (individualCSSClass)
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Cat is neat.");
                // return "Ende";
                break;
            case firstDialogueElementOptions.iSayYes:
                await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob);
                await VNamespace.ƒS.Location.show(VNamespace.locations.BG_02_test);
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Cats has been chosen.");
                VNamespace.ƒS.Character.animate(VNamespace.characters.catblob, VNamespace.characters.catblob.pose.sleepy, VNamespace.anim_testanim());
                await VNamespace.ƒS.Character.show(VNamespace.characters.catblob2, VNamespace.characters.catblob2.pose.normal, VNamespace.ƒS.positions.bottomleft);
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Shown sleepy blob.");
                break;
            case firstDialogueElementOptions.iSayNo:
                //dataForSave.points += 10;
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "We said nay and change the scene");
                await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob2);
                return VNamespace.scn_testscene_copy();
                break;
        }
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Thank you human!");
        VNamespace.ƒS.Sound.fade(VNamespace.sound.backgroundTheme, 0, 1);
        VNamespace.ƒS.Character.hideAll();
        await VNamespace.ƒS.update(1);
    }
    VNamespace.scn_testscene = scn_testscene;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_testscene2() {
        console.log("Testszene2");
        //hier kommt meine szene rein
    }
    VNamespace.scn_testscene2 = scn_testscene2;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_testscene_copy() {
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
        VNamespace.ƒS.Sound.fade(VNamespace.sound.backgroundTheme, 0.2, 0.1, true); //erste zahl lautstärke, zweite t fadein //true = loop
        // let animationDone: Promise<void> = ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToLeft());
        // let animationDone2: Promise<void> = ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToOutOfCanvas());
        //  Name field
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_01_test);
        await VNamespace.ƒS.update(VNamespace.transitions.puzzle.duration, VNamespace.transitions.puzzle.alpha, VNamespace.transitions.puzzle.edge); //NO TRNSITION YET
        await VNamespace.ƒS.Character.show(VNamespace.characters.catblob, VNamespace.characters.catblob.pose.normal, VNamespace.ƒS.positions.center); //position ƒS.positions.bottomcenter ODER ƒS.positionPercent(30, 100)
        await VNamespace.ƒS.update(1);
        // Animationen parallel abspielen
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, text.catblob.T0000, true);
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
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Hi2."); //entweder vordefiniert, oder so hingeschrieben
        // await animationDone;
        // await animationDone2;
        await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob);
        await VNamespace.ƒS.Character.show(VNamespace.characters.catblob2, VNamespace.characters.catblob2.pose.normal, VNamespace.ƒS.positions.bottomcenter); //riem fragen
        let firstDialogueElementOptions = {
            iSayOk: "Cat.",
            iSayYes: "Cats.",
            iSayNo: "Cattsss."
        };
        let firstDialogueElement = await VNamespace.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); //bedeutet:
        //in novel siehst du fenster, kannst elemente klicken, hier iwrd es aufgerufen
        //in css stylen (individualCSSClass)
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Cat is neat.");
                // return "Ende";
                break;
            case firstDialogueElementOptions.iSayYes:
                await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob);
                await VNamespace.ƒS.Location.show(VNamespace.locations.BG_02_test);
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Cats has been chosen.");
                VNamespace.ƒS.Character.animate(VNamespace.characters.catblob, VNamespace.characters.catblob.pose.sleepy, VNamespace.anim_testanim());
                await VNamespace.ƒS.Character.show(VNamespace.characters.catblob2, VNamespace.characters.catblob2.pose.normal, VNamespace.ƒS.positions.bottomleft);
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Shown sleepy blob.");
                break;
            case firstDialogueElementOptions.iSayNo:
                //dataForSave.points += 10;
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "We said nay and change the scene");
                await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob2);
                return VNamespace.scn_testscene2();
                break;
        }
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Thank you human!");
        VNamespace.ƒS.Sound.fade(VNamespace.sound.backgroundTheme, 0, 1);
        VNamespace.ƒS.Character.hideAll();
        await VNamespace.ƒS.update(1);
        // if (dataForSave.points === 100) {
        //   return End();
        // }
        // return "Ende";
        // return End();
    }
    VNamespace.scn_testscene_copy = scn_testscene_copy;
})(VNamespace || (VNamespace = {}));
var VNamespace;
(function (VNamespace) {
    async function scn_Fud01_Inst() {
        console.log("FUDGEEEEEEEE");
        VNamespace.ƒS.Speech.setTickerDelays(20, 2);
        await VNamespace.ƒS.Location.show(VNamespace.locations.BG_01_test);
        await VNamespace.ƒS.update(VNamespace.transitions.puzzle.duration, VNamespace.transitions.puzzle.alpha, VNamespace.transitions.puzzle.edge); //NO TRNSITION YET
        await VNamespace.ƒS.Character.show(VNamespace.characters.catblob, VNamespace.characters.catblob.pose.normal, VNamespace.ƒS.positions.center); //position ƒS.positions.bottomcenter ODER ƒS.positionPercent(30, 100)
        await VNamespace.ƒS.update(1);
        // Animationen parallel abspielen
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, VNamespace.text.catblob.T0000, true);
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Hi2."); //entweder vordefiniert, oder so hingeschrieben
        // await animationDone;
        // await animationDone2;
        await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob);
        await VNamespace.ƒS.Character.show(VNamespace.characters.catblob2, VNamespace.characters.catblob2.pose.normal, VNamespace.ƒS.positions.bottomcenter); //riem fragen
        let firstDialogueElementOptions = {
            iSayOk: "Cat.",
            iSayYes: "Cats.",
            iSayNo: "Cattsss."
        };
        let firstDialogueElement = await VNamespace.ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); //bedeutet:
        //in novel siehst du fenster, kannst elemente klicken, hier iwrd es aufgerufen
        //in css stylen (individualCSSClass)
        switch (firstDialogueElement) {
            case firstDialogueElementOptions.iSayOk:
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Cat is neat.");
                // return "Ende";
                break;
            case firstDialogueElementOptions.iSayYes:
                await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob);
                await VNamespace.ƒS.Location.show(VNamespace.locations.BG_02_test);
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Cats has been chosen.");
                VNamespace.ƒS.Character.animate(VNamespace.characters.catblob, VNamespace.characters.catblob.pose.sleepy, VNamespace.anim_testanim());
                await VNamespace.ƒS.Character.show(VNamespace.characters.catblob2, VNamespace.characters.catblob2.pose.normal, VNamespace.ƒS.positions.bottomleft);
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Shown sleepy blob.");
                break;
            case firstDialogueElementOptions.iSayNo:
                //dataForSave.points += 10;
                await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "We said nay and change the scene");
                await VNamespace.ƒS.Character.hide(VNamespace.characters.catblob2);
                return VNamespace.scn_testscene_copy();
                break;
        }
        await VNamespace.ƒS.Speech.tell(VNamespace.characters.catblob, "Thank you human!");
        VNamespace.ƒS.Sound.fade(VNamespace.sound.backgroundTheme, 0, 1);
        VNamespace.ƒS.Character.hideAll();
        await VNamespace.ƒS.update(1);
    }
    VNamespace.scn_Fud01_Inst = scn_Fud01_Inst;
})(VNamespace || (VNamespace = {}));
//# sourceMappingURL=Template.js.map