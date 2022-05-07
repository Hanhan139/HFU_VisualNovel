namespace VNamespace {
  //Dialogue Companions at Camp
  export let RPGdia_Camp = {
    default: {
      T_default: "O w O"
    },
    
    description01: {
      T_00000: "Your gaze wanders over your campsite.",
      T_00001: "Three tents nest in safe distance to a cozy communal campfire. Its warm, flickering light a welcome change of pace to the constant, blood red gloom from the skies above you.",
      T_00003: "The vast plains don't offer much in the ways of cover, and the dark forest looms in the distance, an impenetrable thicket. Not disclosing what creatures could have set their sights on you.",
      T_00005: "It might feel a little unsafe to set up base on entirely open terrain. With the giant, loudly buzzing portal next to the camp, you aren't exactly hard to spot.",
      T_00006: "...Not that that is of any concern to you. After all, no enemies have been added to the code.",
      T_00008: "...",
      T_00009: "...yet.",
    },

    description02: {
      T_00000: "Your gaze wanders over your campsite.",
      T_00001: "Three tents circle a cozy communal campfire. Its warm, flickering light a welcome change of pace to the constant gloom of the blood red skies above you.",
      T_00002: "Red skies, a one-way portal, strangely forthcoming companions who just trust you despite your lack of experience...",
      T_00003: "Something about this plot seems familiar, but if it doesn't, you get the feeling you shouldn't look it up. It is better this way. Trust me.",
    },

    description03: {
      T_00000: "Your gaze wanders over your campsite.",
      T_00001: "A little lost in thought, you take a closer look at the .ts files.",
      T_00002: "You noticed that the descriptions of the camp change on occasion. That is because a randomized value between 1 and 3 is generated each time you enter this scene.",
      T_00004: "Using that value, the code alters through the three pre-prepared dialogues, using a switch case.",
      T_00006: "There's probably a badgillion better ways to solve this, but eh. Go and test things yourself, google some typescript stuff, experiment, and have fun!",
      T_00008: "...and hey, if you like my sketches, consider commissioning me for a sketched headshot or two! Shameless self plug here, I know, hehehehe. Anyways, camp! Here, have your dialogue choice options:",
    },
    
    presence: {
      
      goneAturia: {
        T_at_gone_0000: "Aturia's tent is empty, and she doesn't seem to be on the training grounds.Her monstrous battleaxe isn't anywhere to be seen either. She must have ventured out for some practice.",
      T_at_gone_0002: "You aren't too worried about it though. The energetic dullahan is pretty good at keeping her head.",
      T_at_gone_0004: "...most of the time.",
      },
      homeAturia: {
        T_at_home_0000: "To your left you spot Aturia on the dusty training grounds, throwing punches at some imaginary foe with a prideful grin.",
        T_at_home_0001: "She seems too absorbed in her training to notice you. Or to converse with you. Or to even get more dialog lines.",
      },
      
      goneAmie: {
        T_am_gone_0000: "It's a little lonely around the campfire without the diligent ratfolk, but she'll probably return soon. Maybe you should check back later.",
        T_am_gone_0001: "...that means you should DEFINITELY check back. It's a random encounter with a 50/50 chance, you'll get here eventually champ.",
      },
      homeAmie: "Your attention caught by the warm scents of roasted chestnuts, you spot Amie tending to the campfire - And her dinner.",
    },

    companionDialogue: {
      amie: {
        greeting:{
          T0000: "Oh! Hi! Did you want to join me around the campfire?",
          T0001: "Please, sit down. Can I help you with something?",
        },
        talk:{
          T0000: "You want to talk a bit? Of course~ What do you want to talk about?",
          T0001: "Is there something else? Don't feel shy~",
        },
        howareyou: {
          T0000: "I'm doing fine, thank you!",
          T0001: "...although, my head is being a bit fuzzy lately. I have these strange thoughts...",
          T0002: "Call me crazy, but...",
          T0003: "I sometimes feel like all of this, us, everything, is just a reference to something else.",
          T0004: "Have you ever wondered: 'What if all of this isn't real'?",
          T0005: "What if all of this was just made in an engine that is still in development called FUDGE story,",
          T0006: "using suspciious runes and devilish languages like Typescriptan, Hypertextmarkupian, and Cascadingstylesheetsch,",
          T0007: "poorly executed by a novice to finish this by some doomsday date set by a higher entity while",
          T0008: "preparing their thesis and still trying to make something somewhat decent or helpful?",
          T0009: "...",
          T0010: "...on a computer that crashes randomly mid coding, writing or drawing, without warning, and no one can fix it?",
        }, //oddly specific
        work: {
          T0000: "Most of this scene is running in a while loop.",
          T0001: "Once we finished going through one dialogue tree, it starts over almost at the top.",
          T0002: "Just almost. Things like my greeting, me entry animation, and everything I am only supposed to do once in the beginning, is written above the loop.",
          T0003: "That means you can reread each option infinitely, but more importantly...",
          T0004: "...it means you can look it up in the code if this is something you'd need.",
          T0005: "It's all very basic, but since we have so many students with different background, it's good to give some basic options too.",
          T0006: "It can be incredibly hard to find your way through all of this if you are new to coding. But you can do it!",
        },
        commissions: {
          T0000: "Ah, let me pitch myself through this innocent NPC with another shameless self promotional dialogue!",
          T0001: "Fyoriosity, pleasure to meet you. I am naugt but your usual overly distractable wannabe-artist with a",
          T0002: "TASTE FOR CHAOS AND BLOOD! THE UNIVERSE WAS BUILT IN MY NAME, THE LORD OF THE EDGE!!!!",
          T0003: "I am also pretty much always buried in a mess, having at least 3 cups on my table. ..I should clean. Urgh.",
          T0004: "Anyways! If you feel like offering me a few bucks for a sketched headshot, check out my commission page or deviantart!",
          T0005: "My commission page is erm... still a bit rough around the edges.",
          T0006: "You could say it's fittingly chaotic. Or you could say it is bad, hard to navigate, and in need of some more fun stuff.",
          T0007: "Anyways, here: https://fyoriosity.weebly.com",
          T0008: "Hehehhehheehhehe, you tried clicking that link right now, didn't you. So, that aside, back to your regularly scheduled program:",
          T0009: "...",
          T0010: "Ooof.....my head...",
          T0011: "Must be the lack of hydration. Have you been drinking some water today already?",
        },
      }
    },
  };
}