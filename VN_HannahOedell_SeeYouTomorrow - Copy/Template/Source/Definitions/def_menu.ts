namespace Template{
    //  MENU - Audio functions

    let volume: number = 1.0;

    export function incrementSound(): void {
        if (volume >= 100)
            return;
    volume += 0.5;
    ƒS.Sound.setMasterVolume(volume);
    }

    export function decrementSound(): void {
    if (volume <= 0)
        return;
    volume -= 0.5;
    ƒS.Sound.setMasterVolume(volume);
    }


// Menü 

export let inGameMenu = {
  save: "Save",
  load: "Load",
  close: "Close",
  turnUpVolume: "+",
  turnDownVolume: "-"
  // open: "Open"
};


export let gameMenu: ƒS.Menu;

// true = offen; false = geschlossen
export let menu: boolean = true;

export async function buttonFunctionalities(_option: string): Promise<void> {
  console.log(_option);
  switch (_option) {
    case inGameMenu.save:
      await ƒS.Progress.save();
      break;
    case inGameMenu.load:
      await ƒS.Progress.load();
      break;
    case inGameMenu.close:
      gameMenu.close();
      menu = false;
      break;
    case inGameMenu.turnUpVolume:
      incrementSound();
      break;
    case inGameMenu.turnDownVolume:
      decrementSound();
    // case inGameMenu.open:
    //   gameMenu.open();
    //   menu = true;
    //   break;
  }
}

// Shortcuts für's Menü
document.addEventListener("keydown", hndKeyPress);
async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
  switch (_event.code) {
    case ƒ.KEYBOARD_CODE.F8:
      console.log("Save");
      await ƒS.Progress.save();
      break;
    case ƒ.KEYBOARD_CODE.F9:
      console.log("Load");
      await ƒS.Progress.load();
      break;
    case ƒ.KEYBOARD_CODE.M:
      if (menu) {
        console.log("Close");
        gameMenu.close();
        menu = false;
      }
      else {
        console.log("Open");
        gameMenu.open();
        menu = true;
      }
      break;
  }
}
}