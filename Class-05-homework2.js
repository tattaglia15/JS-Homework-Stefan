let firstNames = ["Bob", "Michael", "Tony", "Serena"];
let lastNames = ["Smith", "Johnson", "Morena", "Wiliams"];
let firstNlastN = []
let counter = 1
function firstLastNames(firstName, lastName) {
    for(let i = 0; i < firstNames.length; i++) {
        firstNlastN[i] = firstNames[i]+" "+ lastNames[i]
        console.log( counter +"."+ firstNlastN[i])
        counter++
    }
}
firstLastNames(firstNames,lastNames)
