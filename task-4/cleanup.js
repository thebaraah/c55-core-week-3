// Temperature functions
function celsiusToFahrenheit(celsius){
return (celsius * 9/5)+32;
}

function celsiusToKelvin(celsius){
return celsius + 273.15;
}

function getStatus(celsius){
  if(celsius<0){
    return "Freezing";
  }else  if(celsius >= 0 && celsius < 10){
    return "Cold";
  }else  if(celsius >= 10 && celsius < 20){
    return "Mild";
  }else  if(celsius >= 20 && celsius < 30){
    return "Warm";
  }else {
    return "Hot";
  }
}

// Wind chill calculation
function calWindChill(celsius,windSpeed){
  return(13.12 + 0.6215 * 
    celsius- 11.37 * 
    Math.pow(windSpeed, 0.16) + 
    0.3965 * celsius * Math.pow(windSpeed, 0.16));
}
// wind chill 
function printwindChill(cityName, tempCelsius,windSpeed){
  const windChill = calcWindChill(tempCelsius,windSpeed);
  console.log("Wind chill in" +cityName +": " + windChill.toFixed(2) + "°C");
}

//print weather report 
function printWeatherReport(cityName,tempCelsius){
  const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
  const tempKelvin = celsiusToKelvin(tempCelsius);
  const status = getWeatherStatus(tempCelsius);

  console.log("Weather report for" + cityName);
  console.log("Temperature:" + tempCelsius + "°C");
  console.log("Temperature:" + tempFahrenheit + "°F");
  console.log("Temperature:" + tempKelvin+ "K");
  console.log("Status:" + status);
}

//Cities
printWeatherReport("Amsterdam", 22);
printWeatherReport("Berlin", 15);
printWeatherReport("Copenhagen", -5);
printWeatherReport("Cairo", 30);
printWeatherReport("Istanbul", 6);



printwindChill("Amsterdam",22,15);
printwindChill("Berlin",15,20);
printwindChill("Copenhagen",-5,25);
printwindChill("Cairo",30,10);
printwindChill("Istanbul",6,15);