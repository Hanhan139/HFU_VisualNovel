namespace Template{
    
    export async function scn_Title_M():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Title M");
        await ƒS.Location.show(locations.BG_Title2);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "Well, just a day like any other.");

        return scn_Day1_M();

    }
}