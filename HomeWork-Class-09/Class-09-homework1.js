let inputType = $("input")
$("button").on("click", function(){
    inputType.first().val()
    inputType.after(`<h1> ${inputType.val()} </h1>`)
})  