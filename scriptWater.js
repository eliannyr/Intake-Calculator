// greater than >, less than < ... :v
let weight;
let hrs_input;
let mins_input;
let hrs_to_mins;
let total_exercise_time;
let liter = 33.814; // Ounces in a liter
let liters;
let lbs = document.getElementById("lbs");
let kgs = document.getElementById("kgs");
let mins;
let total_mins; //if hrs and mins have input >0 (greater than .. lol)
let daily_oz;
let final_oz;
let finalLiters;
var unitSelected = document.getElementById("lbs"); // Flag to track if unit has been selected

function dropdownOptions() {
    var dropdown = document.getElementById("options");
    var unitSelected = dropdown.options[dropdown.selectedIndex].text; // Get the selected option's text
    var dropdownButton = document.getElementById("dropdown-button");
    dropdownButton.innerText = dropdown.options[dropdown.selectedIndex].text; // Update button text to show the selected unit
}

// works so keep
function totalExerciseTime() { 
    hrs_input = parseFloat(document.getElementById("exercise-time-hrs").value) || 0;
    hrs_to_mins = hrs_input * 60;
    mins_input = parseFloat(document.getElementById("exercise-time-mins").value) || 0;
    total_exercise_time = parseInt(hrs_to_mins) + parseInt(mins_input);
}

// Function to check if any input field is empty
function emptyWeightInput(){
    var isEmpty = false;
    weight = document.getElementById("weight-input").value;

    if (weight === "") {
        alert("Please enter weight :v !!");
        isEmpty = true;
    }
    return isEmpty;
}

// edit dropdown - fix kgs measurements
function calculate() {
    emptyWeightInput();
    weight = parseFloat(document.getElementById("weight-input").value) || 0; // Get the latest weight input

    let dropdown = document.getElementById("options");
    const selectedValue = dropdown.value;

    if (selectedValue === "kgs") {
        weight = weight * 2.20462; // Convert kilograms to pounds
    }

    daily_oz = weight * 0.5; // Water intake based on weight
    final_oz = daily_oz + ((total_exercise_time / 30) * 12); // Add water intake based on activity levels
    liters = final_oz / liter;

    if (final_oz > liter){ 
        // display full results
        let resultSpan = document.getElementById("result");
        resultSpan.textContent = final_oz.toFixed(2); // Display ounces
        let ozSpan = document.getElementById("oz");
        ozSpan.textContent = `ounces or ${liters.toFixed(2)} liters.`; // Display liters
    } else if (final_oz < liter){
        // display only ounces
        let resultSpan = document.getElementById("result");
        resultSpan.textContent = final_oz.toFixed(2); // Display ounces
        let ozSpan = document.getElementById("oz");
        ozSpan.textContent = `ounces.`;
    }
}

// works so keep BUT keep an eye on liters and ounces display when weight changes
document.getElementById("calculate-button").onclick = function(){
    totalExerciseTime(); // Calculate the exercise time
    calculate(); // Calculate the water intake
};

// return to home page
function homePage() {
    window.location.href = 'index.html';
}

