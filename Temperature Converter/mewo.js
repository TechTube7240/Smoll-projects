let inputBox = document.getElementById("inputBox");
const clesiusToFahrenheit = document.getElementById("clesiusToFahrenheit");
const clesiusToKelvin = document.getElementById("clesiusToKelvin");
const fahrenheitToCelsius = document.getElementById("fahrenheitToCelsius");
const kelvinToCelsius = document.getElementById("kelvinToCelsius");
let result = document.getElementById("result")
const calculateBtn = document.getElementById("calculateBtn");


calculateBtn.onclick = function(){
    let input = Number(inputBox.value);
    let temp;

    if (clesiusToFahrenheit.checked){
        temp = input * 9 / 5 + 32 ;
        result.textContent = temp.toFixed(1) + "°F";

    }
    else if(clesiusToKelvin.checked){
        temp = input + 273.15;
        result.textContent = temp.toFixed(1) + "K";
    }
    else if(fahrenheitToCelsius.checked){
        temp = (input -32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else if(kelvinToCelsius.checked){
        temp = input - 273.15;
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Please select one of the above conversions"
    }
}