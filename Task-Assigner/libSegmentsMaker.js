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

const libSegments = [];

const hexArray = [
    "0",
    "1",
    "2",
    "3",
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

for (let person = 0; person < bigObject.length; person++) {
    if (bigObject[person].time > 0) {
        const chanceArray = [];

        let personColor = "#";
        for (let i = 0; i < 6; i++) {
            personColor += hexArray[Math.trunc(Math.random() * 16)];
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

console.log(libSegments);