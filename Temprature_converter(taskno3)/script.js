function convertTemperature() {
  const temperatureInput = document.getElementById('temperature').value;
  const selectedUnit = document.getElementById('unit').value;
  const resultElement = document.getElementById('result');

  if (isNaN(temperatureInput)) {
    resultElement.textContent = 'Please enter a valid number for temperature.';
    return;
  }

  const temperature = parseFloat(temperatureInput);

  let convertedTemperature;
  let resultUnit;

  if (selectedUnit === 'celsius') {
    convertedTemperature = (temperature * (9/5)) + 32;
    resultUnit = '°F';
  } else if (selectedUnit === 'fahrenheit') {
    convertedTemperature = (temperature - 32) * (5/9);
    resultUnit = '°C';
  }

  resultElement.textContent = `Result: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}

































