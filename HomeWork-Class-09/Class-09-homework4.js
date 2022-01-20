let fistInput = $("#numberOne")
let secondInput = $("#numberTwo")
let thirdInput = $("#numberThree")
$("button").css("background-color", "blue")
$("button").on("click", function(){
    let result = (+fistInput.val() + +secondInput.val() + +thirdInput.val()) / 3
    $("button").after(`<h1> ${result} </h1>`)
    if(result >= 10) {
        $("h1").css("color", "green")
    } else if ( result < 10) {
        $("h1").css("color", "red")
    } else {
        alert("Wrong Input")
    }
})