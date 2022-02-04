$("button").on("click", function(){
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        success: function(data) {
             let counter = 0
              for(let score of data.results) {
                $("ul").append(`<li> ${score.name} ${score.url} </li>`)
                counter++
                if(counter === 10) {
                    break;
                }
            }
        },
    error: function(err) {
           console.log(err)
        }
    })
})
