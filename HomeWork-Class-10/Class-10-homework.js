let myDiv = document.getElementsByTagName("div")[0]
let btn = myDiv.firstElementChild
btn.addEventListener("click" , function(){
    fetch("https://jsonplaceholder.typicode.com/todos") 
         .then(response => {
             response.json()
             .then(data => {
                for(let result of data) {
                    myDiv.innerHTML += `<h1> ${result.id +"."+ result.title}`
                    if(result.id == result.id && result.title == result.title) {
                        document.getElementsByTagName("h1")[0].innerText = `Print Completed`
                    } else {
                        alert("Print not completed")
                    }
                }
             })
         })
    .catch(err => {
        console.log(err)
    })
})