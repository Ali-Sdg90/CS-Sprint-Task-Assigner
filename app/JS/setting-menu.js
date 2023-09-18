const bigObjectInput = document.getElementById("app-input");
const bigObjectSubmit = document.querySelector(".submit-code-btn");

bigObjectSubmit.addEventListener("click", () => {
    // bigObject = bigObjectInput.value;
    
    try {
        inputValue = JSON.parse(bigObjectInput.value);
        bigObjectInput.style.backgroundColor = "green";

        setTimeout(() => {
            bigObjectInput.style.backgroundColor = "rgb(177, 177, 177)";
        }, 500);

        console.log(inputValue);

        bigObject = inputValue;

        makeControlPanel();
        SegmentMakerFunction();
        showWheel();
    } catch (error) {
        bigObjectInput.style.backgroundColor = "red";

        setTimeout(() => {
            bigObjectInput.style.backgroundColor = "rgb(177, 177, 177)";
        }, 500);
    }
});

const taskTimeInput = document.querySelector("#custom-task-time");

document.getElementById("task-queue").addEventListener("change", () => {
    taskTimeInput.value = 1;
});
document.getElementById("task-type").addEventListener("change", () => {
    taskTimeInput.value = 2;
});
document.getElementById("task-onenote").addEventListener("change", () => {
    taskTimeInput.value = 1;
});
document.getElementById("task-meeting").addEventListener("change", () => {
    taskTimeInput.value = 1;
});

taskTimeInput.addEventListener("change", () => {
    document.getElementById("task-custome").checked = true;
});

document.querySelector(".task-submit-btn").addEventListener("click", () => {
    minTime = taskTimeInput.value;

    makeControlPanel();
    SegmentMakerFunction();
    showWheel();
});

document.querySelector(".copy-code-btn").addEventListener("click", () => {
    // console.log(azureScraperCode.toString());

    const azureScraperCodeStr = azureScraperCode.toString().slice(12, -1);

    console.log(azureScraperCodeStr);

    navigator.clipboard.writeText(azureScraperCodeStr).then(() => {
        console.log("Scraper code copied to clipboard");
        bigObjectInput.setAttribute("placeholder", "Scraper code copied");

        setTimeout(() => {
            bigObjectInput.setAttribute(
                "placeholder",
                "Paste scraped object here"
            );
        }, 2000);
    });
});
