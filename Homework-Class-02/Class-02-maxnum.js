var firstNumber = +prompt ("Enter your first number")
var secondNumber = +prompt ("Enter your second number")
var thirdNumber = +prompt ("Enter your third number")
var fourthNumber = +prompt ("Enter your fourth number")
var fiftNumber = +prompt ("Enter your fift number")

 if(firstNumber > secondNumber & firstNumber > thirdNumber & firstNumber > fourthNumber & firstNumber > fiftNumber) {
     alert(firstNumber)
 }
 else if (secondNumber > firstNumber & secondNumber > thirdNumber & secondNumber > fourthNumber & secondNumber > fiftNumber) {
     alert(secondNumber)
 }
 else if (thirdNumber > firstNumber & thirdNumber > secondNumber & thirdNumber > fourthNumber & thirdNumber > fiftNumber) {
    alert(thirdNumber)
}
else if (fourthNumber > firstNumber & fourthNumber > secondNumber & fourthNumber > thirdNumber & fourthNumber > fiftNumber) {
    alert(fourthNumber)
}
else if (fiftNumber > firstNumber & fiftNumber > secondNumber & fiftNumber > thirdNumber & fiftNumber > fourthNumber) {
    alert(fiftNumber)
}
else {
    alert("Not a Number")
}

