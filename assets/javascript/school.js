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
        if (eachTask.category === "school") {
            appendTask(eachTask);
        }
    }
};

renderTasks();

// submitting the form
const schoolForm = document.getElementById("school-form");
const schoolTaskField = document.getElementById("school-task");
const schoolDateField = document.getElementById("school-due-date");

function submitSchoolForm() {
    const taskSubmission = {
        task: schoolTaskField.value,
        date: schoolDateField.value,
        category: "school",
    };
    readLocalStorage();
    allTasks.push(taskSubmission);
    storeLocalStorage();
    appendTask(taskSubmission);
};

if (schoolForm) {
schoolForm.addEventListener("submit", submitSchoolForm);
};