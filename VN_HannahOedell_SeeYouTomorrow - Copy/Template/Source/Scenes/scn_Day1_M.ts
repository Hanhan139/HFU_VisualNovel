namespace Template{
    
    export async function scn_Day1_M():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Ending M");
        await ƒS.Location.show(locations.BG_Day1_M);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "MIXED.");

        return scn_Title_1();
    }
}