let myInput = $("#myInput");
let myButton =$(".myButton")
let myArray = []
myButton.on("click", function(){
    $("ul").append(`<li> ${myInput.val()} <input type = "checkbox"</li>`)
    myArray.push(myInput.val())
    console.log(myArray)
})