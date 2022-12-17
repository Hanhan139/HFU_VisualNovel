namespace VNamespace{
    
    export async function scn_Fud01_Inst():ƒS.SceneReturn {
        
        console.log("FUDGEEEEEEEE");
        ƒS.Speech.setTickerDelays(20, 2);

        await ƒS.Location.show(backgrounds.BG_01_test);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge); //NO TRNSITION YET
        await ƒS.Character.show(characters.catblob, characters.catblob.pose.normal, ƒS.positions.center); //position ƒS.positions.bottomcenter ODER ƒS.positionPercent(30, 100)
        await ƒS.update(1);
        // Animationen parallel abspielen
        await ƒS.Speech.tell(characters.catblob, text.catblob.T0000, true);
    
        await ƒS.Speech.tell(characters.catblob, "Hi2."); //entweder vordefiniert, oder so hingeschrieben
        // await animationDone;
        // await animationDone2;
        await ƒS.Character.hide(characters.catblob);

        await ƒS.Character.show(characters.catblob2, characters.catblob2.pose.normal, ƒS.positions.bottomcenter); //riem fragen
    
        let firstDialogueElementOptions = { //selbst benennen Firstdialogblob
          iSayOk: "Cat.",
          iSayYes: "Cats.",
          iSayNo: "Cattsss."
        };
    
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); //bedeutet:
        //in novel siehst du fenster, kannst elemente klicken, hier iwrd es aufgerufen
        //in css stylen (individualCSSClass)
    
        switch (firstDialogueElement) {
          case firstDialogueElementOptions.iSayOk:
            await ƒS.Speech.tell(characters.catblob, "Cat is neat.");
            // return "Ende";
            break;
          case firstDialogueElementOptions.iSayYes:
            await ƒS.Character.hide(characters.catblob);
            await ƒS.Location.show(backgrounds.BG_02_test);
            await ƒS.Speech.tell(characters.catblob, "Cats has been chosen.");
            ƒS.Character.animate(characters.catblob, characters.catblob.pose.sleepy, anim_testanim());
            await ƒS.Character.show(characters.catblob2, characters.catblob2.pose.normal, ƒS.positions.bottomleft);
            await ƒS.Speech.tell(characters.catblob, "Shown sleepy blob.");
            break;
          case firstDialogueElementOptions.iSayNo:
            //dataForSave.points += 10;
            await ƒS.Speech.tell(characters.catblob, "We said nay and change the scene");
            await ƒS.Character.hide(characters.catblob2);
            return scn_testscene_copy();
            break;
        }
        
        await ƒS.Speech.tell(characters.catblob, "Thank you human!");
    
        ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    
        ƒS.Character.hideAll();
        await ƒS.update(1);
    }
}