let firstDiv = document.getElementById("myDiv");
console.log(firstDiv);
let secondDiv = document.getElementById("mySum")
let numbers = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
function printNumbers(array, element) {
    element.innerHTML = "<h1> My array list: </h1>"
    element.innerHTML += "<ol>"
    for(let i = 0; i < numbers.length; i++) {
        element.innerHTML += `<li> ${numbers[i]} </li>`
    }
}
printNumbers(numbers,firstDiv)

function sumNumbers(element) {
    for(let j = 0; j < numbers.length; j++) {
        sum = sum + numbers[j]
        element.innerHTML = `<p> The sum of numbers: ${sum} </p>`
    }
}
sumNumbers(mySum)