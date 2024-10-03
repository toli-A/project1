// append all tasks
function appendTask(eachTask) {
    const tableBody = document.querySelector("tbody");
    const newTableRow = document.createElement("tr");
    const newCategoryCell = document.createElement("td");
    const newTaskCell = document.createElement("td");
    const newDateCell = document.createElement("td");
    let newDate = document.createElement("input");
    newDate.setAttribute("type", "date");
    const newRemoveCell = document.createElement("td");
    const newRemoveButton = document.createElement("button");
    const currentIndex = allTasks.indexOf(eachTask);

    tableBody.appendChild(newTableRow);
    newTableRow.appendChild(newCategoryCell);
    newTableRow.appendChild(newTaskCell);
    newTableRow.appendChild(newDateCell);
    newDateCell.appendChild(newDate);
    newTableRow.appendChild(newRemoveCell);
    newRemoveCell.appendChild(newRemoveButton);

    newCategoryCell.textContent = eachTask.category;
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

function renderAllTasks() {
    readLocalStorage();
    for (const eachTask of allTasks) {
        appendTask(eachTask);
    }
};

// submitting the form
const allTasksForm = document.getElementById("all-tasks-form");
const allTasksTaskField = document.getElementById("all-task");
const allTasksDateField = document.getElementById("all-due-date");
const allTasksCategoryField = document.getElementById("all-category");

function allTasksSubmitForm() {
    const taskSubmission = {
        task: allTasksTaskField.value,
        date: allTasksDateField.value,
        category: allTasksCategoryField.value,
    };
    readLocalStorage();
    allTasks.push(taskSubmission);
    storeLocalStorage();
    appendTask(taskSubmission);
};

if (allTasksForm) {
    allTasksForm.addEventListener("submit", allTasksSubmitForm);
};

function themeSwitcher () {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

renderAllTasks();