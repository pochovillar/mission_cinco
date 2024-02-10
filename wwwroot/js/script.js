$(document).ready(function () {
    $("#calculateBtn").click(function () {
        var hoursInput = parseFloat($("#hoursInput").val());
        var hourlyRate = parseFloat($("#hourlyRate").val().replace("$", ""));
        var totalOutput = $("#totalOutput");

        // Validate input
        if (!isNaN(hoursInput) && hoursInput >= 0) {
            var total = hoursInput * hourlyRate;
            totalOutput.text("$" + total.toFixed(2));
        } else {
            totalOutput.text("Invalid input. Please enter a positive number of hours.");
        }
    });
});
