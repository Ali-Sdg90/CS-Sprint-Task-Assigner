const members = document.querySelectorAll(".padding-bottom-4");
const times = document.querySelectorAll(
    ".padding-horizontal-16 .padding-bottom-8 > div:last-child"
);

let timesArray = Array.from(times);

timesArray.splice(24, 1);

// console.log(timesArray.map((item) => item.textContent));

timesArray = timesArray.map((timeString) => {
    const times = timeString.textContent.match(/\d+(\.\d+)?/g)?.map(Number);
    const availableTime = Math.trunc(times[1] - times[0]);
    return availableTime;
});

// console.log(timesArray);

const memberObjects = [];

for (let i = 0; i < Math.min(members.length, timesArray.length); i++) {
    const memberName = members[i].textContent;
    const memberTime = timesArray[i];

    const memberObject = {
        name: memberName,
        time: memberTime,
    };

    memberObjects.push(memberObject);
}

memberObjects.splice(0, 2);

const bigObject = {
    members: memberObjects,
};

console.log(JSON.stringify(bigObject, null, 2));
