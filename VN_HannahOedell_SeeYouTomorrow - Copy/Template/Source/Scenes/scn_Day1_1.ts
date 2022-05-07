namespace Template{
    
    export async function scn_Day1_1():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

      await ƒS.Location.show(locations.BG_Day1_1);
      await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);

        console.log("Scene Day 01");
        await ƒS.Speech.tell(characters.catblob, "Day 01 bgtest.");

        let firstDialogueElementOptions = { //selbst benennen Firstdialogblob
            dia_Yes: "Yes.",
            dia_No: "No."
          };
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass"); //bedeutet:
        //in novel siehst du fenster, kannst elemente klicken, hier iwrd es aufgerufen
        //in css stylen (individualCSSClass)

        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_Yes:
              await ƒS.Speech.tell(characters.catblob, "Choice yes.");
              return scn_Day2_y();
              break;
            case firstDialogueElementOptions.dia_No:
              await ƒS.Speech.tell(characters.catblob, "Choice no. Scene change initiated.");
              return scn_Day2_n();
              //return scn_Day2_n();
              break;
          }
    }
}