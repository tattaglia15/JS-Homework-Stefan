let myButton = $("button")
myButton.on("click", function(){
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        success: function(result) {
            for(let i = 0; i< result.length; i++) {
                let sum = (result[i].id +"."+ result[i].title)
                console.log(sum)
                if(sum === result[i].id +"."+ result[i].title) {
                    console.log("Printing Completed")
                } else {
                    console.log("Print not Completed")
                }
          }
        }
    })
})