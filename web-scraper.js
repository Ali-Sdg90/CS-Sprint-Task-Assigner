const members = document.querySelectorAll(".padding-bottom-4");
const times = document.querySelectorAll(
    ".padding-horizontal-16 .padding-bottom-8 > div:last-child"
);

const timesArray = Array.from(times);

timesArray.splice(21, 1);

const memberObjects = [];

for (let i = 0; i < Math.min(members.length, timesArray.length); i++) {
    const memberName = members[i].textContent;
    const memberTime = timesArray[i].textContent;

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

console.log(bigObject);
