namespace VNamespace {

//Math and randomizers

    export function func_RandomNumberTen(): number {
        return func_RandomNumberRange(0, 10);
    }  

// Scenes and scene specific functions

    export async function func_SpringCleaning() {
        await ƒS.Speech.clear();
        await ƒS.Speech.hide();
        await ƒS.Character.hideAll();
        document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForAisaka").style.display = "none";
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(1);
    }

    export async function func_FadeOut() {
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
    }


    //Voice output with sound

    export async function func_randomSoundHERvoice(){
        
        let randomNumber = func_RandomNumberTen();

        switch (randomNumber) {
            case 0:
                return sound.voices.default[0];
            case 1:
                return sound.voices.default[1];
            case 2:
                return sound.voices.default[2];
            case 3:
                return sound.voices.default[3];
            case 4:
                return sound.voices.default[4];
            case 5:
                return sound.voices.default[5];
            case 6:
                return sound.voices.default[6];
            case 7:
                return sound.voices.default[7];
            case 8:
                return sound.voices.default[8];
            case 9:
                return sound.voices.default[9];
            case 10:
                return sound.voices.default[10];
            default:
                return sound.voices.default[0];
          };
    }

    // export async function func_speechWithAudio(
    //     _sentenceContent:string = "", _sentenceNarrator:string = "", _sentenceSound:string = "", _sentenceDelay:number = 40
    //     ) {
           
    //         let delayTime = new ƒ.Time();
    //         let voiceChange = await func_randomSoundHERvoice();
    //         let sentenceLength = _sentenceContent.length;

    //         ƒS.Speech.setTickerDelays(_sentenceDelay);
    //         ƒS.Speech.tell(_sentenceNarrator, _sentenceContent);
            
    //         for (let x: number = 0; x < sentenceLength; x++){
                
    //             if (_sentenceSound != ""){
    //                 if (_sentenceSound == "HER"){
    //                     ƒS.Sound.play(voiceChange, 1, false);
    //                 }else if (_sentenceSound == "CHAOS"){
    //                     ƒS.Sound.play(await func_randomSoundHERvoice(), 1, false);
    //                 }else {
    //                     ƒS.Sound.play(_sentenceSound, 1, false);
    //                 };
    //             };
    //             await delayTime.delay(_sentenceDelay);
    //         };
    //         return;
    //     };


    export async function func_speechWithAudio(
        _sentenceNarrator:string = "", _sentenceContent:string = "", _sentenceSound:string = "", _sentenceDelay:number = 30,
        _waitForNext = true,
        ) {         
            let delayTime = new ƒ.Time();
            let voiceChange = await func_randomSoundHERvoice();
            let sentenceLength = _sentenceContent.length;

            ƒS.Speech.setTickerDelays(_sentenceDelay);
            ƒS.Speech.tell(_sentenceNarrator, _sentenceContent, _waitForNext);
            
            for (let x: number = 0; x < sentenceLength; x++){
                
                if (_sentenceSound != ""){
                    if (_sentenceSound == "HER"){
                        ƒS.Sound.play(voiceChange, 1, false);
                    }else if (_sentenceSound == "CHAOS"){
                        ƒS.Sound.play(await func_randomSoundHERvoice(), 1, false);
                    }else {
                        ƒS.Sound.play(_sentenceSound, 1, false);
                    };
                };
                await delayTime.delay(_sentenceDelay);
            };
        };

            // static signalForwardTicker = FudgeStory.Progress.defineSignal([() => FudgeStory.getKeypress(ƒ.KEYBOARD_CODE.SPACE), FudgeStory.EVENT.POINTERDOWN]);
            // static signalNext = FudgeStory.Progress.defineSignal([() => FudgeStory.getKeypress(ƒ.KEYBOARD_CODE.SPACE), FudgeStory.EVENT.POINTERDOWN]);
            // static element;
            // static time = new ƒ.Time();
            // static delayLetter = 50;
            // static delayParagraph = 1000;
            // static get div() {
            //     Speech.element = Speech.element || document.querySelector("speech");
            //     return Speech.element;

            // static async tell(_character, _text, _waitForSignalNext = true, _class) {
            //     //Fyo was here
            //     Speech.show();
            //     let done = false;
            //     Speech.set(_character, "", _class);
            //     let buffer = document.createElement("div");
            //     let textTag = Speech.div.querySelector("content");
            //     buffer.innerHTML = _text;
            //     let prmTick = this.copyByLetter(buffer, textTag);
            //     let prmInput = new Promise(async (_resolve) => {
            //         await Speech.signalForwardTicker();
            //         if (done)
            //             return;
            //         console.log("Ticker interrupted");
            //         Speech.time.clearAllTimers();
            //         Speech.set(_character, _text, _class);
            //         _resolve(null);
            //     });
            //     await Promise.race([prmTick, prmInput]);
            //     done = true;
            //     if (!_waitForSignalNext)
            //         return;
            //     await Speech.signalNext();
            // }
            // /**
            //  * Defines the pauses used by ticker between letters and before a paragraph in milliseconds
            //  */
            // static setTickerDelays(_letter, _paragraph = 1000) {
            //     Speech.delayLetter = _letter;
            //     Speech.delayParagraph = _paragraph;
            // }

            // static async copyByLetter(_from, _to) {
            //     for (let child of _from.childNodes) {
            //         // console.log(child.nodeType, child instanceof HTMLParagraphElement, child.hasChildNodes(), child);
            //         if (child.nodeType == Node.TEXT_NODE) {
            //             let text = child.textContent;
            //             for (let i = 0; i < text.length; i++) {
            //                 _to.innerHTML += text[i];
            //                 await Speech.time.delay(Speech.delayLetter);
            //             }
            //         }
            //         else {
            //             let clone = child.cloneNode(false);
            //             _to.appendChild(clone);
            //             if (child instanceof HTMLParagraphElement)
            //                 await Speech.time.delay(Speech.delayParagraph);
            //             if (child.hasChildNodes())
            //                 await Speech.copyByLetter(child, clone);
            //         }
            //     }
            // }

            // /**
            //  * Displays the phrases told by the characters or the narrator - stolen from Fudge thingy to stare intently
            // */
            // export class Speech {
            //     public static signalForwardTicker = Progress.defineSignal([() => getKeypress(ƒ.KEYBOARD_CODE.SPACE), EVENT.POINTERDOWN]);
            //     public static signalNext = Progress.defineSignal([() => getKeypress(ƒ.KEYBOARD_CODE.SPACE), EVENT.POINTERDOWN]);

            //     private static element: HTMLDivElement;
            //     private static time = new ƒ.Time();
            //     private static delayLetter: number = 50;
            //     private static delayParagraph: number = 1000;


            //     private static get div(): HTMLDivElement {
            //     Speech.element = Speech.element || document.querySelector("speech");
            //     return Speech.element;
            //     }

}