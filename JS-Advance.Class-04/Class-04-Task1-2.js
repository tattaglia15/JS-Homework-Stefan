function callApi(url) {
    $.ajax({
        url: url,
        success: function(data) {
             makeTablePlanets(data)
        } 
    })
}
function calApiSec(url) {
    $.ajax({
        url: url,
        success: function(rez) {
             makeTablePlanetsSec(rez)
        } 
    })
}

let firstButton = document.getElementsByTagName("button")[0].addEventListener("click", function(){
    callApi("https://swapi.dev/api/planets/?page=1")
})



let makeTablePlanets = input => {
    for(let score of input.results) {
        $("#firstTable").append(
            `<tr><td>Planet Name:</td><td> ${score.name}
            <tr><td>Population:</td><td> ${score.population}
            <tr><td>Climate::</td><td> ${score.climate}
            <tr><td>Gravity::</td><td> ${score.gravity} </tr>`)
    }

}
let makeTablePlanetsSec = input => {
    for(let circle of input.results) {
        $("#secTable").append(
            `<tr><td>Planet Name:</td><td> ${circle.name}
            <tr><td>Population:</td><td> ${circle.population}
            <tr><td>Climate::</td><td> ${circle.climate}
            <tr><td>Gravity::</td><td> ${circle.gravity} </tr>`)
    }

}
let secondButton = document.getElementsByTagName("button")[1].addEventListener("click", function(){
    $("#firstTable").hide()
      calApiSec("https://swapi.dev/api/planets/?page=2")
     $("#nextBtn").hide()
     $("#prevBtn").show()
})
$("#prevBtn").click(function(){
    $("#secTable").hide()
    $("#firstTable").show()
    $("#prevBtn").hide()
    $("#nextBtn").show()
})


