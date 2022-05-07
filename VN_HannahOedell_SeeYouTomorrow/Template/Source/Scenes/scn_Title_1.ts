namespace VNamespace {

  export async function scn_Title_1(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

    //DEBUG MENU START ---------------------

    let DiaDebug = { //selbst benennen Firstdialogblob
      // dia_Continue: "Continue the normal Days.",
      // dia_CurrentTest: "Currently being tested:",
      // dia_Testscene: "Testscene. The one with the cats.",
      dia_CampCamp: "RPG FUDGE BOOTCAMP!",
    };
    let firstDiaDebug = await ƒS.Menu.getInput(DiaDebug, "CssChoices");

    switch (firstDiaDebug) {
      // case DiaDebug.dia_Continue:
      //   await ƒS.Speech.tell(characters.catblob, "Continuing to main Files.");
      //   return scn_Day1_1();
      //   break;
      // case DiaDebug.dia_CurrentTest:
      //   await ƒS.Speech.tell(characters.catblob, "Choice no. Scene change initiated.");
      //   return scn_Fud01_Inst(); //CURRENTLY TESTED SCENE HERE <- <- <-<.<.<..<.<.<<.<.<.<.<<.<
      //   break;
      // case DiaDebug.dia_Testscene:
      //   return scn_testscene();
      //   break;
      case DiaDebug.dia_CampCamp:
        return scn_RPG_intro();
        break;
      default:
        return scn_Day1_1();
    }

    //DEBUG MENU END ---------------------

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