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

//backButton redirects to the Homepage atm//
if(backButton) {
    backButton.addEventListener('click', function() {
        redirectPage("./index.html");
})}
if (allButton) {
    allButton.addEventListener('click', function() {
        redirectPage("./all-tasks.html");
})}
if(schoolButton) {
    schoolButton.addEventListener('click', function() {
        redirectPage("./school-tasks.html");
})}
if (homeButton) {
homeButton.addEventListener ('click', function() {
        redirectPage("./home-tasks.html");
})}
if (workButton) {
workButton.addEventListener ('click', function() {
        redirectPage("./work-tasks.html");
})}

// modal dialog
const dialog = document.querySelector("dialog");
const addNewTaskButton = document.getElementById("add-new-task-button");
const cancelButton = document.querySelector("dialog button");
const addNewHomeTask = document.getElementById("homeTask");
const addNewWorkTask = document.getElementById("workTask");
const addNewSchoolTask = document.getElementById("schoolTask");
const addNewAllTask = document.getElementById("addAllTask");
if (addNewAllTask) {
    addNewAllTask.addEventListener("click", () => {
        dialog.showModal();
    })};

if (addNewSchoolTask) {
    addNewSchoolTask.addEventListener("click", () => {
        dialog.showModal();
    })};

if (addNewWorkTask) {
    addNewWorkTask.addEventListener("click", () => {
        dialog.showModal();
    })};

if (addNewHomeTask) {
    addNewHomeTask.addEventListener("click", () => {
        dialog.showModal();
    })};
if (addNewTaskButton) {
addNewTaskButton.addEventListener("click", () => {
    dialog.showModal();
})};

if (cancelButton) {
cancelButton.addEventListener("click", () => {
    dialog.close();
})};

// submitting the form
const form = document.getElementById("form");
const taskField = document.getElementById("task");
const dateField = document.getElementById("due-date");
const categoryField = document.getElementById("category");

function submitForm() {
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
};

if (form) {
form.addEventListener("submit", submitForm);
};

function themeSwitcher () {
    let element = document.body;
    element.classList.toggle("dark-mode");
}