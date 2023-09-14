const memberObjects = [];

document.querySelectorAll(".padding-right-4").forEach((element) => {
    if (
        !element.classList.contains("editable-field") &&
        !element.classList.contains("bolt-coin")
    ) {
        const childDiv = element.querySelector(
            ".flex-row.flex-center.padding-bottom-4"
        );

        if (childDiv) {
            // console.log(element.querySelectorAll("div")[6].textContent);

            const memberObject = {
                name: childDiv.textContent,
                time: element.querySelectorAll("div")[6].textContent,
            };

            memberObjects.push(memberObject);
        }
    }
});

let bigObject = {
    members: memberObjects,
};

bigObject = JSON.stringify(bigObject, null, 2);

// console.log(JSON.stringify(bigObject, null, 2));

console.log(bigObject);

// To focus on page:

setTimeout(() => {
    navigator.clipboard
        .writeText(bigObject)
        .then(() => {
            console.log(`Copied JSON data to clipboard`);
        })
        .catch((error) => {
            console.error("Unable to copy JSON data to clipboard: ", error);
        });
}, 1000);
