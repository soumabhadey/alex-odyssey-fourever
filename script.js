const text = document.getElementById('text');
const image = document.getElementById('image');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

let artist = false;
let point = 0;

const scenes = [
    {
        name: "home",
        text: "Welcome to Alex's Odyssey",
        image: "images/home.jpg",
        choice1: "Start",
        button1: goMorning
    },
    {
        name: "morning",
        text: "As the sun rises, we meet Alex, a young teenager, getting ready for the day.",
        image: "images/morning.jpg",
        choice1: "Grab a quick snack",
        choice2: "Eat a healthy breakfast",
        button1: goSluggish,
        button2: goEnergized
    },
    {
        name: "sluggish",
        text: "Alex feels sluggish",
        image: "images/sluggish.jpg",
        choice1: "Next",
        button1: goSchool
    },
    {
        name: "energized",
        text: "Alex feels energized",
        image: "images/energized.jpg",
        choice1: "Next",
        button1: goSchool
    },
    {
        name: "school",
        text: "At school, Alex's best friend Jordan approaches.",
        image: "images/school.jpg",
        choice1: "Listen attentively to Jordan's problem",
        choice2: "Be in a rush to get to class",
        button1: goJordanSupported,
        button2: goJordanFriendshipStrains
    },
    {
        name: "jordan-supported",
        text: "Jordan feels supported",
        image: "images/jordan-supported.jpg",
        choice1: "Next",
        button1: goLunchtime
    },
    {
        name: "jordan-friendship-strains",
        text: "Their friendship strains",
        image: "images/jordan-friendship-strains.jpg",
        choice1: "Next",
        button1: goLunchtime
    },
    {
        name: "lunchtime",
        text: "During lunch, Alex has a chance to sit with a new student, Taylor.",
        image: "images/lunchtime.jpg",
        choice1: "Stay with the usual friends",
        choice2: "Invite Taylor to join your group",
        button1: goTaylorLeft,
        button2: goTaylorAppreciates
    },
    {
        name: "taylor-left",
        text: "Taylor feels left out",
        image: "images/taylor-left.jpg",
        choice1: "Next",
        button1: goAfternoon
    },
    {
        name: "taylor-appreciates",
        text: "Taylor appreciates the kindness",
        image: "images/taylor-appreciates.jpg",
        choice1: "Next",
        button1: goAfternoon
    },
    {
        name: "afternoon",
        text: "Alex overhears a teacher talking about an upcoming art competition.",
        image: "images/afternoon.jpg",
        choice1: "Show interest in the competition",
        choice2: "Brush it off as unimportant",
        button1: goDiscoverHiddenPassion,
        button2: goMissOpportunity
    },
    {
        name: "discover-hidden-passion",
        text: "Alex discovers a hidden passion",
        image: "images/discover-hidden-passion.jpg",
        choice1: "Next",
        button1: goSoccerPractice
    },
    {
        name: "miss-opportunity",
        text: "Alex missed an opportunity",
        image: "images/miss-opportunity.jpg",
        choice1: "Next",
        button1: goSoccerPractice
    },
    {
        name: "soccer-practice",
        text: "Alex's coach offers the captain position to him for the upcoming game",
        image: "images/soccer-practice.jpg",
        choice1: "Accept the position",
        choice2: "Suggest another teammate",
        button1: goGainLeadershipSkills,
        button2: goPrioritizeTeamwork
    },
    {
        name: "gain-leadership-skills",
        text: "Alex gains leadership skills",
        image: "images/gain-leadership-skills.jpg",
        choice1: "Next",
        button1: goEvening
    },
    {
        name: "prioritize-teamwork",
        text: "Alex and his teammates learn to prioritize teamwork",
        image: "images/prioritize-teamwork.jpg",
        choice1: "Next",
        button1: goEvening
    },
    {
        name: "evening",
        text: "At home, Alex talks to his older sibling about career aspirations",
        image: "images/evening.jpg",
        choice1: "Share your dream about becoming an artist",
        choice2: "Express interest in a different field",
        button1: goSiblingOffersEncouragement,
        button2: goAdvisesExploringOptions
    },
    {
        name: "sibling-offers-encouragement",
        text: "Sibling offers encouragement",
        image: "images/sibling-offers-encouragement.jpg",
        choice1: "Next",
        button1: goReflection
    },
    {
        name: "advises-exploring-options",
        text: "Sibling advises exploring options",
        image: "images/advises-exploring-options.jpg",
        choice1: "Next",
        button1: goReflection
    },
    {
        name: "reflection",
        text: "As the day ends, Alex reflects on his choices.",
        image: "images/reflection.jpg",
        choice1: "Next",
        button1: goReflectionResult
    },
    {
        name: "feel-satisfied",
        text: "Positive reflection boosts Alex's confidence",
        image: "images/feel-satisfied.jpg",
        choice1: "Next",
        button1: goConclusion
    },
    {
        name: "regret",
        text: "Alex regrets his decisions. He is given another chance to rethink his decisions.",
        image: "images/regret.jpg",
        choice1: "Reconsider your decisions",
        button1: goMorning
    },
    {
        name: "conclusion-art",
        text: "Several weeks later, we see Alex pursuing a newfound interest, ... Art",
        image: "images/conclusion-art.jpg",
        choice1: "Finish",
        button1: goFinish
    },
    {
        name: "conclusion-soccer",
        text: "Several weeks later, we see Alex pursuing a newfound interest, ... Soccer",
        image: "images/conclusion-soccer.jpg",
        choice1: "Finish",
        button1: goFinish
    },
    {
        name: "finish",
        text: "Alex's adventure ends here.... would you like to play again?",
        image: "images/finish.jpg",
        choice1: "Credits",
        choice2: "Play Again",
        button1: goCredits,
        button2: goHome
    },
    {
        name: "credits",
        text: "Credits: FourEver\nHTML/CSS: Souvik MazumDer, Sidhartha Chatterjee\nDesigns: Soham Mallick\nJavaScript: Soumabha Dey",
        image: "images/credits.jpg",
        choice1: "Play Again",
        button1: goHome
    }
];

//initialize
goMorning();

function updateScene(newScene) {
    text.innerText = newScene.text;
    image.src = newScene.image;
    button1.innerText = newScene.choice1;
    button1.onclick = newScene.button1;

    if (newScene.choice2) {
        button2.style.display = 'inline-block';
        button2.innerText = newScene.choice2;
        button2.onclick = newScene.button2;
    } else {
        button2.style.display = 'none';
    }
}

function goHome() {
    artist = false;
    point = 0;
    updateScene(scenes[0]);
}

function goMorning() {
    artist = false;
    point = 0;
    updateScene(scenes[1]);
}

function goSluggish() {
    --point;
    updateScene(scenes[2]);
}

function goEnergized() {
    ++point;
    updateScene(scenes[3]);
}

function goSchool() {
    updateScene(scenes[4]);
}

function goJordanSupported() {
    ++point;
    updateScene(scenes[5]);
}

function goJordanFriendshipStrains() {
    --point;
    updateScene(scenes[6]);
}

function goLunchtime() {
    updateScene(scenes[7]);
}

function goTaylorLeft() {
    --point;
    updateScene(scenes[8]);
}

function goTaylorAppreciates() {
    ++point;
    updateScene(scenes[9]);
}

function goAfternoon() {
    updateScene(scenes[10]);
}

function goDiscoverHiddenPassion() {
    artist = true;
    updateScene(scenes[11]);
}

function goMissOpportunity() {
    updateScene(scenes[12]);
}

function goSoccerPractice() {
    updateScene(scenes[13]);
}

function goGainLeadershipSkills() {
    point += 2;
    updateScene(scenes[14]);
}

function goPrioritizeTeamwork() {
    ++point;
    updateScene(scenes[15]);
}

function goEvening() {
    updateScene(scenes[16]);
}

function goSiblingOffersEncouragement() {
    artist = true;
    updateScene(scenes[17]);
}

function goAdvisesExploringOptions() {
    artist = false;
    updateScene(scenes[18]);
}

function goReflection() {
    updateScene(scenes[19]);
}

function goReflectionResult() {
    if (point <= 0) {
        goRegret();
    } else {
        goFeelSatisfied();
    }
}

function goFeelSatisfied() {
    updateScene(scenes[20]);
}

function goRegret() {
    updateScene(scenes[21]);
}

function goConclusion() {
    if (artist) {
        goConclusionArt();
    } else {
        goConclusionSoccer();
    }
}

function goConclusionArt() {
    updateScene(scenes[22]);
}

function goConclusionSoccer() {
    updateScene(scenes[23]);
}

function goFinish() {
    updateScene(scenes[24]);
}

function goCredits() {
    updateScene(scenes[25]);
}
