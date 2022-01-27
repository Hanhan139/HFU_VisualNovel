namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Fudge Story Template starting");

  export let dataForSave = {
    nameProtagonist: "",
    points: 0
    // started: false,
    // ended: false
  };

// Szenenstruktur
window.addEventListener("load", start);
function start(_event: Event): void {
  // Menü
  gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
  // Menü zu Beginn geschlossen halten
  buttonFunctionalities("Close");
  let scenes: ƒS.Scenes = [ //Hier wird auf meine szenen verwiesen
    // Linear
    // { id: "Einführung", scene: Introduction, name: "Introduction to FS", next: "Ende"},
    { scene: scn_testscene, name: "Test test 123" },
    //{ scene: scn_testscene2, name: "NAY 2 2 2" },
    // { scene: Scene2, name: "Scene Two" }
    // { id: "Ende", scene: End, name: "The End" }
  ];

  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

  // start the sequence
  ƒS.Progress.go(scenes);
}

}