// append home tasks
function appendTask(eachTask) {
    const tableBody = document.querySelector("tbody");
    const newTableRow = document.createElement("tr");
    const newTaskCell = document.createElement("td");
    const newDateCell = document.createElement("td");
    let newDate = document.createElement("input");
    newDate.setAttribute("type", "date");
    const newRemoveCell = document.createElement("td");
    const newRemoveButton = document.createElement("button");
    const currentIndex = allTasks.indexOf(eachTask);

    tableBody.appendChild(newTableRow);
    newTableRow.appendChild(newTaskCell);
    newTableRow.appendChild(newDateCell);
    newDateCell.appendChild(newDate);
    newTableRow.appendChild(newRemoveCell);
    newRemoveCell.appendChild(newRemoveButton);

    newTaskCell.textContent = eachTask.task;
    newDate.value = eachTask.date;
    newRemoveButton.textContent = "—";
    newRemoveButton.addEventListener("click", () => {
        readLocalStorage();
        allTasks.splice(currentIndex, 1);
        newTableRow.remove();
        storeLocalStorage();
    });
};

function renderTasks() {
    readLocalStorage();
    for (const eachTask of allTasks) {
        if (eachTask.category === "home") {
            appendTask(eachTask);
        }
    }
};

renderTasks();

/*
// submitting the form
const homeForm = document.getElementById("home-form");
const homeTaskField = document.getElementById("home-task");
const homeDateField = document.getElementById("home-due-date");

function submitHomeForm() {
    const taskSubmission = {
        task: homeTaskField.value,
        date: homeDateField.value,
        category: "home",
    };
    readLocalStorage();
    allTasks.push(taskSubmission);
    storeLocalStorage();
    appendTask(taskSubmission);
};
*/

// submitting the form
const homeSubmitButton = document.getElementById("submit-home-task");
const homeModalWindow = document.getElementById("homeModal");
const homeTaskField = document.getElementById("home-task");
const homeDateField = document.getElementById("home-due-date");

function submitHomeForm() {
    if (homeTaskField.value === "" || homeDateField.value === "") {
        window.alert("Please fill all fields.");
    } else {
        const taskSubmission = {
            task: homeTaskField.value,
            date: homeDateField.value,
            category: "home",
        };
        readLocalStorage();
        allTasks.push(taskSubmission);
        storeLocalStorage();
        homeTaskField.value = "";
        homeDateField.value = "";
        appendTask(taskSubmission);
    }
};

if (homeSubmitButton) {
    homeSubmitButton.addEventListener("click", submitHomeForm);
};