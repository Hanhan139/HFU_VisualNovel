namespace VNamespace {

    export async function scn_RPG_camp(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

        console.log("RPG CAMP");
        await ƒS.Location.show(locations.BG_PC_FUDGE);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 2);

        let r = func_RPGRandomNumberRange(1, 3);
        switch (r) {
            case 1:
                for (let diaSequence of Object.values(RPGdia_Camp.description01)) {
                    await ƒS.Speech.tell(RPGcharacters.text, diaSequence); //Hi Jirka! So funktioniert das mit dem mehrere Sachen ausgeben;
                    //aber eigentlich will ich diese zwei zeilen zusammen fassen, und später noch etwas mehr in die funktion einfügen wenn das funktioniert.
                };
                break;
                 //Die funktion mit der das aber gehen soll ist in DefinitionsRPG/def_RPGfunctions.ts
                    //fun_PrintBlockSpeech(); Funktioniert, verwendet die default werte
                    //Aber ich kann der Funktion nicht sagen, welchen Pfad sie verwenden soll, wenn ich z.B. description03 anstelle 1 haben wollen würde
                    //fun_PrintBlockSpeech(RPGdia_Camp.description03)
            case 2:
                for (let diaSequence of Object.values(RPGdia_Camp.description02)) {
                    await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
                };
                break;
            case 3:
                for (let diaSequence of Object.values(RPGdia_Camp.description03)) {
                    await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
                };
                break;
            default:
                await ƒS.Speech.tell(RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        };

        

        let DecisionButtons = {
            dec_portal: "Portal",
            dec_companions: "Companions",
            dec_sleep: "Sleep",
            dec_leave: "Explore",
        };

        let Decision = await ƒS.Menu.getInput(DecisionButtons, "individualCSSClass");

        switch (Decision) {
            case DecisionButtons.dec_portal:
                await ƒS.Speech.tell(RPGcharacters.text, "Yep. You check on the portal. It's still as swirly, menacing, and unyielding as before.");
                await ƒS.Speech.tell(RPGcharacters.text, "Really doesn't want to let you through. Not much you can do about it, except maybe menacingly roast some chestnuts to fill your stomach.");
                break;
            case DecisionButtons.dec_companions:
                await ƒS.Speech.tell(RPGcharacters.text, "You decide to check on your companions, which you totally remember.");
                return scn_RPG_comp();
                break;
            case DecisionButtons.dec_sleep:
                await ƒS.Speech.tell(RPGcharacters.text, "You take a well deserved nap. It's not even past Midnight! You'll adapt good sleeping habits like this if you aren't careful.");
                return scn_RPG_camp();
                break;
            case DecisionButtons.dec_leave:
                await ƒS.Speech.tell(RPGcharacters.text, "You bravely venture out to explore the wilderness. It gets you about fifty feet away from camp until you remember nothing outside the camp has been coded. Oh well. Worth a try.");
                break;
            default:
                await ƒS.Speech.tell(RPGcharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        };

        let Button_BACK = {
            dec_BACK: "Back",
        };

        await ƒS.Menu.getInput(Button_BACK, "individualCSSClass");
        return scn_RPG_camp();


        //ASK RIEM FOR SOMETHING MORE EFFICIENT
        // await ƒS.Speech.tell(RPGcharacters.text, "IN BETWWEN LIIINE", true);

        //WE GOT THE KEY
        // for (const t in RPGdia_Camp.description01) {
        //     await ƒS.Speech.tell(RPGcharacters.text, t);
        //     }

        // for (let diaSequence of Object.values(RPGdia_Camp.description01) ) {
        //     await ƒS.Speech.tell(RPGcharacters.text, diaSequence);
        // }; 
        //THIS OWRKS; THIS GOOD


        // await ƒS.Speech.tell(RPGcharacters.text, RPGdia_Camp.description01.T_00000, true);
        // return scn_Title_M();
    }
}