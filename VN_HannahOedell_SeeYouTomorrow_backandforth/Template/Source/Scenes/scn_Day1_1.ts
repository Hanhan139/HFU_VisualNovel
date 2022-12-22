namespace VNamespace {

  export async function scn_Day1_1(): ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen

    await ƒS.Location.show(locations.BG_Day1_1);
    await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);

    console.log("Scene Day 01");
    await ƒS.Speech.tell(characters.catblob, "Day 01 bgtest.");

    dataForSave.scoreeyyy += 1;
    dataForSave.nameProtagonist = await ƒS.Speech.getInput();
    console.log(dataForSave.nameProtagonist);

    let z = 0;
    let y = 10;
    while (y > 0) {
      z = func_RandomNumber();
      console.log(z);
      y -= 1;
      //ignore this this just me printing a buncha numbers to test n see what I get; Z ends up being a number with two digits and a bunch of .4z2i525673ssssss
    }

    switch (z) {
      case 0:
        await ƒS.Speech.tell(characters.catblob, "EYOOOO 0");
        break;
      case 1:
        await ƒS.Speech.tell(characters.catblob, "We are number one.                                              HEY!");
        break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        await ƒS.Speech.tell(characters.catblob, "Over 9(thousand)");
        break;
      default:
        await ƒS.Speech.tell(characters.narrator, "Well it gonna be hard to get INTo those cases with a float, eh?");
        break;
    }

    let firstDialogueElementOptions = { //selbst benennen Firstdialogblob
      dia_Yes: "Yes.",
      dia_No: "No."
    };
    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementOptions, "CssChoices"); //bedeutet:

    //await ƒS.Speech.tell(characters.narrator, dataForSave.scoreeyyy);

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