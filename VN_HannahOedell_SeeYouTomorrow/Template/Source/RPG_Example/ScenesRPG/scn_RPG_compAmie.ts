namespace VNamespace {

    export async function scn_RPG_compAmie(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

        console.log("RPG COMPANIONS - AMIE");

        let AmieGreeted = false;
        let loop = true;

        await ƒS.Location.show(locations.BG_02_test);
        await ƒS.update(2, "./Assets/Transitions/TR_dots_default.png", 1);

        await ƒS.Character.show(RPGcharacters.amie, RPGcharacters.amie.pose.default, ƒS.positionPercent(200, 100));
        await ƒS.Character.animate(RPGcharacters.amie, RPGcharacters.amie.pose.default, anim_CharJoin());
        await ƒS.update(2);

        for (let diaSequence of Object.values(RPGdia_Camp.companionDialogue.amie.greeting)) {
            await ƒS.Speech.tell(RPGcharacters.amie, diaSequence);
        };

        //Talking to Amelie
        while (loop) {
            //Greeting/In between
            if (!AmieGreeted) {
                await fun_AwaitSpeech("Amie", RPGdia_Camp.companionDialogue.amie.talk.T0000);
                AmieGreeted = true;
            } else {
                await fun_AwaitSpeech("Amie", RPGdia_Camp.companionDialogue.amie.talk.T0001);
            };

            let DecisionButtons2 = {
                dec_1: "Hi Amelie. How are you doing?",
                dec_2: "How does this scene work?",
                dec_3: "Drawing commissions!",
                dec_BACK: "Back",
            };

            let Decision = await ƒS.Menu.getInput(DecisionButtons2, "individualCSSClass");

            switch (Decision) {
                case DecisionButtons2.dec_1:

                    for (let diaSequence of Object.values(RPGdia_Camp.companionDialogue.amie.howareyou)) {
                        await ƒS.Speech.tell(RPGcharacters.amie, diaSequence);
                    };
                    let Button_BACK = {
                        dec_BACK: "That sounded oddly specific.",
                    };
                    await ƒS.Menu.getInput(Button_BACK, "individualCSSClass");
                    break;

                case DecisionButtons2.dec_2:

                    for (let diaSequence of Object.values(RPGdia_Camp.companionDialogue.amie.work)) {
                        await ƒS.Speech.tell(RPGcharacters.amie, diaSequence);
                    };
                    break;

                case DecisionButtons2.dec_3:

                    for (let diaSequence of Object.values(RPGdia_Camp.companionDialogue.amie.commissions)) {
                        await ƒS.Speech.tell(RPGcharacters.amie, diaSequence);
                    };
                    break;

                case DecisionButtons2.dec_BACK:
                    ƒS.Character.hideAll();
                    return scn_RPG_camp();
                    break;

                default:
                    await ƒS.Speech.tell(RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                    break;
            };
        };

    };
}