declare namespace VNamespace {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        points: number;
        scoreeyyy: number;
        varHadTea: boolean;
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
    function fromRightToOutOfCanvas(): ƒS.AnimationDefinition;
    function fromRightToLeft(): ƒS.AnimationDefinition;
    function anim_testanim(): ƒS.AnimationDefinition;
}
declare namespace VNamespace {
    let sound: {
        backgroundTheme: string;
        click: string;
    };
}
declare namespace VNamespace {
    let characters: {
        narrator: {
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
}
declare namespace VNamespace {
    let locations: {
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
    };
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
        puzzle: {
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
    let RPGcharacters: {
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
                sleepy: string;
                energetic: string;
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
    let RPGdia_Camp: {
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
    function func_RPGRandomNumber(): any;
    function func_RPGRandomNumberRange(r_min: any, r_max: any): any;
    function fun_AwaitSpeech(charpath?: string, insert?: string): Promise<void>;
    function fun_PrintBlockKeys(keys?: {
        T_default: string;
    }): Promise<void>;
    function fun_PrintBlockSpeech(path?: {
        T_default: string;
    }): Promise<void>;
    function anim_CharJoin(): ƒS.AnimationDefinition;
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
