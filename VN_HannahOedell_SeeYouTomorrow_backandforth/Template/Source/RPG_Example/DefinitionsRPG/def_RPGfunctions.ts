namespace VNamespace {

    export function func_RPGRandomNumber(): number {
        return func_RandomNumberRange(0, 10);
    }

    //absolutely copied from https://www.codegrepper.com/code-examples/javascript/random+number+generator+in+typescript - I dunno how it does what it does, but it does
    export function func_RPGRandomNumberRange(min: number = 0, max: number = 10): number {
        min = Math.ceil(min); //Math.ceil rounds stuff up
        max = Math.floor(max); //Guess what Math.floor does XD
        return Math.floor(Math.random() * (max - min + 1)) + min; //Some suspicious math, but you end up with random numbers so ONWARD!
    }

    //typisierung 

    export async function fun_AwaitSpeech(charpath: string = "???", insert: string = "..."): Promise<void> {
        await ƒS.Speech.tell(charpath, insert, true);
    }

    //Object = Geschweifte klammern, Datensätze
    export async function fun_PrintBlockKeys(keys: Object = rpgDiaCamp.default): Promise<void> { //The thing behind = means default thing if no value beest given
        for (const t in keys) {
            await ƒS.Speech.tell(rpgCharacters.text, t);
        }
    }

    export async function fun_PrintBlockSpeech(path: Object = rpgDiaCamp.default): Promise<void> {
        for (let diaSequence of Object.values(path)) {
            await ƒS.Speech.tell(rpgCharacters.text, diaSequence); //funktion wird unterbrochen und es macht weiter
        }
    }

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