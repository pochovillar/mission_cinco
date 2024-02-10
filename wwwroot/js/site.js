$(document).ready(function () {
    $("#calculateBtn").click(function () {
        var hoursInput = parseFloat($("#hoursInput").val());
        var hourlyRate = parseFloat($("#hourlyRate").val().replace("$", ""));

        // Validate input
        if (!isNaN(hoursInput) && hoursInput >= 0) {
            // Calculate total rate
            var total = hoursInput * hourlyRate;

            // Display total in output box
            $("#totalOutput").text("$" + total.toFixed(2));

            // Display total in alert box
            alert("Total: $" + total.toFixed(2));
        } else {
            alert("Invalid input. Please enter a positive number of hours.");
        }
    });
});