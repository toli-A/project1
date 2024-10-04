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
    newDate.readOnly = true;
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
const workSubmitButton = document.getElementById("submit-work-task");
const workModalWindow = document.getElementById("workModal");
const workTaskField = document.getElementById("work-task");
const workDateField = document.getElementById("work-due-date");

function submitworkForm() {
    if (workTaskField.value === "" || workDateField.value === "") {
        window.alert("Please fill all fields.");
    } else {
        const taskSubmission = {
            task: workTaskField.value,
            date: workDateField.value,
            category: "work",
        };
        readLocalStorage();
        allTasks.push(taskSubmission);
        storeLocalStorage();
        workTaskField.value = "";
        workDateField.value = "";
        appendTask(taskSubmission);
    }
};

if (workSubmitButton) {
    workSubmitButton.addEventListener("click", submitworkForm);
};