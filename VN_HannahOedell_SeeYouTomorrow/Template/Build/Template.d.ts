declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        points: number;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function fromRightToOutOfCanvas(): ƒS.AnimationDefinition;
    function fromRightToLeft(): ƒS.AnimationDefinition;
    function anim_testanim(): ƒS.AnimationDefinition;
}
declare namespace Template {
    let sound: {
        backgroundTheme: string;
        click: string;
    };
}
declare namespace Template {
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
declare namespace Template {
}
declare namespace Template {
    let locations: {
        BG_01_test: {
            name: string;
            background: string;
        };
        BG_02_test: {
            name: string;
            background: string;
        };
    };
}
declare namespace Template {
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
declare namespace Template {
    let transitions: {
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Template {
    function scn_testscene(): ƒS.SceneReturn;
}
declare namespace Template {
    function scn_testscene2(): ƒS.SceneReturn;
}
