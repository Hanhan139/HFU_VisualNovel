namespace VNamespace{
    
    export async function scn_Day2_n():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Testszene2");
        await ƒS.Location.show(backgrounds.BG_Day2n);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "Day 02n.");
        
        //BRANCHING PATH

        let firstDialogueElementOptions = {
            dia_Yes: "Yes.",
            dia_No: "No."
          };
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");

        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_Yes:
              await ƒS.Speech.tell(characters.catblob, "Choice yes.");
              return scn_Day3_ny();
              break;
            case firstDialogueElementOptions.dia_No:
              await ƒS.Speech.tell(characters.catblob, "Choice no.");
              return scn_Day3_nn();
              //return scn_Day2_n();
              break;
          }

    }
}