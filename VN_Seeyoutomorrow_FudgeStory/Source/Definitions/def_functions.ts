namespace VNamespace {

    export async function func_SpringCleaning() {
        await ƒS.Speech.clear();
        await ƒS.Speech.hide();
        await ƒS.Character.hideAll();
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
    }

    export async function func_FadeOut() {
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(2);
    }

    export function func_RandomNumberTen(): number {
        return func_RandomNumberRange(0, 10);
    }

    export async function func_speechWithAudio(
        sentenceContent:string = "hallo", sentenceNarrator:string = "", sentenceSound:string = "", sentenceDelay:number = 30
        ) {
        console.log(sentenceContent);
        console.log(sentenceSound);

        let delayTime = new ƒ.Time();

        ƒS.Speech.setTickerDelays(sentenceDelay);


        let sentenceLength = sentenceContent.length;
        //ƒS.Sound.play(sound.SFX.confirm1, 0.5, false);

        ƒS.Speech.tell(sentenceNarrator, sentenceContent);
        
        for (let x: number = 0; x <= sentenceLength; x++){
            ƒS.Sound.play(sound.voices.default[0], 0.5, false);
            await delayTime.delay(sentenceDelay);
        };
        return;
        ƒS.Speech.tell("Hannah", "HIIIIIII");

        // if (child.nodeType == Node.TEXT_NODE) {
        //     let text: string = child.textContent!;
        //     for (let i: number = 0; i < text.length; i++) {
        //       _to.innerHTML += text[i];
        //       await Speech.time.delay(Speech.delayLetter);
        //     }
        //   }
        //   else {
        //     let clone: HTMLElement = <HTMLElement>child.cloneNode(false);
        //     _to.appendChild(clone);
        //     if (child instanceof HTMLParagraphElement)
        //       await Speech.time.delay(Speech.delayParagraph);
        //     if (child.hasChildNodes())
        //       await Speech.copyByLetter(child, clone);
        //   }

    }
}