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