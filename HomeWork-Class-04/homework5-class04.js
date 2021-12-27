let numbers = [5,8,20,15,50]
let max = numbers[0]
let count = 0
while(count < numbers.length) {
    count++

    if(numbers[count] >= max) {
        max = numbers[count]
    }
}
    alert(`Max number is : ${max}`)
let min = numbers[0]
while(count < numbers.length) {
    count++
    if(numbers[count] < min)
    min = numbers[count]
}
alert(`Min number is: ${min}`)

function minMaxNum(max, min) {
    return max + min
}
let sum = minMaxNum(max, min)
alert(`The sum of max and min number is: ${sum}`)
