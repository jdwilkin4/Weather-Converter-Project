const numInputValue = document.getElementById("number");
const convertBtn = document.getElementById("convert");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset");

const temperatureConverter = () => {
    let userInput = numInputValue.value;
    let fahrenheit = Math.floor((userInput * 9) / 5 + 32);
    const conversionString = `<p>${userInput} degrees Celsius is</p> <p>${fahrenheit} degrees Fahrenheit </p>`;
    const responsesArr = [
        "Invalid input. Try again.",
        `<p class="result-text">Ohh..that's HOT<i class="fas fa-burn"></i></p>${conversionString}`,
        `<p class="result-text">Not to bad<i class="far fa-sun"></i></p> ${conversionString}`,
        `<p class="result-text">Getting colder <i class="fas fa-icicles"></i></p>${conversionString}`
    ];

    if (userInput > 57 || userInput < -90 || userInput === "") {
        result.innerHTML = responsesArr[0];
    } else if (userInput >= 30 && userInput <= 57) {
        result.innerHTML = responsesArr[1];
    } else if (userInput >= 20 && userInput <= 29) {
        result.innerHTML = responsesArr[2];
    } else {
        result.innerHTML = responsesArr[3];
    }
};

convertBtn.addEventListener("click", temperatureConverter);

numInputValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        temperatureConverter(e);
    }
});

document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && numInputValue.value === "") {
        result.innerHTML = "Please provide an input.";
    }
});

resetBtn.addEventListener("click", () => {
    result.innerHTML = '<i class="fas fa-fire"></i>';
    numInputValue.value = "";
});