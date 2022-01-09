let firstDiv = document.getElementById("myDiv")
console.log(firstDiv)
let weigthKg = +prompt("Enter Weight") * 0.5

function weightInChickens(input, element) {
    element.innerHTML = "<h1> HomeWork Part 2 </h1>"
        element.innerHTML += `<p> Your Chickens Weight in Kg is: ${input} </p>`
}
weightInChickens(weigthKg, firstDiv)
