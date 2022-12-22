namespace VNamespace{
    
    export async function scn_Intro():ƒS.SceneReturn {
        
        con_Introduction1();

        //Springcleaning
        await func_SpringCleaning();

        //Actual Scene
        console.log("Entered Scene: Introduction");

        ƒS.Sound.fade(sound.music.intro, 0.3, 5, true); //erste zahl lautstärke, zweite t fadein //true = loop

        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.Speech.clear;        
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.HER, "I'll see you tomorrow!");

        func_speechWithAudio();
        func_speechWithAudio("123456789HAFSGHSDJHXJKLOIUZTRTZUIUZRFGJHXNSICS((((((((Z7zchvgjthj");
        
        let diaIntroOpt = {
            dia_SeeU: "See you tomorrow",
          };
          let diaIntro = await ƒS.Menu.getInput(diaIntroOpt, "individualCSSClass");
      
          switch (diaIntro) {
            case diaIntroOpt.dia_SeeU:
                ƒS.Sound.play(sound.SFX.confirm1, 0.5, false);
              break;
          }
        
        await ƒS.Speech.clear();
        await ƒS.Speech.hide();
        await ƒS.Sound.fade(sound.music.intro, 0, 3, false);
        await ƒS.update(3);
        
        await func_FadeOut();

        return scn_Loading();
    }
}