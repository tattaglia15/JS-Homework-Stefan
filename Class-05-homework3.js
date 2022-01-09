let numbers = [5,10,5,20,30,10,2,4,2,5];
let nums = [15,30,15,2,5,2,1,2,3,4,10];
let numse = [3,2,5,1,2,5,7,8,20,20,30,10]
function findNumber(array, number) {
    let count = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === number){
            count++
            console.log(number)
        }
    }
return count;    
}
findNumber(numbers, 2);