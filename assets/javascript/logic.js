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