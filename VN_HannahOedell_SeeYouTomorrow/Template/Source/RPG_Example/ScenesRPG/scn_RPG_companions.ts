namespace VNamespace {

    export async function scn_RPG_comp(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

        console.log("RPG COMPANIONS");
        await ƒS.Location.show(locations.BG_Canvas);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 2);

        // --- Camp presence --- (Gone/Home)
        //Artugia at camp
        let r = func_RPGRandomNumberRange(0, 1);
        switch (r) {
            case 0:
                for (let diaSequence of Object.values(RPGdia_Camp.presence.goneAturia)) {
                    await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
                };
                break;
            case 1:
                for (let diaSequence of Object.values(RPGdia_Camp.presence.homeAturia)) {
                    await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
                };
                break;
            default:
                await ƒS.Speech.tell(RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        };

        //Amie at camp
        r = func_RPGRandomNumberRange(0, 1);

        switch (r) {
            case 0:
                for (let diaSequence of Object.values(RPGdia_Camp.presence.goneAmie)) {
                    await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
                };
                break;
            case 1:
                await ƒS.Speech.tell(RPGcharacters.text, RPGdia_Camp.presence.homeAmie);
                // for (let diaSequence of Object.values(RPGdia_Camp.presence.homeAmie)) {
                //     await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
                // };
                let DecisionButtons2 = {
                    dec_amie: "Amie",
                    dec_BACK: "Back",
                };

                let Decision = await ƒS.Menu.getInput(DecisionButtons2, "individualCSSClass");

                switch (Decision) {
                    case DecisionButtons2.dec_amie:
                        await ƒS.Speech.tell(RPGcharacters.text, "You make your way to the campfire, giving the auburn furred ratfolk a friendly smile as you approach.");
                        return scn_RPG_compAmie();
                        break;
                    case DecisionButtons2.dec_BACK:
                        await ƒS.Speech.tell(RPGcharacters.text, "Nothing better to do, you walk a few rounds around the tents in hopes it will change any of the dialog.");
                        return scn_RPG_camp();
                        break;
                    default:
                        await ƒS.Speech.tell(RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                        break;
                };
                break;
            default:
                await ƒS.Speech.tell(RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        };

        let Button_BACK = {
            dec_BACK: "Back",
        };
        await ƒS.Speech.tell(RPGcharacters.text, "Nothing better to do, you walk a few rounds around the tents in hopes it will change any of the dialog.");
        await ƒS.Menu.getInput(Button_BACK, "individualCSSClass");
        return scn_RPG_camp();
    }
}