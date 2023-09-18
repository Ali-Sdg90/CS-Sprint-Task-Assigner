const teamList = document.querySelector(".team-member");

const makeControlPanel = () => {
    if (bigObject.length) {
        teamList.innerHTML = "";

        // Add list to HTML:
        for (let i = 0; i < bigObject.length; i++) {
            if (isTeamA === teamAMembers.includes(bigObject[i].name)) {
                teamList.innerHTML += `
                    <div class="person">
                        <div class="name">${bigObject[i].name}</div>
                        <div class="person-time">
                            <div class="remove-btn${i} member-btns">-</div>
                            <div class="time">${bigObject[i].time}</div>
                            <div class="add-btn${i} member-btns">+</div>
                        </div>
                    </div>`;
            }
        }

        // Add eventListeners for + and - btns in right menu:
        for (let i = 0; i < bigObject.length; i++) {
            if (isTeamA === teamAMembers.includes(bigObject[i].name)) {
                document
                    .querySelector(`.remove-btn${i}`)
                    .addEventListener("click", () => {
                        bigObject[i].time -= 1;
                        console.log(bigObject[i].name, bigObject[i].time);

                        makeControlPanel();
                        SegmentMakerFunction();

                        if (bigObject[i].time >= 0) {
                            showWheel();
                        }
                    });

                document
                    .querySelector(`.add-btn${i}`)
                    .addEventListener("click", () => {
                        bigObject[i].time += 1;
                        console.log(bigObject[i].name, bigObject[i].time);

                        makeControlPanel();
                        SegmentMakerFunction();

                        if (bigObject[i].time > 0) {
                            showWheel();
                        }
                    });
            }
        }
    }
};
makeControlPanel();

// Select teams functions:
const teamABtn = document.querySelector(".team-btn-A");
const teamBBtn = document.querySelector(".team-btn-B");

const teamABtnFunc = () => {
    isTeamA = !isTeamA;
    teamABtn.classList.toggle("active-btn");
    teamBBtn.classList.toggle("active-btn");

    SegmentMakerFunction();
    makeControlPanel();

    showWheel();

    teamABtn.removeEventListener("click", teamABtnFunc);
    teamBBtn.addEventListener("click", teamBBtnFunc);
    teamABtn.style.cursor = "default";
    teamBBtn.style.cursor = "pointer";
};

const teamBBtnFunc = () => {
    isTeamA = !isTeamA;
    teamABtn.classList.toggle("active-btn");
    teamBBtn.classList.toggle("active-btn");

    SegmentMakerFunction();
    makeControlPanel();

    showWheel();

    teamBBtn.removeEventListener("click", teamBBtnFunc);
    teamABtn.addEventListener("click", teamABtnFunc);
    teamBBtn.style.cursor = "default";
    teamABtn.style.cursor = "pointer";
};

teamBBtn.addEventListener("click", teamBBtnFunc);

teamABtn.click();
teamBBtn.click();
teamABtn.click();
