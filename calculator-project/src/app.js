document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';

    function adjustFontSize() {
        const maxFontSize = 2; // em
        const minFontSize = 1; // em
        const maxLength = 10; // maximum number of characters before resizing

        if (display.textContent.length > maxLength) {
            const newSize = Math.max(minFontSize, maxFontSize - (display.textContent.length - maxLength) * 0.1);
            display.style.fontSize = `${newSize}em`;
        } else {
            display.style.fontSize = `${maxFontSize}em`;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (value === '=') {
                display.textContent = 'Conta já utilizada, por favor uma diferente.';
                currentInput = '';
                setTimeout(() => {
                    display.textContent = '0';
                    adjustFontSize();
                }, 2000); // 2 segundos
            } else {
                if (display.textContent === '0' || display.textContent === 'Conta já utilizada, por favor uma diferente.') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
                currentInput += value;
                adjustFontSize();
            }
        });
    });
});
