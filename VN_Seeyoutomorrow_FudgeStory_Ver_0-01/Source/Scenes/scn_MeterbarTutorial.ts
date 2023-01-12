namespace VNamespace{
    
    export async function scn_Meterbar():ƒS.SceneReturn {
        
        console.log("Meterbar");

        document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForAisaka").style.display = "none";

        await ƒS.Location.show(backgrounds.BG_PC_FUDGE);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.HER, "Love-O-Meter!!!");
        
        //BRANCHING PATH

        let firstDialogueElementOptions = {
            dia_Yes: "Yes.",
            dia_No: "No."
          };
        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "individualCSSClass");

        document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = false);


        switch (firstDialogueElement) {
            case firstDialogueElementOptions.dia_Yes:
              dataForSave.aisakaScore += 50;
              await ƒS.Speech.tell(characters.HER, "Choice yes.");
              break;
            case firstDialogueElementOptions.dia_No:
              dataForSave.aisakaScore += 10;
              await ƒS.Speech.tell(characters.HER, "Choice no.");
              break;
          }

          let text = {
            Aisaka: {
              T0000: "Wie du vielleicht bemerkt hast, gibt es in Visual Novels häufig eine Skala oder eine Meterbar.",
              T0001: "Damit visualisieren Autoren dem Spieler zum Beispiel die Empathie-Punkte bei der jeweiligen Figur.",
              T0002: ""
            }
          };
      
          ƒS.Speech.hide();
          dataForSave.aisakaScore += 50;
          console.log(dataForSave.aisakaScore);
          await ƒS.Location.show(backgrounds.BG_Fade);
          ƒS.update(transitions.fade.duration, transitions.fade.alpha, 0.1);
          await ƒS.Speech.tell(characters.HER, text.Aisaka.T0000);
          dataForSave.aisakaScore -= 40;
          await ƒS.Speech.tell(characters.HER, text.Aisaka.T0001);
          await ƒS.Location.show(backgrounds.BG_Canvas);
          await ƒS.update(3);
          dataForSave.aisakaScore += 50;
          await ƒS.Speech.tell(characters.HER, "Hihihi... that's it~");
          await ƒS.Speech.hide();
          console.log(dataForSave.aisakaScore);

    }
}