const backButton = document.querySelector("#back-button")
const allButton = document.querySelector("#all-button")
const schoolButton = document.querySelector("#school-button")
const homeButton = document.querySelector("#home-button")
const workButton = document.querySelector("#work-button")
//redirect command//
let redirectURL = '';
function redirectPage(url) {
    redirectURL = url;
    window.location.assign(url);
};

// local storage
let allTasks = [];

function readLocalStorage() {
    const restoredTasks = JSON.parse(localStorage.getItem("allTasks"));
    if (restoredTasks) {
        allTasks = restoredTasks;
        return allTasks;
    } else {
        allTasks = [];
        return allTasks;
    };
};

function storeLocalStorage() {
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
};

// backButtons
if(backButton) {
    backButton.addEventListener('click', function() {
        redirectPage("./index.html");
})
};

if (allButton) {
    allButton.addEventListener('click', function() {
        redirectPage("./all-tasks.html");
})
};

if(schoolButton) {
    schoolButton.addEventListener('click', function() {
        redirectPage("./school-tasks.html");
})
};

if (homeButton) {
    homeButton.addEventListener ('click', function() {
        redirectPage("./home-tasks.html");
})
};

if (workButton) {
    workButton.addEventListener ('click', function() {
        redirectPage("./work-tasks.html");
})
};

// submitting the form
const submitButton = document.getElementById("submit-task");
const modalWindow = document.getElementById("exampleModal");
const taskField = document.getElementById("task");
const dateField = document.getElementById("due-date");
const categoryField = document.getElementById("category");

function submitForm() {
    if (taskField.value === "" || dateField.value === "" || categoryField.value === "none") {
        window.alert("Please fill all fields.");
    } else {
        const taskSubmission = {
            task: taskField.value,
            date: dateField.value,
            category: categoryField.value,
        };
        readLocalStorage();
        allTasks.push(taskSubmission);
        storeLocalStorage();
        console.log(taskSubmission);
        console.log(allTasks);
        taskField.value = "";
        dateField.value = "";
        categoryField.value = "none";
        if (document.title === "Task Tracker | All Tasks") {
            appendTask(taskSubmission);
        }
    }
};

if (submitButton) {
    submitButton.addEventListener("click", submitForm);
};

// dark mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const bodyElement = document.querySelector("body");
const footerText =document.querySelector("footer p");
const addNewTaskButton = document.getElementById("add-new-task-button");

darkModeToggle.addEventListener("click", () => {
    const currentMode = darkModeToggle.getAttribute("darkmode");
    if (currentMode === "off") {
        darkModeToggle.setAttribute("darkmode", "on");
        bodyElement.setAttribute("class", "text-white bg-dark bg-gradient");
        footerText.setAttribute("class", "col-10 text-center text-light");
        addNewTaskButton.setAttribute("class", "btn btn-outline-light");
    } else {
        darkModeToggle.setAttribute("darkmode", "off");
        bodyElement.setAttribute("class", null);
        footerText.setAttribute("class", "col-10 text-center text-body-secondary");
        addNewTaskButton.setAttribute("class", "btn btn-outline-dark");
    }
});