const bigObjectInput = document.getElementById("app-input");
const bigObjectSubmit = document.querySelector(".submit-code-btn");

bigObjectSubmit.addEventListener("click", () => {
    // bigObject = bigObjectInput.value;
    inputValue = JSON.parse(bigObjectInput.value);

    console.log(inputValue);

    bigObject = inputValue;

    makeControlPanel();
    SegmentMakerFunction();
    showWheel();
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
