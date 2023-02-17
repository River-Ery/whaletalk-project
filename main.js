let input = "Hello this input, we are going to see what happens to it later."
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === 'e') {
            resultArray.push(input[i]);
        }
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
};

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);
