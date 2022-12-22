namespace VNamespace {

    export async function scn_RPG_compAmie(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

        console.log("RPG COMPANIONS - AMIE");

        let amieGreeted = false;
        let loop = true;

        await ƒS.Location.show(rpgLocations.BG_fire);
        await ƒS.update(2, "./Assets/Transitions/TR_dots_default.png", 1);

        await ƒS.Character.show(rpgCharacters.amie, rpgCharacters.amie.pose.default, ƒS.positionPercent(200, 100));
        await ƒS.Character.animate(rpgCharacters.amie, rpgCharacters.amie.pose.default, anim_CharJoin());
        await ƒS.update(2);
        await ƒS.Character.hideAll();

        await ƒS.Character.show(rpgCharacters.amie, rpgCharacters.amie.pose.speak, ƒS.positionPercent(70, 100));
        await ƒS.update(2);
        await ƒS.Character.hideAll();

        for (let diaSequence of Object.values(rpgDiaCamp.companionDialogue.amie.greeting)) {
            await ƒS.Speech.tell(rpgCharacters.amie, diaSequence);
        }

        //Talking to Amelie
        while (loop) {
            await ƒS.Character.hideAll();
            await ƒS.Character.show(rpgCharacters.amie, rpgCharacters.amie.pose.default, ƒS.positionPercent(70, 100));
            await ƒS.update(0.5);
            //Greeting/In between
            if (!amieGreeted) {
                await fun_AwaitSpeech("Amie", rpgDiaCamp.companionDialogue.amie.talk.T0000);
                amieGreeted = true;
            } else {
                await fun_AwaitSpeech("Amie", rpgDiaCamp.companionDialogue.amie.talk.T0001);
            }

            let decisionButtons2 = {
                dec_1: "Hi Amelie. How are you doing?",
                dec_2: "How does this scene work?",
                dec_3: "Drawing commissions!",
                dec_BACK: "Back"
            };

            let decision = await ƒS.Menu.getInput(decisionButtons2, "individualCSSClass");

            switch (decision) {
                case decisionButtons2.dec_1:
                    await ƒS.Character.hideAll();
                    await ƒS.Character.show(rpgCharacters.amie, rpgCharacters.amie.pose.sus1, ƒS.positionPercent(70, 100));
                   
                    function anim_TakenAback(): ƒS.AnimationDefinition {
                        return {
                          start: { translation: ƒS.positionPercent(70, 100) },
                          end: { translation: ƒS.positionPercent(80, 100) },
                          duration: 1,
                          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                        };
                      }
                    await ƒS.Character.hideAll();
                    await ƒS.Character.animate(rpgCharacters.amie, rpgCharacters.amie.pose.sus1, anim_TakenAback());

                    await ƒS.update(2);
                    for (let diaSequence of Object.values(rpgDiaCamp.companionDialogue.amie.howareyou)) {
                        await ƒS.Speech.tell(rpgCharacters.amie, diaSequence);
                    }

                    function anim_TakenAbackBack(): ƒS.AnimationDefinition {
                        return {
                          start: { translation: ƒS.positionPercent(80, 100) },
                          end: { translation: ƒS.positionPercent(70, 100) },
                          duration: 1,
                          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
                        };
                      }
                    await ƒS.Character.hideAll();
                    await ƒS.Character.animate(rpgCharacters.amie, rpgCharacters.amie.pose.sus1, anim_TakenAbackBack());

                    let buttonBack = {
                        dec_BACK: "That sounded oddly specific."
                    };
                    await ƒS.Menu.getInput(buttonBack, "individualCSSClass");
                    break;

                case decisionButtons2.dec_2:
                    await ƒS.Character.hideAll();
                    await ƒS.Character.show(rpgCharacters.amie, rpgCharacters.amie.pose.default, ƒS.positionPercent(70, 100));
                    await ƒS.update(2);
                    for (let diaSequence of Object.values(rpgDiaCamp.companionDialogue.amie.work)) {
                        await ƒS.Speech.tell(rpgCharacters.amie, diaSequence);
                    }
                    break;

                case decisionButtons2.dec_3:
                    await ƒS.Character.hideAll();
                    await ƒS.Character.show(rpgCharacters.amie, rpgCharacters.amie.pose.speak, ƒS.positionPercent(70, 100));
                    await ƒS.update(2);
                    for (let diaSequence of Object.values(rpgDiaCamp.companionDialogue.amie.commissions)) {
                        await ƒS.Speech.tell(rpgCharacters.amie, diaSequence);
                    }
                    break;

                case decisionButtons2.dec_BACK:
                    ƒS.Character.hideAll();
                    return scn_RPG_camp();
                    break;

                default:
                    await ƒS.Speech.tell(rpgCharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                    break;
            }
        }

    }
}