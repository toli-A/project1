// append work tasks
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
        if (eachTask.category === "work") {
            appendTask(eachTask);
        }
    }
};

renderTasks();

// submitting the form
const workForm = document.getElementById("work-form");
const workTaskField = document.getElementById("work-task");
const workDateField = document.getElementById("work-due-date");

function submitWorkForm() {
    const taskSubmission = {
        task: workTaskField.value,
        date: workDateField.value,
        category: "work",
    };
    readLocalStorage();
    allTasks.push(taskSubmission);
    storeLocalStorage();
    appendTask(taskSubmission);
};

if (workForm) {
workForm.addEventListener("submit", submitWorkForm);
};