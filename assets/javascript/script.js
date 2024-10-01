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

allButton.addEventListener('click', function() {
    redirectPage("./all.html");
})

schoolButton.addEventListener('click', function() {
    redirectPage("./school.html");
})
homeButton.addEventListener ('click', function() {
    redirectPage("./home.html");
})

workButton.addEventListener ('click', function() {
    redirectPage("./work.html");
})