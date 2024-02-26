// ფუნქცია, რომელიც ამოწმებს ჩაწერილია თუ არა ციფრი
function isValidNumber(input) {
    return input.trim() !== '' && !isNaN(input);
}

// ფუნქცია, რომელიც აგდებს ალერტს რომ იუზერმა ჩაწეროს ვალიდური რიცხვი
function promptForNumber(message) {
    const userInput = prompt(message);

    if (isValidNumber(userInput)) {
        return Number(userInput);
    } else {
        alert("გთხოვთ ჩაწეროთ რიცხვი");
        return promptForNumber(message);
    }
}

// კალკულაციის ფუნქცია
function calculate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // ამოწმებს 0-ზე გაყოფას
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                alert("0-ზე გაყოფა არ შეიძლება.");
                return undefined;
            }
        default:
            alert("აირჩიე სწორი ოპერატორი.");
            return undefined;
    }
}

const numberOne = promptForNumber("ჩაწერე პირველი რიცხვი");

const numberTwo = promptForNumber("ჩაწერე მეორე რიცხვი");

let operator;

do {
    operator = prompt("აირჩიე ოპერატორი (+ - * /)");
} while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/');

// ასრულებს კალკულაციას
const result = calculate(operator, numberOne, numberTwo);

// აჩვენებს შედეგს თუ სწორად შესრულდა მოქმედებები
if (result !== undefined) {
    alert("შედეგი: " + result);
}
