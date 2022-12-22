namespace VNamespace {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Fudge Story Template starting");

  export let dataForSave = {
    nameProtagonist: "",
    points: 0,
    scoreeyyy: 9,
    varHadTea: false
    // started: false,
    // ended: false
  };

  // **** CREDITS ****
  export function showCredits(): void {
    ƒS.Text.setClass("class2");
    ƒS.Text.print("Creditssssss");
  }

  // **** MENÜ ****

  // Buttons
  let inGameMenuButtons = {
    save: "Save",
    load: "Load",
    close: "Close",
    credits: "Credits"
  };

  let gameMenu: ƒS.Menu;

  // true = offen; false = geschlossen
  let menuIsOpen: boolean = true;
  let inventoryIsOpen: boolean = false;

  async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        showCredits();
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
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        }
        else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.I:
        console.log("Inventory");
        if (inventoryIsOpen) {
          console.log("Inventory Close");
          ƒS.Inventory.close();
          inventoryIsOpen = false; // wenn ich m drücke, und das menu geöffnet is, schließe das menu. wenn es offen ist:
        } else {
          console.log("Inventory Open");
          ƒS.Inventory.open();
          inventoryIsOpen = true;
        }
        break;
    }
  }

  // Szenenstruktur
  window.addEventListener("load", start);
  function start(_event: Event): void {
    // Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    // Menü zu Beginn geschlossen halten

    //ADD STUFF FROM THE BEGINNING TO INVENTORY
    ƒS.Inventory.add(inventory.apple);
    let x = 0;
    while (x <= 6){
      ƒS.Inventory.add(inventory.catblob);
      x++;
    }
    //await ƒS.Inventory.open;

    buttonFunctionalities("Close");
    let scenes: ƒS.Scenes = [ //Hier wird auf meine szenen verwiesen // Linear
      { scene: scn_Title_1, name: "A new day, a new try." }
      //{ scene: scn_testscene, name: "Test test 123" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}