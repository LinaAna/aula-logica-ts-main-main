function celsiusParaF(temperature) {
        return temperature * 9 / 5 + 32;
        }

        let temperature = Number(prompt("Temperatura em °C:"));

        alert(temperature + "°C = " + celsiusParaF(temperature) + "°F");
