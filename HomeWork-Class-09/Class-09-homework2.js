let firstInput = $("#firstInput");
let secondInput = $("#secondInput");

$("button").on("click", function(){
    $("button").after(`<h1></h1>`)
    $("h1").text(firstInput.val()).css("color", secondInput.val())
    if(firstInput.val() == "" || secondInput.val() == "color") {
        $("h3").text("This is Error")
    }

})
