namespace VNamespace{
    
    export async function scn_Title_C():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Title C");
        await ƒS.Location.show(locations.BG_Title2);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "Consumed. Consumed. Consumed. You. Need. To. Work. You don't have any time for this. It is nonsense. Just function. Just focus. Just do it.");

        return scn_Day1_C();

    }
}