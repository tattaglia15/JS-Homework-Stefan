let numbers = [1,2,3,4,5,6,7,8,9,10];

function findNumber(array, type) {
    if(type === "Even") {
        for(let i = 0; i < numbers.length; i++) {
            if(numbers[i] % 2 == 0) {
                console.log(numbers[i])
            }
        }
    } else if(type === "Odd") {
        for(let j = 0; j <numbers.length; j++) {
            if(numbers[j] % 2 != 0) {
                console.log(numbers[j])
            }
        }
    } else {
        console.log("Invalid input")
    }
}

findNumber(numbers, "Even")