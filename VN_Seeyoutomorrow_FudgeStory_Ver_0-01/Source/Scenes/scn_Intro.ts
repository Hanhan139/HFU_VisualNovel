namespace VNamespace{
    
    export async function scn_Intro():ƒS.SceneReturn {
        
        con_Introduction1();

    //Springcleaning
        await func_SpringCleaning();

        // await ƒS.Location.show(backgrounds.BG_Fade);    
        // await ƒS.update(1);

        //ƒS.Character.show(characters.HER, characters.HER.pose.default_normal, ƒS.positions.bottomcenter);
        //await ƒS.Character.animate(characters.HER, characters.HER.pose.default_happy, anim_colorChangeBlackIn());
        //await ƒS.Character.animate(characters.HER, characters.HER.pose.default_happy, anim_colorChangeBlackIn());

    //Actual Scene
        console.log("Entered Scene: Introduction");
        let nameStorage = characters.HER.name;

        ƒS.Sound.fade(sound.music.intro, 0.5, 5, true); //erste zahl lautstärke, zweite t fadein //true = loop

        await ƒS.Location.show(backgrounds.BG_Black);    
        await ƒS.update(1);

        characters.HER.name = "? ? ?";

    //---- Intro dialogue ------ ///
    
        await ƒS.Speech.tell(characters.HER, "...all things considered, I think it played out better than expected.");
        await ƒS.Speech.clear();
        await ƒS.Speech.hide();

        //ƒS.Character.show(characters.HER, characters.HER.pose.default_normal, ƒS.positions.bottomcenter);
       //ƒS.update(0.5);

        await ƒS.Location.show(backgrounds.BG_Intro_Night1);    
        await ƒS.update(3, transitions.fade.alpha, 0.05);
        await ƒS.Location.show(backgrounds.BG_Intro_Night2);    
        await ƒS.update(2, transitions.black.alpha, 0.05);
        
        await ƒS.Speech.tell(characters.HER, "Now, the only thing that’s left before I leave you, is…");
        await ƒS.Speech.clear();
        await ƒS.Speech.hide();
        await ƒS.update(1);

        await ƒS.Location.show(backgrounds.BG_Intro_Night3);    
        await ƒS.update(3, transitions.dotscrollRL.alpha, 0.5);

        await ƒS.Character.animate(
          characters.HER, characters.HER.pose.default_happy, anim_fadeInFromBlack());

        await ƒS.update(0.1);

        await ƒS.Location.show(backgrounds.BG_Intro_Night4);    
        await ƒS.update(1, transitions.fade.alpha, 0.05);
        await ƒS.Location.show(backgrounds.BG_Intro_Night5);    
        await ƒS.update(1, transitions.fade.alpha, 0.05);

        await ƒS.Speech.tell(characters.HER, "BANNING you!!!");

        await ƒS.Location.show(backgrounds.BG_Intro_Night6);    
        await ƒS.update(3, transitions.fade.alpha, 0.05);

        await ƒS.Character.hideAll();
        await ƒS.Character.animate(characters.HER, characters.HER.pose.default_happy, anim_colorChangeBlackIn());

        await ƒS.Speech.tell(characters.HER, "Banning you from staring onto your screen until 3AM!!!");

        let diaIntroOptReply1 = {
            dia_opt_1: "I would never~",
          };
        let diaIntroReply1 = await ƒS.Menu.getInput(diaIntroOptReply1, "individualCSSClass");
      
        switch (diaIntroReply1) {
            case diaIntroOptReply1.dia_opt_1:
                ƒS.Sound.play(sound.click, 1, false);
              break;
          };
        
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.HER, characters.HER.pose.default_normal, ƒS.positions.bottomcenter);
        await ƒS.update;
        
        await ƒS.Speech.tell(characters.HER, 
          "Oh really? Never?");
        await ƒS.Speech.tell(characters.HER,
          "Come on. We have known each other forever, you lunatic. You'll need an extra hour to fall asleep.");
        await ƒS.Speech.tell(characters.HER,
          "Please get to bed in time, ok? At least today. Promise?");
        await ƒS.Speech.tell(characters.HER, 
          ". . . Tcheehee~");
        
        let diaIntroOptReply2 = {
            dia_opt_1: "...What?",
          };
        let diaIntroReply2 = await ƒS.Menu.getInput(diaIntroOptReply2, "individualCSSClass");
      
        switch (diaIntroReply2) {
            case diaIntroOptReply2.dia_opt_1:
                ƒS.Sound.play(sound.click, 0.2, false);
              break;
          };
        
        await ƒS.Speech.tell(characters.HER, 
           "If this was a visual novel, that’d be what the main love interest says. You know? The default vanilla childhood friend, who cares for the main character like family? Rimuri told us they fall into one of the twelve archetypes.");
        
        let diaIntroOptReply3 = {
            dia_opt_1: "Oh! Yeah, I sometimes like those characters~",
            dia_opt_2: "Urgh. ...Yeah, the boring option.",
            dia_opt_3: "Not even in the main game yet and already attempting to break the fourth wall? Ballsy.",
          };
        let diaIntroReply3 = await ƒS.Menu.getInput(diaIntroOptReply3, "CssChoicesIntro");
        
        await ƒS.Speech.hide();
        characters.HER.name = nameStorage;

        switch (diaIntroReply3) {
            case diaIntroOptReply3.dia_opt_1:
                await ƒS.Sound.play(sound.SFX.confirm1, 0.2, false);
              break;
            case diaIntroOptReply3.dia_opt_2:
                await ƒS.Sound.play(sound.SFX.confirm1, 0.2, false);
              break;
            case diaIntroOptReply3.dia_opt_3:
                await ƒS.Sound.play(sound.SFX.confirm1, 0.2, false);

                await ƒS.Speech.tell(characters.HER, 
                  "No wall will ever stop me! To sedenions and beyond!!!");
                await ƒS.Speech.tell(characters.HER, 
                  "Hey, we both know cheap tricks and references won’t make this a more likeable experience.");
                await ƒS.Speech.tell(characters.HER, 
                  "But perhaps it will make someone, who happens to like these things, happy for a moment~");
              break;
            default:
                await ƒS.Sound.play(sound.SFX.confirm1, 0.2, false);
              break;  
          };
        
        await ƒS.Speech.tell(characters.HER, 
         "*Chuckle~*");
        await ƒS.Speech.tell(characters.HER, 
         "I happen to like a LOT of vanilla things~ Including bourbon vanilla extract in my hot chocolate!");
        await func_speechWithAudio(characters.HER.name, 
         ". . .");
        await ƒS.Speech.tell(characters.HER, 
         "People...tend to get quite dismissive about each other’s preferences, don’t they?...");
        await ƒS.Speech.tell(characters.HER, 
         "No exception here - I used to think the normal options are the pinnacle of boring.");
        await ƒS.Speech.tell(characters.HER, 
         "But recently, I’ve been wondering...");
        await ƒS.Speech.tell(characters.HER, 
         "...");
        await ƒS.Speech.tell(characters.HER, 
         "     ");
        await ƒS.Speech.tell(characters.HER, 
         "Maybe I wouldn't mind being the normal option sometimes...");
        await func_speechWithAudio(characters.HER.name, 
         "...  ", "", 200);
        await ƒS.Speech.tell(characters.HER, 
         "     ");
        await func_speechWithAudio(characters.HER.name, 
         ". . .  ", "", 200);
        await ƒS.Speech.tell(characters.HER, 
         "     ");
        await func_speechWithAudio(characters.HER.name, 
         ".  .  .   ", "", 200);
        await ƒS.Speech.tell(characters.HER, 
         "     ");
        await func_speechWithAudio(characters.HER.name, 
         ".   .   .    ", "", 40);
        await ƒS.Speech.tell(characters.HER, 
         "!!!");
        ƒS.Sound.play(sound.voices.default[10], 1, false);
        await ƒS.Speech.tell(characters.HER, 
          "AAAH, I'm keeping you again.");
        await ƒS.Speech.tell(characters.HER, 
          "You have to get to sleep soon, right? Right. No time to segue off screen like the present!");
        await func_speechWithAudio(characters.HER.name, 
         "...   ", "", 100);
        await func_speechWithAudio(characters.HER.name, 
         ". . .     ", "", 100);
        await ƒS.Speech.tell(characters.HER, 
         "…good night~");
         await ƒS.Speech.tell(characters.HER,
          "I l  ", false);
        await ƒS.Speech.tell(characters.HER,
          "I'll See you tomorrow!", false);
  
        // await func_speechWithAudio("It occured to me that this task might not be as easy as it seemed.");
        // await func_speechWithAudio("Fuck this!!!!", characters.HER.name, "CHAOS", 200);
        // await func_speechWithAudio("Look at it...", characters.HER.name, "HER");
        // await func_speechWithAudio("...it's COMPLETELY off the rails.", characters.HER.name, "HER");
        // await func_speechWithAudio("I JUST wanted to have a little bit of noise here and there but then there's all these problems with", characters.HER.name, "HER");
        // await func_speechWithAudio("await and asynchronous functions and not being able to adjust things on my own...", characters.HER.name, "HER");
        // await func_speechWithAudio("HOW IN THE WORLD AM I SUPPOSED TO MAKE THIS WORK??? AAAAAAA-", characters.HER.name, "CHAOS", 70);
        
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
        
        await func_FadeOut();

        return scn_Loading();
    }
}