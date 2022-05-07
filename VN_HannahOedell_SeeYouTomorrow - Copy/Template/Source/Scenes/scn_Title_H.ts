namespace Template{
    
    export async function scn_Title_H():ƒS.SceneReturn { //Fs. um fudge story funktionen aufzurufen
        
        console.log("Title H");
        await ƒS.Location.show(locations.BG_Title2);
        await ƒS.update(1, "./Assets/Transitions/TR_dots_default.png", 1);
        await ƒS.Speech.tell(characters.catblob, "Be honest with yourself. You are aware of it all. It will go on like this. Maybe you can push it a little one direction or the other, but it's the same old song since grade school- it's always the same. An endless loop. Have fun trying to make something out of it.");

        return scn_Day1_H();

    }
}