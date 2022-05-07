namespace Template{
    
    export async function scn_testscene_copy():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Testszene");
        
        //hier kommt meine szene rein
           
        let text = {
          narrator: {
            T0000: "<p>Ich bin der Narrator.</p>",
            T0001: ""
          },
          catblob: {
            T0000: "NYYAHAHAHAHAHAHA",
            T0001: "Nya Toooo1 twos fshgsgsg"
          }
        };
    
        // test: `test ${123} klappt`
        // Textgeschwindigkeit
        //ƒS.Speech.setTickerDelays(20, 2);
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true); //erste zahl lautstärke, zweite t fadein //true = loop
    
        // let animationDone: Promise<void> = ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToLeft());
        // let animationDone2: Promise<void> = ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToOutOfCanvas());
        
        //  Name field
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);
    
    
        await ƒS.Location.show(locations.BG_01_test);
        await ƒS.update(transitions.puzzle.duration, transitions.puzzle.alpha, transitions.puzzle.edge); //NO TRNSITION YET
        await ƒS.Character.show(characters.catblob, characters.catblob.pose.normal, ƒS.positions.center); //position ƒS.positions.bottomcenter ODER ƒS.positionPercent(30, 100)
        await ƒS.update(1);
        // Animationen parallel abspielen
        await ƒS.Speech.tell(characters.catblob, text.catblob.T0000, true);
        //await ƒS.Speech.tell(characters.catblob, text.catblob.T0000, false); //what iws that false?
        //dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        //console.log(dataForSave.nameProtagonist);
        //await ƒS.Speech.tell(characters.catblob, text.catblob.T0000 + dataForSave.nameProtagonist);
        // LOOP Animations
        // await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToLeft());
        // await ƒS.Character.animate(characters.aisaka, characters.aisaka.pose.happy, fromRightToOutOfCanvas());
    
        // Inventar
        // ƒS.Inventory.add(items.pen);
        // await ƒS.Inventory.open(); 
    
    
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
            await ƒS.Location.show(locations.BG_02_test);
            await ƒS.Speech.tell(characters.catblob, "Cats has been chosen.");
            ƒS.Character.animate(characters.catblob, characters.catblob.pose.sleepy, anim_testanim());
            await ƒS.Character.show(characters.catblob2, characters.catblob2.pose.normal, ƒS.positions.bottomleft);
            await ƒS.Speech.tell(characters.catblob, "Shown sleepy blob.");
            break;
          case firstDialogueElementOptions.iSayNo:
            //dataForSave.points += 10;
            await ƒS.Speech.tell(characters.catblob, "We said nay and change the scene");
            await ƒS.Character.hide(characters.catblob2);
            return scn_testscene2();
            break;
        }
        
        await ƒS.Speech.tell(characters.catblob, "Thank you human!");
    
        ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    
        ƒS.Character.hideAll();
        await ƒS.update(1);
    
        // if (dataForSave.points === 100) {
        //   return End();
        // }
    
        // return "Ende";
        // return End();
    }
}