var rIndex = -1; // Initialize rIndex with -1 to indicate no selection

// Function to check if any input field is empty
function checkEmptyInput() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        protein = document.getElementById("protein").value,
        calories = document.getElementById("calories").value;

    if (fname === "") {
        alert("Please enter food name :v !!");
        isEmpty = true;
    } else if (protein === "") {
        alert("Please enter protein amount :v !!");
        isEmpty = true;
    } else if (calories === "") {
        alert("Please enter calorie amount :v !!");
        isEmpty = true;
    }
    return isEmpty;
}

// Function to add a new row to the table
function addHtmlTableRow() {
    if (!checkEmptyInput()) {
        var tbody = document.getElementById("tbody");
        var newRow = tbody.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var fname = document.getElementById("fname").value;
        var protein = document.getElementById("protein").value;
        var calories = document.getElementById("calories").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = protein;
        cell3.innerHTML = calories;

        // Re-attach event listeners to rows
        selectedRowToInput();
        updateTotals(); // Update totals after adding a row
    }
}

// Function to attach event listeners to rows for selection
function selectedRowToInput() {
    var tbody = document.getElementById("tbody");
    for (var i = 0; i < tbody.rows.length; i++) {
        tbody.rows[i].onclick = function() {
            // Calculate rIndex within tbody
            rIndex = this.rowIndex - 1; // Adjust rIndex to account for the header row
            console.log("Selected row index for editing: ", rIndex); // Debugging
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("protein").value = this.cells[1].innerHTML;
            document.getElementById("calories").value = this.cells[2].innerHTML;
        };
    }
}

// Function to edit the selected row
function editHtmlTableSelectedRow() {
    var fname = document.getElementById("fname").value,
        protein = document.getElementById("protein").value,
        calories = document.getElementById("calories").value;

    if (!checkEmptyInput()) {
        var tbody = document.getElementById("tbody");
        // Ensure rIndex is valid and within bounds
        if (rIndex >= 0 && rIndex < tbody.rows.length) {
            var selectedRow = tbody.rows[rIndex];
            console.log("Editing row index: ", rIndex); // Debugging
            selectedRow.cells[0].innerHTML = fname;
            selectedRow.cells[1].innerHTML = protein;
            selectedRow.cells[2].innerHTML = calories;
            updateTotals(); // Update totals after editing a row
            clearInputFields(); // Clear input fields after editing
        } else {
            alert("Select a row to edit :v !!");
        }
    }
}

// Function to remove the selected row
function removeSelectedRow() {
    var tbody = document.getElementById("tbody");
    if (rIndex >= 0 && rIndex < tbody.rows.length) { // Ensure rIndex is valid and within bounds
        console.log("Removing row index: ", rIndex); // Debugging
        tbody.deleteRow(rIndex); // Delete the row at rIndex
        clearInputFields(); // Clear input fields after removal
        rIndex = -1; // Reset rIndex after removal
        updateTotals(); // Update totals after removing a row
    } else {
        alert("Select a row to remove :v !!");
    }
}

// Function to update the totals in the footer
function updateTotals() {
    var totalProtein = 0;
    var totalCalories = 0;
    var tbody = document.getElementById("tbody");

    for (var i = 0; i < tbody.rows.length; i++) {
        totalProtein += parseFloat(tbody.rows[i].cells[1].innerHTML) || 0;
        totalCalories += parseFloat(tbody.rows[i].cells[2].innerHTML) || 0;
    }

    document.getElementById("total-protein").innerHTML = totalProtein;
    document.getElementById("total-calories").innerHTML = totalCalories;
}

// Function to clear input fields
function clearInputFields() {
    document.getElementById("fname").value = "";
    document.getElementById("protein").value = "";
    document.getElementById("calories").value = "";
}

// Initialize totals on page load
window.onload = function() {
    updateTotals();
};

// Function to redirect to the home page
function homePage() {
    window.location.href = 'index.html';
}

// Call the function to set the initial row listeners
selectedRowToInput();
