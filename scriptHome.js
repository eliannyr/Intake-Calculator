// title and buttons text
document.getElementById("description").textContent = `Select from the options below.`;
document.getElementById("button1").textContent = `Daily Intake`;
document.getElementById("button2").textContent = `Water Consumption`;
document.getElementById("button3").textContent = `Website Instructions`;

function dailyPage() {
    window.location.href = 'indexDaily.html';
}

function waterPage() {
    window.location.href = 'indexWater.html';
}

function aboutPage() {
    window.location.href = 'indexAbout.html';
}
