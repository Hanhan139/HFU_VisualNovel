namespace VNamespace {

    export async function scn_RPG_camp(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

        console.log("RPG CAMP");
        await ƒS.Location.show(rpgbackgrounds.BG_camp);
        await ƒS.update(2, "./Assets/Transitions/TR_dots_default.png", 1);

        let y = ƒ.Random.default.getRangeFloored(1, 3); //FUDGE EINGEBAUTER RANDOMIZER
        console.log(y);

        let r = func_RPGRandomNumberRange(1, 3);
        switch (r) {
            case 1:
                for (let diaSequence of Object.values(rpgDiaCamp.description01)) {
                    await ƒS.Speech.tell(rpgCharacters.text, diaSequence); 
                }
                break;
            case 2:
                for (let diaSequence of Object.values(rpgDiaCamp.description02)) {
                    await ƒS.Speech.tell(rpgCharacters.text, diaSequence);
                }
                break;
            case 3:
                for (let diaSequence of Object.values(rpgDiaCamp.description03)) {
                    await ƒS.Speech.tell(rpgCharacters.text, diaSequence);
                }
                break;
            default:
                await ƒS.Speech.tell(rpgCharacters.text, "Somehow, you wound up in the default option. Curious.");
                break;
        }



        let decisionButtons = {
            dec_portal: "Portal",
            dec_companions: "Companions",
            dec_sleep: "Sleep",
            dec_leave: "Explore"
        };

        let decision = await ƒS.Menu.getInput(decisionButtons, "individualCSSClass");

        switch (decision) {
            case decisionButtons.dec_portal:
                await ƒS.Location.show(rpgbackgrounds.BG_portal);
                ƒS.update(3);
                await ƒS.Speech.tell(rpgCharacters.text, "Yep. You check on the portal. It's still as swirly, menacing, and unyielding as before.");
                await ƒS.Speech.tell(rpgCharacters.text, "Really doesn't want to let you through. Not much you can do about it, except maybe menacingly roast some chestnuts to fill your stomach.");
                break;
            case decisionButtons.dec_companions:
                await ƒS.Speech.tell(rpgCharacters.text, "You decide to check on your companions, which you totally remember.");
                return scn_RPG_comp();
                break;
            case decisionButtons.dec_sleep:
                await ƒS.Speech.tell(rpgCharacters.text, "You take a well deserved nap. It's not even past Midnight! You'll adapt good sleeping habits like this if you aren't careful.");
                return scn_RPG_camp();
                break;
            case decisionButtons.dec_leave:
                await ƒS.Location.show(rpgbackgrounds.BG_ventureout);
                ƒS.Speech.tell(rpgCharacters.text, "You bravely venture out to explore the wilderness. It gets you about fifty feet away from camp until you remember nothing outside the camp has been coded. Oh well. Worth a try.");
                await ƒS.update(2);
                await ƒS.Location.show(rpgbackgrounds.BG_ventureoutfurther);
                await ƒS.update(2);
                break;
            default:
                await ƒS.Speech.tell(rpgCharacters.text, "Somehow, you wound up in the default option. Curious. Try again.");
                break;
        }

        let buttonBack = {
            dec_BACK: "Back"
        };

        await ƒS.Menu.getInput(buttonBack, "individualCSSClass");
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