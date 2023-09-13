const teamList = document.querySelector(".team-member");

const makeControlPanel = () => {
    teamList.innerHTML = "";

    for (let i = 0; i < bigObject.length; i++) {
        teamList.innerHTML += `
        <div class="person team-B">
            <div class="name">${bigObject[i].name}</div>
            <div class="person-time">
                <div class="remove-btn${i} member-btns">-</div>
                <div class="time">${bigObject[i].time}</div>
                <div class="add-btn${i} member-btns">+</div>
            </div>
        </div>`;
    }

    for (let i = 0; i < bigObject.length; i++) {
        document
            .querySelector(`.remove-btn${i}`)
            .addEventListener("click", () => {
                bigObject[i].time -= 1;
                console.log(bigObject[i].name, bigObject[i].time);

                makeControlPanel();
                SegmentMakerFunction();
                showWheel();
            });

        document.querySelector(`.add-btn${i}`).addEventListener("click", () => {
            bigObject[i].time += 1;
            console.log(bigObject[i].name, bigObject[i].time);

            makeControlPanel();
            SegmentMakerFunction();
            showWheel();
        });
    }
};
makeControlPanel();
