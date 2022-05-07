namespace VNamespace{
    
    export async function scn_Day1_C():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Ending C");
        await ƒS.Location.show(locations.BG_Day1_C);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "CONSUMED.");

        return scn_Title_1();
    }
}