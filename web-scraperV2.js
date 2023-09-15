const azureScraperCode = () => {
    let bigObject = [];

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

                const timeString =
                    element.querySelectorAll("div")[6].textContent;

                const times = timeString.match(/\d+(\.\d+)?/g)?.map(Number);
                const availableTime = Math.trunc(times[1] - times[0]);

                const memberObject = {
                    name: childDiv.textContent,
                    time: availableTime,
                };

                bigObject.push(memberObject);
            }
        }
    });

    bigObject = JSON.stringify(bigObject, null, 2);

    console.log(bigObject);

    // Most focus on page:
    console.log("Focus on page!");

    setTimeout(() => {
        navigator.clipboard
            .writeText(bigObject)
            .then(() => {
                console.log("Copied JSON data to clipboard");
            })
            .catch((error) => {
                console.error("Unable to copy JSON data to clipboard: ", error);
            });
    }, 1000);
}
