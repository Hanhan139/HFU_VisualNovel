namespace VNamespace{
    // Animationen
    
    export function fromRightToOutOfCanvas(): ƒS.AnimationDefinition {
        return {
        start: { translation: ƒS.positionPercent(30, 100) },
        end: { translation: ƒS.positionPercent(120, 100) },
        duration: 1,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    };

    export function fromRightToLeft(): ƒS.AnimationDefinition {
        return {
        start: { translation: ƒS.positions.bottomright },
        end: { translation: ƒS.positions.bottomleft },
        duration: 1,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    };

    export function anim_testanim(): ƒS.AnimationDefinition {
        return {
            start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.5) },
            end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
            duration: 8,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        }
    };

}