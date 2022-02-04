document.getElementsByTagName("button")[0].addEventListener("click", function(){
    $.ajax({
        url: "https://dog.ceo/api/breed/hound/images",
        success: function(info) {
            for(let search of info.message) {
                $("button").after(`<img src=${search}>`)
            }
        },
    error: function(err) {
        console.log("Error!")
        }    
    })
})