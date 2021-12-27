let days = ["Monday" ,"Tuesday", "Wednesday", "Thursday", "Friday"];
let index = 0;
while(index < days.length) {
    console.log(`days[${index}]  ${days[index]}`)
    index++
    
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20]
let indeks = 0

while(indeks < numbers.length) {
    console.log(` ${numbers[indeks]}`)
    indeks++
    if(indeks % 2 ==0) {
        console.log(`\n ${indeks}`)
    }
    else {
        console.log(`" ${indeks}`)
    }
}