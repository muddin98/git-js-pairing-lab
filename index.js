//Code your solutions in this file
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i += 1) {
        console.log(i)
    }
} 

fiveToOneHundred();

function multiplesOfThree(){
    for (let i = 3; i <= 100; i += 3) {
        console.log(i);
    }
}

multiplesOfThree();

function multiplesOfThreeOrFive(){
    for (let i = 3; i <= 100; i += 1) {
        if ((i % 3 === 0) || (i % 5 === 0)){
            console.log(i)
        }
    }
} multiplesOfThreeOrFive()

function untilNum (num) {
    for (let i = 1; i <= num; i += 1) {
        console.log(i);
    }
}

untilNum(42);

function multiply(num1, num2) {
    return num1 * num2    
}
console.log(multiply(3,2)) 

function add (num1, num2) {
    if (num1 === num2) {
        let sum = num1 + num2;
        return sum * 3;
    } else {
        return num1 + num2;
    }
}

console.log(add(1, 3));

function isNegative(num) {
    if (num >= 0) {
        return false
    } else {
        return true
    }
} console.log(isNegative(5))


