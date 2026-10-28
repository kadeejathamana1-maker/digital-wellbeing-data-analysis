const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

const insightButton = document.getElementById("insightButton");
const insight = document.getElementById("insight");

const year = document.getElementById("year");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

insightButton.addEventListener("click", function () {
    if (insight.hidden) {
        insight.hidden = false;
        insightButton.textContent = "Hide Insight";
    } else {
        insight.hidden = true;
        insightButton.textContent = "Show Insight";
    }
});

year.textContent = new Date().getFullYear();