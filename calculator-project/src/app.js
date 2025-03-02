document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    const equalButton = document.getElementById('equal');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // You can add logic here if needed for other buttons
        });
    });

    equalButton.addEventListener('click', function() {
        display.textContent = "conta ja utilizada, por favor tente outra";
    });
});