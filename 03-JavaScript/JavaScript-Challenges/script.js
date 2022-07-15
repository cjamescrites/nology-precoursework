// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isPositive(number) {
    (Math.sign(number) === 1) ? console.log('true') : console.log('false')  
}

isPositive(1);
isPositive(-1);


// 2. Write a function that takes a number of days and converts it into an age.

const daysToYears = days =>{
    const years = days / 365;
    message = `You are ${years} years old`
    console.log(message);
}

daysToYears(365);

// 3. Write a function that takes three numbers and returns the largest of the three numbers.

function selectLargestNumber(number1, number2, number3)
{
    const largest = Math.max(number1, number2, number3);
    console.log(largest);
}

selectLargestNumber(1, 2, 3);

// 4. Write a function that takes an array of names and returns the last name from the array of names.

const numOfChallenges = ['Owen', 'Garret', 'Amelia', 'Michael', 'Cody'];
const lastChallenge = numOfChallenges.slice(-1);

console.log(lastChallenge);

// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

let lastChallengeNumbers = [1, 3, 5, -1];
let result = true;
for (let i = 0; i < lastChallengeNumbers.length; i++) {
    if (lastChallengeNumbers[i] <= 0) {
        result = false;
        break;
    }
}

console.log(result);