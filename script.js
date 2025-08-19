// Existing functions from your original calculator
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// --- New functions for theme switching ---
let rainbowInterval; // Store the interval ID to clear it later

function setTheme(theme) {
    const body = document.body;

    // Clear any existing theme classes and the rainbow animation
    body.classList.remove('light-theme', 'dark-theme', 'rainbow-theme');
    if (rainbowInterval) {
        clearInterval(rainbowInterval);
        rainbowInterval = null;
    }

    if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else if (theme === 'rainbow') {
        body.classList.add('rainbow-theme');
        // Note: The animation is now handled purely by CSS
    }
    // For 'light' theme, we just remove other classes, which defaults to the base CSS
}

// --- New function for the geometry calculator ---
function calculateRectangle() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('rectangle-result');

    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        resultDiv.textContent = 'Please enter valid numbers.';
        return;
    }

    const area = width * height;
    const perimeter = 2 * (width + height);

    resultDiv.innerHTML = `
        Area: ${area.toFixed(2)}<br>
        Perimeter: ${perimeter.toFixed(2)}
    `;
}
