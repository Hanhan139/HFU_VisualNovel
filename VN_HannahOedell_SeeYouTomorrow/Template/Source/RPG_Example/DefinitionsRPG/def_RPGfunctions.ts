namespace VNamespace {

    export function func_RPGRandomNumber() {
        return func_RandomNumberRange(0, 10)
    };

    //absolutely copied from https://www.codegrepper.com/code-examples/javascript/random+number+generator+in+typescript - I dunno how it does what it does, but it does
    export function func_RPGRandomNumberRange(r_min: any, r_max: any) {
        r_min = Math.ceil(r_min); //Math.ceil rounds stuff up
        r_max = Math.floor(r_max); //Guess what Math.floor does XD
        return Math.floor(Math.random() * (r_max - r_min + 1)) + r_min; //Some suspicious math, but you end up with random numbers so ONWARD!
    };

    export async function fun_AwaitSpeech(charpath: string ="???", insert: string = "..."): Promise<void> {
        await ƒS.Speech.tell(charpath, insert, true);
    };

    export async function fun_PrintBlockKeys(keys = RPGdia_Camp.default): Promise<void> { //The thing behind = means default thing if no value beest given
        for (const t in keys) {
            await ƒS.Speech.tell(RPGcharacters.text, t);
        }
    };

    export async function fun_PrintBlockSpeech(path = RPGdia_Camp.default): Promise<void> {
        for (let diaSequence of Object.values(path)) {
            await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
        };
    };


    //ANIMATION PRESETS

    export function anim_CharJoin(): ƒS.AnimationDefinition {
        return {
          start: { translation: ƒS.positionPercent(150, 100) },
          end: { translation: ƒS.positionPercent(70, 100) },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
}