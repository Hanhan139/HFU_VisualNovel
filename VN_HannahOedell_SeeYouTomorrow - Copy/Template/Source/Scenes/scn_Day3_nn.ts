namespace Template{
    
    export async function scn_Day3_nn():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Day 03 nn");
        await ƒS.Location.show(locations.BG_Day3nn);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "Day 03nn.");
        
        await ƒS.Speech.tell(characters.catblob, "NO no no no.... HONEST ending. I don't want this, I don't want you, i don't want her i don't...");
        return scn_Title_H();

    }
}