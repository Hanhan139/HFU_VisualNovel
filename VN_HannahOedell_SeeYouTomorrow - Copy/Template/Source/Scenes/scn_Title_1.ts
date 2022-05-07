namespace Template{
    
    export async function scn_Title_1():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Title C");
        await ƒS.Location.show(locations.BG_Title1);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "See you tomorrow~ <3");
        
        let firstDialogueElementOptions = {
            dia_SeeU: "See you tomorrow",
          };
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");

        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_SeeU:
              break;
          }

        return scn_Day1_1();

    }
}