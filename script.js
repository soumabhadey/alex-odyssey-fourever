//const scene = document.getElementById('scene');
const text = document.getElementById('text');
const image = document.getElementById('image');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

artist = false;
point = 0;

const scenes = [
    {
        name : "morning",
        text : "As the sun rises, we meet Alex, a young teenager, getting ready for the day.",
        image : "\assets\morning.jpg",
        choice1 : "eat healthy breakfast",
        choice2 : "grab a quick snack",
        button1 : goEnergized,
        button2 : goSluggish
    },
    {
        name : "energized",
        text : "Alex feels energized",
        image : "\assets\energized.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goSchool,
        button2 : goSchool        
    },
    {
        name : "sluggish",
        text : "Alex feels sluggish",
        image : "\assets\sluggish.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goSchool,
        button2 : goSchool        
    },
    {
        name : "school",
        text : "At school, Alex's best friend Jordan approaches.",
        image : "\assets\school.jpg",
        choice1 : "listen attentively to Jordan's problem",
        choice2 : "be in a rush to get to class",
        button1 : goJordanSupported,
        button2 : goJordanFriendshipStrains
    },
    {
        name : "jordan-supported",
        text : "Jordan feels supported",
        image : "\assets\jordan-supported.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goLunchtime,
        button2 : goLunchtime    
    },
    {
        name : "jordan-friendship-strains",
        text : "Their friendship strains",
        image : "\assets\jordan-friendship-strains.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goLunchtime,
        button2 : goLunchtime       
    },
    {
        name : "lunctime",
        text : "During lunch, Alex has a chance to sit with a new student, Taylor.",
        image : "\assets\lunctime.jpg",
        choice1 : "invite Taylor to join your group",
        choice2 : "stay with the usual friends",
        button1 : goTaylorAppreciates,
        button2 : goTaylorLeft
    },
    {
        name : "taylor-appreciates",
        text : "Taylor appreciates the kindness",
        image : "\assets\taylor-appreciates.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goAfternoon,
        button2 : goAfternoon    
    },
    {
        name : "taylor-left",
        text : "Taylor feels left out",
        image : "\assets\taylor-left.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goAfternoon,
        button2 : goAfternoon    
    },
    {
        name : "afternoon",
        text : "Alex overhears a teacher talking about an upcoming art competition.",
        image : "\assets\afternoon.jpg",
        choice1 : "show interest in the competition",
        choice2 : "brush it off as unimportant",
        button1 : goDiscoverHiddenPassion,
        button2 : goMissOpportunity
    },
    {
        name : "discover-hidden-passion",
        text : "Alex discovers a hidden passion",
        image : "\assets\discover-hidden-passion.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goSoccerPractice,
        button2 : goSoccerPractice
    },
    {
        name : "miss-opportunity",
        text : "Alex missed an opportunity",
        image : "\assets\miss-opportunity.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goSoccerPractice,
        button2 : goSoccerPractice
    },
    {
        name : "soccer-practice",
        text : "Alex's coach offers the captain position to him for the upcoming game",
        image : "\assets\soccer-practice.jpg",
        choice1 : "accept the position",
        choice2 : "suggest another teammate",
        button1 : goGainLeadershipSkills,
        button2 : goPrioritizeTeamwork
    },
    {
        name : "gain-leadership-skills",
        text : "Alex gains leadership skills",
        image : "\assets\gain-leadership-skills.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goEvening,
        button2 : goEvening
    },
    {
        name : "prioritize-teamwork",
        text : "Alex and his teammates learn to prioritize teamwork",
        image : "\assets\prioritize-teamwork.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goEvening,
        button2 : goEvening
    },
    {
        name : "evening",
        text : "At home, Alex talks to his older sibling about career aspirations",
        image : "\assets\evening.jpg",
        choice1 : "Share your dream about becoming an artist",
        choice2 : "Express interest in a different field",
        button1 : goSiblingOffersEncouragement,
        button2 : goAdvisesExploringOptions
    },
	{
        name : "sibling-offers-encouragement",
        text : "Sibling offers encouragement",
        image : "\assets\sibling-offers-encouragement.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goReflection,
        button2 : goReflection
    },
	{
        name : "advises-exploring-options",
        text : "Sibling advises exploring options",
        image : "\assets\advises-exploring-options.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goReflection,
        button2 : goReflection
    },
	{
        name : "reflection",
        text : "As the day ends, Alex reflects on his choices.",
        image : "\assets\reflection.jpg",
        choice1 : "Feel satisfied",
        choice2 : "Regret",
        button1 : goFeelSatisfied,
        button2 : goRegret
    },
	{
        name : "feel-satisfied",
        text : "Positive reflection boosts Alex's confidence",
        image : "\assets\feel-satisfied.jpg",
        choice1 : "next",
        choice2 : "next",
        button1 : goConclusion,
        button2 : goConclusion
    },
	{
        name : "regret",
        text : "Alex regrets his decisions.",
        image : "\assets\feel-satisfied.jpg",
        choice1 : "Reconsider your decisions",
        choice2 : "Reconsider your decisions",
        button1 : goMorning,
        button2 : goConclusion
    },
	{
        name : "conclusion",
        text : "Several weeks later, we see Alex pursuing a newfound interest.",
        image : "\assets\conclusion.jpg",
        choice1 : "Next",
        choice2 : "Regret",
        button1 : goFeelSatisfied,
        button2 : goRegret
    },
];


//initialize
//scene.innerText = scenes[0].name;
//text.innerText = scenes[0].text;
//image.src = scenes[0].image;
//button1.innerText = scenes[0].choice1;
//button2.innerText = scenes[0].choice2;
//button1.onclick = scenes[0].button1;
//button2.onclick = scenes[0].button2;

//updateScene(scenes[0]);

goMorning();


function updateScene(newScene) {
    //scene.innerText = newScene.name;
    text.innerText = newScene.text;
    image.src = newScene.image;
    button1.innerText = newScene.choice1;
    button2.innerText = newScene.choice2;
    button1.onclick = newScene.button1;
    button2.onclick = newScene.button2;
}


function goMorning() {
	updateScene(scenes[0]);
}


function goEnergized() {
	++point;
    updateScene(scenes[1]);
}


function goSluggish() {
	--point;
    updateScene(scenes[2]);
}


function goSchool() {
    updateScene(scenes[3]);
}


function goJordanSupported() {
	++point;
    updateScene(scenes[4]);
}


function goJordanFriendshipStrains() {
	--point;
    updateScene(scenes[5]);
}


function goLunchtime() {
    updateScene(scenes[6]);
}