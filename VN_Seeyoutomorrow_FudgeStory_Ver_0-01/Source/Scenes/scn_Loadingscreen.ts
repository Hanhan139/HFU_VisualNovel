namespace VNamespace{

    export async function scn_Loading():ƒS.SceneReturn {

        await func_SpringCleaning();
        await ƒS.Speech.hide();
        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(1);

        let loadingTime = func_RandomNumberTen();
        let displayLoadingFrame = 0;
        let displayLoadingPath;

        console.log("...Loading...");
        console.log(loadingTime);

        for (let x:number = 0; x < (loadingTime*2); x++){
            //console.log(x)

            if (displayLoadingFrame >= 12){
                displayLoadingFrame = 0;
            };

            switch (displayLoadingFrame) {
                case 0:
                    displayLoadingPath = BG_loading.screen0;
                break;
                case 1:
                    displayLoadingPath = BG_loading.screen1;
                break;
                case 2:
                    displayLoadingPath = BG_loading.screen2;
                break;
                case 3:
                    displayLoadingPath = BG_loading.screen3;
                break;
                case 4:
                    displayLoadingPath = BG_loading.screen4;
                break;
                case 5:
                    displayLoadingPath = BG_loading.screen5;
                break;
                case 6:
                    displayLoadingPath = BG_loading.screen6;
                break;
                case 7:
                    displayLoadingPath = BG_loading.screen7;
                break;
                case 8:
                    displayLoadingPath = BG_loading.screen8;
                break;
                case 9:
                    displayLoadingPath = BG_loading.screen9;
                break;
                case 10:
                    displayLoadingPath = BG_loading.screen10;
                break;
                case 11:
                    displayLoadingPath = BG_loading.screen11;
                break;
                default:
                    displayLoadingPath = BG_loading.screen0;
                break;
            };

            await ƒS.Location.show(displayLoadingPath);
            await ƒS.update(0.3);

            displayLoadingFrame++;
        }

        ƒS.Sound.play(sound.SFX.confirm1, 0.5, false);

        await ƒS.Location.show(backgrounds.BG_Black);
        await ƒS.update(1);

        return;

    }
}