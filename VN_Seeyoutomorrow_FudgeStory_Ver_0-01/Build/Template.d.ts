declare namespace VNamespace {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        points: number;
        scoreeyyy: number;
        varHadTea: boolean;
        varDaysPlayed: number;
        varTutorialsWatched: number;
        varLoveDisplay: number;
        aisakaScore: number;
        scoreForAisaka: string;
    };
    function showCredits(): void;
}
declare namespace VNamespace {
    function Scene(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    let text: {
        narrator: {
            T0000: string;
            T0001: string;
        };
        catblob: {
            T0000: string;
            T0001: string;
        };
    };
}
declare namespace VNamespace {
    function anim_fromRightToOutOfCanvas(): ƒS.AnimationDefinition;
    function anim_fromRightToLeft(): ƒS.AnimationDefinition;
    function anim_testanim(): ƒS.AnimationDefinition;
    function anim_colorChangeBlackIn(): ƒS.AnimationDefinition;
    function anim_colorChangeBlackOut(): ƒS.AnimationDefinition;
    function anim_fadeInFromBlack(): ƒS.AnimationDefinition;
}
declare namespace VNamespace {
    let sound: {
        SFX: {
            confirm1: string;
        };
        click: string;
        voices: {
            default: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
                10: string;
            };
        };
        backgroundTheme: string;
        music: {
            intro: string;
            mistrust: string;
            awkward: string;
        };
    };
}
declare namespace VNamespace {
    let BG_loading: {
        screen0: {
            name: string;
            background: string;
        };
        screen1: {
            name: string;
            background: string;
        };
        screen2: {
            name: string;
            background: string;
        };
        screen3: {
            name: string;
            background: string;
        };
        screen4: {
            name: string;
            background: string;
        };
        screen5: {
            name: string;
            background: string;
        };
        screen6: {
            name: string;
            background: string;
        };
        screen7: {
            name: string;
            background: string;
        };
        screen8: {
            name: string;
            background: string;
        };
        screen9: {
            name: string;
            background: string;
        };
        screen10: {
            name: string;
            background: string;
        };
        screen11: {
            name: string;
            background: string;
        };
    };
    let backgrounds: {
        BG_01_test: {
            name: string;
            background: string;
        };
        BG_02_test: {
            name: string;
            background: string;
        };
        BG_Title1: {
            name: string;
            background: string;
        };
        BG_Title2: {
            name: string;
            background: string;
        };
        BG_Intro_Night1: {
            name: string;
            background: string;
        };
        BG_Intro_Night2: {
            name: string;
            background: string;
        };
        BG_Intro_Night3: {
            name: string;
            background: string;
        };
        BG_Intro_Night4: {
            name: string;
            background: string;
        };
        BG_Intro_Night5: {
            name: string;
            background: string;
        };
        BG_Intro_Night6: {
            name: string;
            background: string;
        };
        BG_Day1_1: {
            name: string;
            background: string;
        };
        BG_Day1_C: {
            name: string;
            background: string;
        };
        BG_Day1_H: {
            name: string;
            background: string;
        };
        BG_Day1_M: {
            name: string;
            background: string;
        };
        BG_Day2y: {
            name: string;
            background: string;
        };
        BG_Day2n: {
            name: string;
            background: string;
        };
        BG_Day3yy: {
            name: string;
            background: string;
        };
        BG_Day3yn: {
            name: string;
            background: string;
        };
        BG_Day3nn: {
            name: string;
            background: string;
        };
        BG_PC_FUDGE: {
            name: string;
            background: string;
        };
        BG_Canvas: {
            name: string;
            background: string;
        };
        BG_Black: {
            name: string;
            background: string;
        };
        BG_Fade: {
            name: string;
            background: string;
        };
        BG_LDS0: {
            name: string;
            background: string;
        };
    };
}
declare namespace VNamespace {
    let characters: {
        narrator: {
            name: string;
        };
        HER: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default_normal: string;
                default_happy: string;
                default_sparkly: string;
                default_doubtful: string;
            };
        };
        HER_layton: {
            name: string;
        };
        HER_phoenix: {
            name: string;
        };
        HER_edgeworth: {
            name: string;
        };
        catblob: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                sleepy: string;
                energetic: string;
            };
        };
        catblob2: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
}
declare namespace VNamespace {
    let consoles: {};
    function con_Introduction1(): void;
}
declare namespace VNamespace {
    function func_RandomNumberTen(): number;
    function func_SpringCleaning(): Promise<void>;
    function func_FadeOut(): Promise<void>;
    function func_randomSoundHERvoice(): Promise<string>;
    function func_speechWithAudio(_sentenceNarrator?: string, _sentenceContent?: string, _sentenceSound?: string, _sentenceDelay?: number, _waitForNext?: boolean): Promise<void>;
}
declare namespace VNamespace {
}
declare namespace VNamespace {
    function incrementSound(): void;
    function decrementSound(): void;
    let inGameMenu: {
        save: string;
        load: string;
        close: string;
        turnUpVolume: string;
        turnDownVolume: string;
    };
    let gameMenu: ƒS.Menu;
    let menu: boolean;
    function buttonFunctionalities(_option: string): Promise<void>;
}
declare namespace VNamespace {
    let transitions: {
        black: {
            alpha: string;
        };
        fade: {
            duration: number;
            alpha: string;
        };
        dotscrollRL: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace VNamespace {
    let scoresss: number;
    function func_RandomNumber(): any;
    function func_RandomNumberRange(r_min: any, r_max: any): any;
}
declare namespace VNamespace {
    let rpgCharacters: {
        text: {
            name: string;
        };
        champion: {
            name: string;
        };
        amie: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
                speak: string;
                sus1: string;
                sus2: string;
            };
        };
        arturia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                sleepy: string;
                energetic: string;
            };
        };
    };
}
declare namespace VNamespace {
    let rpgDiaCamp: {
        default: {
            T_default: string;
        };
        description01: {
            T_00000: string;
            T_00001: string;
            T_00003: string;
            T_00005: string;
            T_00006: string;
            T_00008: string;
            T_00009: string;
        };
        description02: {
            T_00000: string;
            T_00001: string;
            T_00002: string;
            T_00003: string;
        };
        description03: {
            T_00000: string;
            T_00001: string;
            T_00002: string;
            T_00004: string;
            T_00006: string;
            T_00008: string;
        };
        presence: {
            goneAturia: {
                T_at_gone_0000: string;
                T_at_gone_0002: string;
                T_at_gone_0004: string;
            };
            homeAturia: {
                T_at_home_0000: string;
                T_at_home_0001: string;
            };
            goneAmie: {
                T_am_gone_0000: string;
                T_am_gone_0001: string;
            };
            homeAmie: string;
        };
        companionDialogue: {
            amie: {
                greeting: {
                    T0000: string;
                    T0001: string;
                };
                talk: {
                    T0000: string;
                    T0001: string;
                };
                howareyou: {
                    T0000: string;
                    T0001: string;
                    T0002: string;
                    T0003: string;
                    T0004: string;
                    T0005: string;
                    T0006: string;
                    T0007: string;
                    T0008: string;
                    T0009: string;
                    T0010: string;
                };
                work: {
                    T0000: string;
                    T0001: string;
                    T0002: string;
                    T0003: string;
                    T0004: string;
                    T0005: string;
                    T0006: string;
                };
                commissions: {
                    T0000: string;
                    T0001: string;
                    T0002: string;
                    T0003: string;
                    T0004: string;
                    T0005: string;
                    T0006: string;
                    T0007: string;
                    T0008: string;
                    T0009: string;
                    T0010: string;
                    T0011: string;
                };
            };
        };
    };
}
declare namespace VNamespace {
    function func_RPGRandomNumber(): number;
    function func_RPGRandomNumberRange(min?: number, max?: number): number;
    function fun_AwaitSpeech(charpath?: string, insert?: string): Promise<void>;
    function fun_PrintBlockKeys(keys?: Object): Promise<void>;
    function fun_PrintBlockSpeech(path?: Object): Promise<void>;
    function anim_CharJoin(): ƒS.AnimationDefinition;
}
declare namespace VNamespace {
    let rpgbackgrounds: {
        BG_camp: {
            name: string;
            background: string;
        };
        BG_companions: {
            name: string;
            background: string;
        };
        BG_fire: {
            name: string;
            background: string;
        };
        BG_portal: {
            name: string;
            background: string;
        };
        BG_ventureout: {
            name: string;
            background: string;
        };
        BG_ventureoutfurther: {
            name: string;
            background: string;
        };
    };
}
declare namespace VNamespace {
    function scn_RPG_camp(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_RPG_compAmie(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_RPG_comp(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_RPG_explore(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_RPG_intro(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day1_1(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day1_C(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day1_H(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day1_M(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day2_n(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day2_y(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day3_nn(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day3_ny(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Day3_yy(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Intro(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Loading(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Meterbar(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Title_1(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Title_C(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Title_H(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Title_M(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_testscene(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_testscene2(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_testscene_copy(): ƒS.SceneReturn;
}
declare namespace VNamespace {
    function scn_Fud01_Inst(): ƒS.SceneReturn;
}
