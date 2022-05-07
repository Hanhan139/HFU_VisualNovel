namespace Template{
    
    export async function scn_Day2_y():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Day 02 Y");
        await ƒS.Location.show(locations.BG_Day2y);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "Day 02y.");
        await ƒS.Speech.tell(characters.catblob, "Waiting for next decision.");
        
        //hier kommt meine szene rein
        
        let firstDialogueElementOptions = {
            dia_Yes: "Yes.",
            dia_No: "No."
          };
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");

        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_Yes:
              await ƒS.Speech.tell(characters.catblob, "Yes.");
              return scn_Day3_yy();
              break;
            case firstDialogueElementOptions.dia_No:
              await ƒS.Speech.tell(characters.catblob, "No.");
              return scn_Day3_ny();
              break;
          }

    }
}