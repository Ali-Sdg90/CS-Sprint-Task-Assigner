// libSegments = [
//     { fillStyle: "#eae56f", text: "Prize 1" },
//     { fillStyle: "#89f26e", text: "Prize 2" },
//     { fillStyle: "#7de6ef", text: "Prize 3" },
//     { fillStyle: "#e7706f", text: "Prize 4" },
//     { fillStyle: "#eae56f", text: "Prize 5" },
//     { fillStyle: "#89f26e", text: "Prize 6" },
//     { fillStyle: "#7de6ef", text: "Prize 7" },
//     { fillStyle: "#e7706f", text: "Prize 8" },
// ];

const hexArray = [
    // "0",
    // "1",
    // "2",
    // "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

const teamAMembers = [
    "Afshin Alizadeh",
    "Zahra Rezaei",
    "Zahra Ahangari",
    "Muhammad Amin Saffari",
    "Ali Asghar Chavoshi",
    "Hootan Hemmati",
    "Behzad Seyfi",
    "Arian Kazemi",
    "Hediye Sezavaran",
    "Kimia Heidari",
    "Nafiseh Daneshian",
    "Ali Sadeghi",
];

let libSegments = [];

let minTime = 0;
let isTeamA = true;

// Create suitable object from bigObject to pass to library to add to wheel:
const SegmentMakerFunction = () => {
    libSegments = [];

    for (let person = 0; person < bigObject.length; person++) {
        // console.log(teamAMembers.includes(bigObject[person].name));

        if (isTeamA === teamAMembers.includes(bigObject[person].name)) {
            if (bigObject[person].time >= minTime) {
                const chanceArray = [];

                let personColor = "#";
                for (let i = 0; i < 6; i++) {
                    personColor += hexArray[Math.trunc(Math.random() * 12)];
                }

                for (let i = 0; i < bigObject[person].time; i++) {
                    const chanceObj = {
                        fillStyle: personColor,
                        text: bigObject[person].name,
                    };
                    chanceArray.push(chanceObj);
                }

                libSegments.push(...chanceArray);
            }
        }
    }

    console.log(libSegments);
};
SegmentMakerFunction();

// Wheel btns and winner-announcer functions:
let winner = "";

const spinBtn = document.querySelector(".spin-button");
const resetBtn = document.querySelector(".play-again");

const winnerAnnouncer = document.querySelector(".winner-announcer");
const winnerAnnouncerTxt = document.querySelector(".winner-announcer-txt");

const spinBtnFunc = () => {
    spinBtn.classList.toggle("hide-btn");
    resetBtn.classList.toggle("hide-btn");

    setTimeout(() => {
        console.log(winner.length);
        if (winner.length) {
            console.log(winner);
            winnerAnnouncerTxt.textContent = `${winner} is Winner!`;
        }
        winner = "";

        console.log("in");

        winnerAnnouncer.style.display = "flex";
        winnerAnnouncer.style.opacity = "0";

        setTimeout(() => {
            winnerAnnouncer.style.opacity = "1";
        }, 200);
    }, 4500);
};

spinBtn.addEventListener("click", spinBtnFunc);

resetBtn.addEventListener("click", () => {
    spinBtn.classList.toggle("hide-btn");
    resetBtn.classList.toggle("hide-btn");
});

const winnerAnnouncerBtn = document.querySelector(".winner-announcer-closer");

winnerAnnouncerBtn.addEventListener("click", () => {
    winnerAnnouncer.style.opacity = "0";

    setTimeout(() => {
        winnerAnnouncer.style.display = "none";
    }, 200);
});
