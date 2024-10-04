// append school tasks
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
        if (eachTask.category === "school") {
            appendTask(eachTask);
        }
    }
};

renderTasks();

// submitting the form
const schoolSubmitButton = document.getElementById("submit-school-task");
const schoolModalWindow = document.getElementById("schoolModal");
const schoolTaskField = document.getElementById("school-task");
const schoolDateField = document.getElementById("school-due-date");

function submitschoolForm() {
    if (schoolTaskField.value === "" || schoolDateField.value === "") {
        window.alert("Please fill all fields.");
    } else {
        const taskSubmission = {
            task: schoolTaskField.value,
            date: schoolDateField.value,
            category: "school",
        };
        readLocalStorage();
        allTasks.push(taskSubmission);
        storeLocalStorage();
        schoolTaskField.value = "";
        schoolDateField.value = "";
        appendTask(taskSubmission);
    }
};

if (schoolSubmitButton) {
    schoolSubmitButton.addEventListener("click", submitschoolForm);
};