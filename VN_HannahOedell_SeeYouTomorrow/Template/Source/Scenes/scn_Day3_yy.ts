namespace VNamespace{
    
    export async function scn_Day3_yy():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Day 03 yy");
        await ƒS.Location.show(locations.BG_Day3yy);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "Day 03yy.");
        
        await ƒS.Speech.tell(characters.catblob, "Yes. Yes I do. Yes I need to. I should. Everyone else can. CONSUMED ending. Who you are is unclear. Redirecting you.");
        return scn_Title_C();
    }
}