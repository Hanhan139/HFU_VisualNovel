namespace VNamespace {

    export async function scn_RPG_comp(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

        console.log("RPG COMPANIONS");
        await ƒS.Location.show(rpgLocations.BG_companions);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 2);

        // --- Camp presence --- (Gone/Home)
        //Artugia at camp
        let r = func_RPGRandomNumberRange(0, 1);
        switch (r) {
            case 0:
                for (let diaSequence of Object.values(rpgDiaCamp.presence.goneAturia)) {
                    await ƒS.Speech.tell(rpgCharacters.text, diaSequence);
                }
                break;
            case 1:
                for (let diaSequence of Object.values(rpgDiaCamp.presence.homeAturia)) {
                    await ƒS.Speech.tell(rpgCharacters.text, diaSequence);
                }
                break;
            default:
                await ƒS.Speech.tell(rpgCharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        }

        //Amie at camp
        r = func_RPGRandomNumberRange(0, 1);

        switch (r) {
            case 0:
                for (let diaSequence of Object.values(rpgDiaCamp.presence.goneAmie)) {
                    await ƒS.Speech.tell(rpgCharacters.text, diaSequence);
                }
                break;
            case 1:
                await ƒS.Speech.tell(rpgCharacters.text, rpgDiaCamp.presence.homeAmie);
                // for (let diaSequence of Object.values(RPGdia_Camp.presence.homeAmie)) {
                //     await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
                // };
                let decisionButtons2 = {
                    dec_amie: "Amie",
                    dec_BACK: "Back"
                };

                let decision = await ƒS.Menu.getInput(decisionButtons2, "individualCSSClass");

                switch (decision) {
                    case decisionButtons2.dec_amie:
                        await ƒS.Speech.tell(rpgCharacters.text, "You make your way to the campfire, giving the auburn furred ratfolk a friendly smile as you approach.");
                        return scn_RPG_compAmie();
                        break;
                    case decisionButtons2.dec_BACK:
                        await ƒS.Speech.tell(rpgCharacters.text, "Nothing better to do, you walk a few rounds around the tents in hopes it will change any of the dialog.");
                        return scn_RPG_camp();
                        break;
                    default:
                        await ƒS.Speech.tell(rpgCharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                        break;
                }
                break;
            default:
                await ƒS.Speech.tell(rpgCharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        }

        let buttonBack = {
            dec_BACK: "Back"
        };
        await ƒS.Speech.tell(rpgCharacters.text, "Nothing better to do, you walk a few rounds around the tents in hopes it will change any of the dialog.");
        await ƒS.Menu.getInput(buttonBack, "individualCSSClass");
        return scn_RPG_camp();
    }
}