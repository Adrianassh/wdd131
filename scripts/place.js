document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Dates
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // 2. Wind Chill Calculation
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);
    const chillSpan = document.getElementById("chill");

    function calculateWindChill(t, v) {
        // Metric formula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
        // Conditions: T <= 10°C and V > 4.8 km/h
        if (t <= 10 && v > 4.8) {
            return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1) + " °C";
        } else {
            return "N/A";
        }
    }

    if (chillSpan) {
        chillSpan.textContent = calculateWindChill(temp, wind);
    }
});
