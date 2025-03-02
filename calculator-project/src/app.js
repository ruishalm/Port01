document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (value === '=') {
                display.textContent = 'Conta já utilizada, por favor uma diferente.';
                currentInput = '';
            } else {
                if (display.textContent === '0' || display.textContent === 'conta ja utilizada, por favor tente outra') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
                currentInput += value;
            }
        });
    });
});