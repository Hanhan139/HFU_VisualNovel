namespace VNamespace{
    
    export async function scn_Day3_ny():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Day 03 ny");
        await ƒS.Location.show(backgrounds.BG_Day3yn);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "Day 03ny.");
        
        await ƒS.Speech.tell(characters.catblob, "MIXED ending. Who you are is unclear. Redirecting you.");
        return scn_Title_M();
    }
}