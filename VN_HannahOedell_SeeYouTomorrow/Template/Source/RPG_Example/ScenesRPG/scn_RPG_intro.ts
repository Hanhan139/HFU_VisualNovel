namespace VNamespace {
    
    export async function scn_RPG_intro(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("RPG INTROOOOOOOO");

        // await fun_PrintBlockSpeech(rpgDiaCamp.companionDialogue.amie.greeting);

        // await ƒS.Location.show(locations.BG_PC_FUDGE);
        // await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        
        // await ƒS.Speech.tell(RPGcharacters.text, "You enter a portal. Swoosh. it only goes one way. Welcome to a quick self contained tutorial. The code for this is in the RPG_Example folder.");
        // await ƒS.Speech.tell(RPGcharacters.text, "I split my files into the actual scenes, and into the resources, or definitions as I called them.");
        // await ƒS.Speech.tell(RPGcharacters.text, "You don't have to. You, in theory, can have all of that stuff in one file.");
        // await ƒS.Speech.tell(RPGcharacters.text, "You can also do so in practice. In fact, a buncha people do so in practice.");
        // await ƒS.Speech.tell(RPGcharacters.text, "I've SEEN mains...so long...brrrrr. I just sort stuff. Personal preference. But, no matter how, it's always a good idea to keep your code clean and understandable for you.");
        // await ƒS.Speech.tell(RPGcharacters.text, "Try using comments and notes in your code to remind you what certain things do.");
        // //THIS is a comment. Hiiii. No one said it was a useful comment though. Really, I could have written anything else.
        // await ƒS.Speech.tell(RPGcharacters.text, "So, let's start this mostly self-contained little RPG example that should help you a bit with switching scenes and choices and that stuff. ADVENTURE!!!");
        return scn_RPG_camp();
    }
}