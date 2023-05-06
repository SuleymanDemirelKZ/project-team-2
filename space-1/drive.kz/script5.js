document.getElementById('datePicker').addEventListener('change', function() {
    var timePicker = document.getElementById('timePicker');
    timePicker.disabled = false;
});

document.getElementById('timePicker').addEventListener('change', function() {
    var confirmBtn = document.getElementById('confirmBtn');
    confirmBtn.disabled = false;
});

document.getElementById('confirmBtn').addEventListener('click', function() {
    var confirmationMsg = document.getElementById('confirmationMsg');
    confirmationMsg.textContent = 'You have successfully registered.';
});
